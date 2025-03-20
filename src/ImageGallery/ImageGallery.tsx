//秦妍慧
import React, { useState } from 'react';

const ImageGallery = () => {
    const images = [
       '/ImageGallery/aaa.jpg',
        '/ImageGallery/bbb.jpg',
        'ImageGallery/ccc.jpg',
        'ImageGallery/ddd.jpg',
        'ImageGallery/fff.jpg',
        'ImageGallery/sss.jpg'
       
    ];

    const [selectedImage, setSelectedImage] = useState<string | null>(null);
     // 使用 useState 钩子创建一个状态变量 selectedImage，初始值为 null

    const openModal = (image: string) => {
        // 定义一个名为 openModal 的函数，它接收一个参数 image
        setSelectedImage(image);
    };

    const closeModal = () => {     
        // 定义一个名为 closeModal 的函数
         setSelectedImage(null);        // 该函数的作用是将 selectedImage 状态重置为 null
    };

    return (
        <div className="p-4">   
        { /* 创建一个带有内边距为 4 的 div 元素 */ }
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {images.map((image, index) => (
                // 使用 map 方法遍历 images 数组，为每个图片创建一个 div 元素
                    <div
                        key={index}
                        className="rounded overflow-hidden shadow-lg cursor-pointer"
                        // 为 div 元素添加样式类，使其具有圆角、溢出隐藏、大阴影和指针样式
                        onClick={() => openModal(image)}
                    >
                        <img src={image} alt={`Gallery Image ${index + 1}`} className="w-full h-auto" />
                        { /* 在 div 元素内插入一个 img 元素，src 属性设置为 selectedImage 的值，
                            alt 属性设置为 "Enlarged"，添加样式类使其宽度占满父元素，高度自适应 */ }
                    </div>
                ))}
            </div>
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 transition-opacity duration-300">
                    <div className="relative max-w-4xl transform transition-transform duration-300">
                        <img src={selectedImage} alt="Enlarged" className="w-full h-auto" />
                        <button
                            className="absolute top-0 right-0 m-4 text-black text-2xl focus:outline-none"
                            onClick={closeModal}
                            aria-label="Close Modal"
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageGallery;    