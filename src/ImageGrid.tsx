import React, { useEffect, useState } from "react";

const ImageGrid: React.FC = () => {
  const images = React.useMemo(
    () => [
      "/images/ping.jpg",
      "/images/codetrip.jpg",
      "/images/sunset1.jpg",
      "/images/plane.jpg",
      "/images/touched grass.jpg",
      "/images/hydration.jpg",
    ],
    []
  );

  const [loaded, setLoaded] = useState(false);

  // Preload images before showing them
  useEffect(() => {
    let loadedCount = 0;
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setLoaded(true);
        }
      };
    });
  }, [images]);

  return (
    <section className="max-w-8xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full aspect-square overflow-hidden rounded"
          >
            {loaded ? (
              <img
                src={src}
                alt={`Image ${index + 1}`}
                loading="eager"
                className="absolute inset-0 w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGrid;
