import React from 'react';
//  <MyButton text="点击来财" onClick={() => alert('来 来财 来 财')} />
interface ButtonProps {
text: string;
onClick?: () => void;
}

const MyButton: React.FC<ButtonProps> = ({ text, onClick }) => {
return (
<button
className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
onClick={onClick}
>
{text}
</button>
);
};

export default MyButton;