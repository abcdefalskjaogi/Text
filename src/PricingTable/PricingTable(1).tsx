//周美珍
import React from 'react';

// 定义套餐的接口
interface Plan {
  name: string;
  price: number;
//   一个字符串数组，列出该套餐提供的功能。
  features: string[];
  buttonText: string;
}

const PricingTable: React.FC = () => {

  // 定义套餐数据
  const plans: Plan[] = [
    {
      name: "基础套餐",
      price: 99,
      features: ["1小时拍摄", "10张精修照片", "在线相册"],
      buttonText: "选择此套餐"
    },
    {
      name: "标准套餐",
      price: 299,
      features: ["2小时拍摄", "30张精修照片", "在线相册", "专业打印"],
      buttonText: "选择此套餐"
    },
    {
        name: "中级套餐",
        price: 699,
        features: ["4小时拍摄", "50张精修照片", "在线相册", "专业打印", "定制相框"],
        buttonText: "选择此套餐"
      },
    {
      name: "高级套餐",
      price: 699,
      features: ["4小时拍摄", "无限制精修照片", "在线相册", "专业打印", "定制相框"],
      buttonText: "选择此套餐"
    }
  ];

//  // JSX 结构
return (
//     mx-auto：水平居中对齐。
// p-4：内边距为16px（根据默认的Tailwind配置）。
    <div className="container mx-auto p-4">
        {/* grid类使这个<div>成为一个网格容器。在小屏幕设备上显示两列，在大屏幕设备上显示三列 */}
        {/* grid-cols-1：默认情况下每行展示1个元素。
sm:grid-cols-2：当屏幕尺寸达到小(sm)时，每行展示2个元素。
lg:grid-cols-3：当屏幕尺寸达到大(lg)时，每行展示4个元素。
gap-8：设置每个网格项之间的间距 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
         {/* 使用.map()方法遍历plans数组，为每个套餐生成一个新的<div>元素。 */}
        {plans.map((plan, index) => (
            // key={index}：为列表中的每个元素提供一个唯一的键值，以便React能够高效地更新和渲染列表。
          <div key={index} className={`bg-gradient-to-r from-blue-400 to-purple-500 text-white shadow-lg rounded-lg overflow-hidden ${plan.name === '标准套餐' ? 'border-4 border-yellow-400' : ''}`}>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{plan.name}</div>
              <p className="text-gray-100 text-base">￥{plan.price}</p>
              <ul className="list-disc pl-5 mt-4">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="mb-2 text-gray-200">{feature}</li>
                ))}
              </ul>
            </div>
            
            {/* 包含按钮的<div>，用于放置购买或了解更多详情的操作按钮。
hover:bg-blue-700和hover:scale-105提供了悬停效果，改变按钮颜色并轻微放大按钮 */}
            <div className="px-6 pt-4 pb-2">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full transition transform hover:scale-105">
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingTable;


