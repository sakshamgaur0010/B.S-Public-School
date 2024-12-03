import React, { useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const Gallery = () => {
  // Animation variants for images
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  // Reusable component for animated images
  const AnimatedImage = ({ src, alt }) => {
    const ref = useRef(null);
    const controls = useAnimation();
    const isInView = useInView(ref, { triggerOnce: false }); // repeat every time it's scrolled into view

    // Start or reset animation based on isInView state
    React.useEffect(() => {
      if (isInView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [isInView, controls]);

    return (
      <motion.img
        ref={ref}
        src={src}
        alt={alt}
        initial="hidden"
        animate={controls}
        variants={imageVariants}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="block h-full w-full rounded-lg object-cover object-center"
      />
    );
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold font-handwriting mb-4 mt-16">
        School <span className="text-yellow-400 underline">Gallery</span>
      </h1>
      <div className="container mx-auto px-4 py-2 lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          {/* First column of images */}
          <div className="flex w-full sm:w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2 sm:w-1/2">
              <AnimatedImage src="/images/image1.jpg" alt="gallery" />
            </div>
            <div className="w-1/2 p-1 md:p-2 sm:w-1/2">
              <AnimatedImage src="/images/image2.jpg" alt="gallery" />
            </div>
            <div className="w-full p-1 md:p-2">
              <AnimatedImage src="/images/image3.jpg" alt="gallery" />
            </div>
          </div>
          {/* Second column of images */}
          <div className="flex w-full sm:w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <AnimatedImage src="/images/image4.jpg" alt="gallery" />
            </div>
            <div className="w-1/2 p-1 md:p-2 sm:w-1/2">
              <AnimatedImage src="/images/image5.jpg" alt="gallery" />
            </div>
            <div className="w-1/2 p-1 md:p-2 sm:w-1/2">
              <AnimatedImage src="/images/sports.jpg" alt="gallery" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Centered Button */}
      <div className="flex justify-center mt-8">
        <a href="/FeaturedImageGallery">
          <button className="bg-amber-500 font-handwriting text-white px-8 py-3 text-lg rounded-md font-semibold shadow-lg hover:bg-amber-600 transition duration-200 ease-in-out">
            See More
          </button>
        </a>
      </div>
    </>
  );
};

export default Gallery;
