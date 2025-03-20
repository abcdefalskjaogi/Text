import React from "react";

// 个人信息组件
const PersonalInfo = () => {
  return (
    <div className="bg-gray-100 p-4 mb-4">
      <h2 className="text-2xl font-bold mb-2">个人信息</h2>
      <p>姓名：无</p>
      <p>联系方式：无</p>
      <p>邮箱：无</p>
    </div>
  );
};

// 技能组件
const Skills = () => {
  const skillsList = ["JavaScript", "React", "HTML", "CSS", "Git"];
  return (
    <div className="bg-gray-100 p-4 mb-4">
      <h2 className="text-2xl font-bold mb-2">技能</h2>
      <ul className="list-disc pl-5">
        {skillsList.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

// 项目经验组件
const Projects = () => {
  const projects = [
    {
      title: "无",
    
    },
    {
      title: "网上随便找的",
      description: "参与后端接口设计与开发，使用Node.js和Express框架，同时配合前端完成数据交互。",
      role: "全栈开发工程师",
      duration: "2023年7月 - 2023年12月"
    }
  ];
  return (
    <div className="bg-gray-100 p-4 mb-4">
      <h2 className="text-2xl font-bold mb-2">项目经验</h2>
      {projects.map((project, index) => (
        <div key={index} className="mb-3">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p>角色：{project.role}</p>
          <p>时间：{project.duration}</p>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
};

// 联系方式组件
const Contact = () => {
  return (
    <div className="bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-2">联系方式</h2>
      <p>欢迎通过以下方式联系我：</p>
      <a href="mailto:[你的邮箱]" className="text-blue-500 hover:underline">
        邮箱
      </a>
      <span className="mx-2">|</span>
      <a href="tel:[你的电话]" className="text-blue-500 hover:underline">
        电话
      </a>
    </div>
  );
};

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <PersonalInfo />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;