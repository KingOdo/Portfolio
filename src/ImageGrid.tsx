import React from "react";

const ImageGrid: React.FC = () => {
  const images = [
    "/images/ping.jpg",
    "/images/codetrip.jpg",
    "/images/sunset1.jpg",
    "/images/plane.jpg",
   "/images/touched grass.jpg",
    "/images/hydration.jpg",
    
  ];

  
  return (
    <section className="max-w-8xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {images.map((src, index) => (
          <div key={index} className="relative w-full aspect-square overflow-hidden rounded">
            <img
              src={src}
              alt={`Image ${index + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;


