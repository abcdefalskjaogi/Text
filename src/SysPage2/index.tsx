import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Card from '../myCard/index';
import Wen from '../Wen/Wen';
import Wxh from '../wxh/wxhConText';
import Cards from '../Card/index';
import QFW from '../QFW/qfw';
import LJJ from '../LJJ/LJJ';
import Q from '../Q/Lunxi';
import ImageGallery from '../ImageGallery/ImageGallery';
import PricingTable from '../PricingTable/PricingTable(1)';
import Deepseek from '../deepseek/dsapi';
import MyButton from '../MyButton/MyButton';

const SysPage2 = () => {
  const [activeContent, setActiveContent] = useState<string>('首页');

  const sidebarTitle: string = "menu";

  const menuItems = [
    { label: "简介" },
    { label: "Cards"},
    { label: "轮播图"},
    { label: "联系卡片"},
    { label: "信息组件"},
    { label: "王者农药"},
    { label: "摄影Card"},
    { label: "MyButton"},
    { label: "deepseek"},
    { label: "lmageGallery"},
    { label: "PricingTable"},
  ];

  const renderContent = () => {
    switch (activeContent) {
      case '简介':
        return <Wen />;
      case '轮播图':
        return <Wxh/>;
      case 'Cards':
        return <Cards/>;
      case '联系卡片':
        return <LJJ/>;
      case '信息组件':
        return <QFW/>;
      case '王者农药':
        return <Q/>;
      case '摄影Card':
        return <Card/>;
      case 'MyButton':
        return <MyButton text="点击来财" onClick={() => alert('来 来财 来 财')} />;
      case 'deepseek':
        return <Deepseek/>;
      case 'lmageGallery':
        return <ImageGallery/>;
      case 'PricingTable':
        return <PricingTable/>;
      default:
        return <Card />;
    }
  };

  return (
    <div className="h-screen flex flex-col">
      {/* <MyTitle /> */}
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          title={sidebarTitle}
          menuItems={menuItems}
          onMenuItemClick={setActiveContent}
        />
        <div className="flex-1 bg-gray-100 p-4 overflow-auto">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default SysPage2;