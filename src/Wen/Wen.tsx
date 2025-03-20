import React from 'react';


const Wen = () =>{



    return(

         
            <div className="p-4 md:p-8 bg-slate-500 min-h-screen ">
              {/* 个人信息卡片 */}
              <div className="bg-slate-300 rounded-2xl p-8 shadow-xl">
                <div className="text-center">
                  
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">张三</h1>
                  <p className="text-gray-600 mb-6">前端开发学习者 | React爱好者</p>
                </div>
                {/* 个人简介和技术栈部分 */}
                <div className="bg-gray-100 rounded-xl p-6 shadow-md">
                  <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">个人简介</h2>
                  <p className="text-gray-600 mb-6">
                  我在学习react+tailwindcss ，前端只了解简单的css ， 
                  布局只会flow. react我只会简单的标签，还没有学习状态管理和副作用。你看我能做什么酷炫的单页面玩玩
                  </p>
                  <h3 className="text-base md:text-lg font-medium text-gray-800 mb-3">技术栈</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-600">
                    <li>html</li>
                    <li>node.js</li>
                    <li>JavaScript</li>
                    <li>React</li>
                  </ul>
                </div>
              </div>
            </div>
          );
        };
        

export default Wen;

