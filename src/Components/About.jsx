import React, { useState, useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const About = () => {
  // Array of images for the carousel
  const images = [
    "./images/about/image1.jpg",
    "./images/about/image6.jpg",
    "./images/about/image9.jpg",
    "./images/about/image18.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Cycle through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <>
      <Navbar />
      <section className="relative mt-20 py-10 bg-white-900 sm:py-16 lg:py-24">
        <div className="absolute inset-0 h-5/6 overflow-hidden">
          {/* Carousel images */}
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`carousel-${index}`}
              className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ease-in-out ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
        <div className="absolute inset-0 bg-gray-900/20"></div>

        <div className="relative w-full px-2 mx-auto mt-72 sm:px-4">
          <div className="overflow-hidden bg-white shadow-md">
            <div className="px-6 py-6 sm:px-8 sm:py-6">
              <div>
                <p className="text-2xl font-handwriting">About School</p>
                <p className="font-handwriting">
                  In the year 2018 some philanthropes of martial race living in
                  UP felt that they should establish an institution on
                  commemorating the secular ideals. Therefore, the Society for
                  Child Welfare was constituted and registered under the
                  Societies Registration Act at Garhmukteshwar for attainment of
                  this goal. The school has been consistently and deliberately
                  striving to achieve peaks of excellence in academics and
                  all-round social development of students through active
                  participation in various activities. Situated at the heart of
                  Garhmukteshwar, we are the upcoming school of value-based
                  learning in the area. Catering to the needs of semi-urban and
                  rural backgrounds of the surrounding areas, we are bridging
                  the gaps between the traditional Gurukool learning and modern
                  amalgamated learnings. We form the liaison between learnings
                  at home and the worldly application of those learnings through
                  practical understanding.
                </p>

                <p className="text-gray-600 font-bold pt-6 font-handwriting">
                  We assess ourselves on the basis of
                </p>
                <ol className="pl-9 font-handwriting" style={{ listStyleType: "decimal" }}>
                  <li>General Discipline</li>
                  <li>Sports Activities</li>
                  <li>Cultural and Social Activities</li>
                  <li>Competitive Examination Successes</li>
                </ol>
                <p className="pt-6 font-handwriting">
                  We have achieved outstanding results on all the above criteria
                  and have set high standards for other institutions to follow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
