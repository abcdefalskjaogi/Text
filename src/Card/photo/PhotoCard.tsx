// PhotoCard.tsx
import React from 'react';

interface PhotoCardProps {
  title: string;
  description: string;
  src: string;
  onClick: () => void;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ title, description, src, onClick }) => {
  return (
    <div 
      className="group bg-[#f8faf7] rounded-lg shadow-lg overflow-hidden relative 
        transition-all duration-300 hover:scale-[1.02] hover:shadow-xl
        hover:-translate-y-1 animate-card-in cursor-pointer
        border border-[#e8efe5] hover:border-[#d1e0c8]"
      style={{ transformStyle: 'preserve-3d' }}
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <img 
          className="w-full h-48 object-cover transform transition-transform duration-500 
            group-hover:scale-105 saturate-90 group-hover:saturate-100"
          src={src} 
          alt={title} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a535d]/30 to-transparent
          opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-semibold transition-colors duration-300
          text-[#1a535d] group-hover:text-[#4a7c59] transform group-hover:-translate-y-0.5">
          {title}
        </h2>
        {/* <p className="text-[#6b8f7f] font-medium transition-colors duration-300
          group-hover:text-[#d4af37] text-sm">
          {type}
        </p> */}
        <p className="text-[#5f7770] transition-all duration-500 opacity-90 
          group-hover:opacity-100 group-hover:translate-x-1 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="absolute inset-0 border-2 border-transparent 
        group-hover:border-[#c3d8b6]/50 transition-all duration-500 rounded-lg" />
    </div>
  );
};

export default PhotoCard;