// principal_message.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PrincipalMessage = () => {
  return (
    <>
      <Navbar />
      <section className="py-20 bg-white sm:py-16 lg:py-52">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-0">
          <div className="md:flex md:items-center md:justify-center md:space-x-14 bg-white rounded-lg p-6 shadow-lg transition duration-300 hover:shadow-2xl hover:bg-gray-300">
            <div className="relative flex-shrink-0 w-48 h-48">
              <div className="absolute w-48 h-48 bg-gray-300 rounded-full -bottom-2 -right-1"></div>
              <img
                className="relative object-cover w-48 h-48 rounded-full"
                src="/images/principal.png"
                alt="Principal"
              />
            </div>

            <div className="mt-10 md:mt-0">
              <blockquote>
                <p className="text-xl text-black">
                  “As you continue your journey in education, remember that every
                  day is a new opportunity to learn, grow, and become the best
                  version of yourself. Stay curious, work hard, and believe in
                  your potential. Together, we can achieve great things. Let
                  kindness, respect, and perseverance guide you, and never
                  forget that each of you has the power to make a positive
                  difference in the world.”
                </p>
              </blockquote>
              <p className="text-lg font-semibold text-black mt-7">Babita Sharma</p>
              <p className="mt-1 text-base text-gray-600">Principal</p>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default PrincipalMessage;
