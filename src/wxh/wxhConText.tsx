//王显华
import React, { useState, useEffect } from "react";

const WxhConText = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // 图片数据
  const imgs = [
    { 
      title: 'B站', 
      url: 'https://img0.baidu.com/it/u=440690648,2663555220&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500',
      link: 'https://www.bilibili.com/'
    },
    { 
      title: '豆包', 
      url: 'https://p3-pc-sign.douyinpic.com/obj/tos-cn-p-0000/oImNIOQiZP1vJBCtdaIH6AIcP7oBEg9PjSiIn?x-expires=2049102000&x-signature=qFVCHE25XHSsUplxGkhjZmoFi0I%3D&from=1516005123',
      link: 'https://www.doubao.com/'
    },
    { 
      title: '淘宝', 
      url: 'https://img1.baidu.com/it/u=3527549210,2917780991&fm=253&fmt=auto&app=138&f=JPEG?w=794&h=426',
      link: 'https://uland.taobao.com/'
    },
    { 
      title: '京东', 
      url: 'https://img1.baidu.com/it/u=782737797,2841303470&fm=253&fmt=auto&app=138&f=JPEG?w=940&h=500',
      link: 'https://pro.jd.com/'
    },
  ];

  // 自动播放逻辑
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % imgs.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered, imgs.length]);

  // 手动切换 触发事件
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % imgs.length);
  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + imgs.length) % imgs.length);

  return (
    <div className="max-w-full md:max-w-4xl mx-4 md:mx-auto my-4 md:my-8 p-4 md:p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl md:rounded-2xl shadow-lg md:shadow-xl">
      {/* 轮播图容器 */}
      <div 
        className="relative overflow-hidden group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* 图片列表 */}
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {imgs.map((img, index) => (
            <div 
              key={index}
              className="min-w-full transform transition-all"
            >
              <img 
                src={img.url} 
                alt={img.title}
                className="w-full h-48 md:h-96 object-cover rounded-lg md:rounded-xl shadow-md md:shadow-lg border-2 md:border-4 border-white"
              />
            </div>
          ))}
        </div>

        {/* 半透明渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 md:from-black/30 to-transparent rounded-lg md:rounded-xl" />

        {/* 左右箭头(自适应显示) */}
        <button 
          onClick={goToPrev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 p-2 md:p-3 rounded-full 
          shadow-md md:shadow-lg hover:bg-white transition-all opacity-80 md:opacity-0 group-hover:md:opacity-100"
        >
          &lt;
        </button>
        <button 
          onClick={goToNext}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/80 text-gray-800 p-2 md:p-3 rounded-full 
          shadow-md md:shadow-lg hover:bg-white transition-all opacity-80 md:opacity-0 group-hover:md:opacity-100"
        >
          &gt;
        </button>

        {/* 链接导航（自适应显示） */}
        <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10 w-full px-4">
          <ul className="flex justify-center space-x-2 md:space-x-4 bg-white/80 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full shadow-md md:shadow-lg">
            {imgs.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className={`px-3 md:px-4 py-1 md:py-2 rounded-full text-sm md:text-base transition-all ${
                    index === currentIndex 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* 导航点（自适应显示） */}
        <div className="absolute bottom-2 md:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1 md:space-x-2">
          {imgs.map((item, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
                index === currentIndex 
                  ? 'bg-white w-4 md:w-6' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WxhConText;