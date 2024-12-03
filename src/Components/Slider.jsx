import React, { useState, useEffect } from 'react';

const Slider = () => {
  const images = [
    'https://thumbs.dreamstime.com/b/middle-school-building-20723831.jpg',
    'https://www.shutterstock.com/image-vector/back-school-cartoon-vector-kids-260nw-2493305457.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPOtAmKGfzCffrQ8MCOpw5z-kxhoD332KrwQ&s',
    'https://www.ashokaschools.org/images/video-cover.jpg',
    'https://images.unsplash.com/photo-1580582932707-520aed937b7b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2Nob29sfGVufDB8fDB8fHww'
  ];

  const links = [
    '/page1',  // Link for first image
    '/page2',  // Link for second image
    '/page3',  // Link for third image
    '/page4',  // Link for fourth image
    '/page5'   // Link for fifth image
  ];
const pages = [
   'Play Ground',
    'School Library',
    'Classroom',
    'Science Lab',
    'Lunchroom'
];
  const [currentIndex, setCurrentIndex] = useState(0);

  const back = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <article className="relative w-full flex flex-shrink-0 overflow-hidden shadow-2xl mt-20">
      <div className="rounded-full bg-gray-600 text-white absolute top-5 right-5 text-sm px-2 text-center z-10">
        <span>{currentIndex + 1}</span>/{images.length}
      </div>

      {images.map((image, index) => (
        <figure
          key={index}
          className={`h-96 transition-opacity duration-300 ${currentIndex === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <img src={image} alt="Image" className="absolute inset-0 z-10 h-full w-full object-cover opacity-70" />

          {currentIndex === index && (
            <a
              href={links[index]}
              className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-md hover:bg-green-800 z-20"
            >
              {pages[index]}
            </a>
          )}
        </figure>
      ))}

      <button onClick={back} className="absolute left-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200">
        <svg className="w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:-translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button onClick={next} className="absolute right-14 top-1/2 -translate-y-1/2 w-11 h-11 flex justify-center items-center rounded-full shadow-md z-10 bg-gray-100 hover:bg-gray-200">
        <svg className="w-8 h-8 font-bold transition duration-500 ease-in-out transform motion-reduce:transform-none text-gray-500 hover:text-gray-600 hover:translate-x-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </article>
  );
};

export default Slider;
