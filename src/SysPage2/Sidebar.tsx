import React, { useState } from 'react';

interface SidebarProps2 {
  title: string;
  menuItems: { label: string}[];
  onMenuItemClick: (label: string) => void;
}

const Sidebar = (props: SidebarProps2) => {
  const { title, menuItems, onMenuItemClick } = props;
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`relative ${isCollapsed ? 'w-0' : 'w-48'} transition-all duration-300`}>
      {/* 折叠按钮 */}
      <button
        onClick={toggleSidebar}
        className={`absolute top-1/2 -translate-y-1/2 p-2 bg-transparent hover:bg-gray-50 transition-colors ${
          isCollapsed
            ? 'left-0 rounded-r text-black'
            : '-right-3 rounded-l bg-gray-200 text-black'
        }`}
      >
        {isCollapsed ? '>' : '<'}
      </button>

      {/* 侧边栏内容 */}
      <div className="flex h-full bg-gray-800 overflow-hidden">
        <div className="flex flex-col w-28 p-4 text-white">
          <div className="text-sm font-bold mb-4">{title}</div>
          <ul className="space-y-2">
            {menuItems.map((item, index) => (
              <li key={index}>
                <button
                  onClick={() => onMenuItemClick(item.label)}
                  className="text-blue-400 hover:underline w-full text-left"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;