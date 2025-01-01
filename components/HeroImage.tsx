import React from 'react';

interface HeroImageProps {
  title: string;
  imageSrc: string;
  altText: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ title, imageSrc, altText }) => {
  return (
    <div
      className="relative w-full h-[30vh] md:h-[30vh] bg-cover bg-center"
      style={{ backgroundImage: `url(${imageSrc})` }}
    >
      <div className="absolute inset-0 bg-black opacity-40" /> 
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl md:text-5xl font-bold">
        {title}
      </div>
    </div>
  );
};

export default HeroImage;
