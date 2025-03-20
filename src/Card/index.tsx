// App.tsx
import React, { useState, useEffect } from 'react';
import PhotoCard from './photo/PhotoCard';
import photos from './photo/photos';

const App: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="container mx-auto p-4 min-h-screen relative bg-[#f5f9f3]">
      <h1 className="text-4xl font-serif mb-8 text-center animate-fade-in-down
        bg-gradient-to-r from-[#1a535d] to-[#4a7c59] bg-clip-text text-transparent
        tracking-wider drop-shadow-sm">
        图片集
      </h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {photos.map((photo, index) => (
          <PhotoCard
            key={index}
            title={photo.title}
            // type={photo.type}
            description={photo.description}
            src={photo.src}
            onClick={() => handleImageClick(photo.src)}
          />
        ))}
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 bg-[#1a535d]/95 backdrop-blur-md z-50 flex items-center justify-center p-4 
            animate-fade-in"
          onClick={closeModal}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Enlarged preview"
              className="object-contain max-h-[80vh] rounded-lg shadow-2xl
                transform transition-transform duration-300 scale-95 hover:scale-100
                border-2 border-[#e8efe5]/20"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute -top-10 right-0 text-[#e8efe5] hover:text-[#d4af37] transition-colors
                text-4xl font-serif hover:scale-105"
              onClick={closeModal}
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;