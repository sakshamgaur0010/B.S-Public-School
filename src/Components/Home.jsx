import React, { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import './home.css';

const Home = () => {
  const ref = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(ref, { triggerOnce: false });

  const images = [
    '/images/school.jpg',
    '/images/school2.jpg',
    '/images/school3.jpg',
  ];

  const [bgImage, setBgImage] = useState(images[0]);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setBgImage(images[imageIndex]);
  }, [imageIndex]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className="home-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        backgroundImage: `url(${bgImage})`,
        transition: "background-image 0.8s ease-in-out",
      }}
    >
      <section className="flex flex-col items-center justify-center text-center bg-opacity-30 py-20 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={textVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-base font-semibold font-handwriting tracking-wider text-white uppercase">
              A Place for learners
            </p>
            <h1 className="mt-4 text-4xl font-extralight text-white lg:mt-8 sm:text-6xl xl:text-8xl font-handwriting">
              The Smarter Way to Learn Anything
            </h1>
            <p className="mt-4 text-base text-white lg:mt-8 sm:text-xl">
              Grow your career fast with the right teachers.
            </p>

            <a
              href="/contact"
              className="inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-yellow-300 rounded-full lg:mt-16 hover:bg-yellow-400 focus:bg-yellow-400"
              role="button"
            >
              Contact Us
              <svg
                className="w-6 h-6 ml-8 -mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;
