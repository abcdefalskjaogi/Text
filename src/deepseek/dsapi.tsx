import { useState, useRef, useEffect } from 'react';

interface Message {
  id: number;
  content: string;
  isUser: boolean;
}

const API_URL = 'http://localhost:11434/api/generate';

function DSAPI() {
  const [messages, setMessages] = useState<Message[]>([]);//状态管理，消息数组
  const [inputMessage, setInputMessage] = useState('');//输入框内容
  const [isLoading, setIsLoading] = useState(false);//是否正在加载
  const messagesEndRef = useRef<HTMLDivElement>(null);
  //一个指向 DOM 元素的引用（ref），通常与消息列表底部的一个空 div 元素关联。

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };//页面会平滑地滚动，使得该引用元素进入视口，从而实现将视图滚动到消息列表底部的效果

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  //副作用Hook，当messages变化时自动滚动到底部

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || isLoading) return;

    // 添加用户消息
    const userMessage: Message = {
      id: Date.now(),
      content: inputMessage,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'deepseek-r1:8b', // 使用验证通过的模型名称
          prompt: inputMessage,
          stream: false
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API请求失败: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      
      // 调试输出
      console.log('API响应数据:', data);

      if (!data.response) {
        throw new Error('无效的API响应格式');
      }

      const aiMessage: Message = {
        id: Date.now(),
        content: data.response,
        isUser: false,
      };

      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('API请求错误:', error);
      const errorMessage: Message = {
        id: Date.now(),
        content: `请求失败: ${error instanceof Error ? error.message : '未知错误'}`,
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xl p-4 rounded-lg ${
                message.isUser
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-800 shadow'
              }`}
            >
              <p className="whitespace-pre-wrap">{message.content}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white p-4 rounded-lg shadow">
              <div className="animate-pulse">
                <div className="h-4 bg-gray-300 rounded w-32 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-48"></div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form
        onSubmit={handleSubmit}
        className="border-t bg-white p-4"
      >
        <div className="flex gap-2 max-w-4xl mx-auto">
          <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="输入你的问题..."
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows={1}
            disabled={isLoading}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            发送
          </button>
        </div>
      </form>
    </div>
  );
}

export default DSAPI;