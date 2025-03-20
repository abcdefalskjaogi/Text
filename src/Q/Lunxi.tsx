//覃嘉盛
import React, { useState } from 'react';

const Lunxi = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const items = [
    { small: '/m1.jpg', big: '/m.png' },
    { small: '/l1.jpg', big: '/l.png' },
    { small: '/c1.jpg', big: '/c.png' },
    { small: '/w1.jpg', big: '/w.png' },
    { small: '/z1.jpg', big: '/z.png' },
    { small: '/h1.jpg', big: '/h.png' },
    { small: '/t1.jpg', big: '/t.png' },
  ];

  return (
    <div 
      className="max-w-[852px] mx-auto my-[100px] bg-[url('./images/bg.png')] bg-no-repeat overflow-hidden p-2.5"
    >
      <ul className="flex">
        {items.map((item, index) => (
          <li
            key={index}
            className={`relative h-[69px] mr-2.5 transition-all duration-300 ease-in-out
               ${index === activeIndex ? 'w-[224px]' : 'w-[69px]'
            }`}
            onMouseEnter={() => setActiveIndex(index)}
          >
            <a href="#" className="block h-full">
              <img
                src={item.small}
                alt="thumbnail"
                className={`absolute top-0 left-0 w-[69px] h-[69px] rounded-[5px] object-cover 
                  ${
                  index === activeIndex ? 'hidden' : 'block'
                }`}
              />
              <img
                src={item.big}
                alt="full"
                className={`w-[224px] h-[69px] object-cover 
                  ${
                  index === activeIndex ? 'block' : 'hidden'
                }`}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lunxi;