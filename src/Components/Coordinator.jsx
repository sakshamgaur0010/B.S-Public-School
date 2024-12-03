import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Coordinator = () => {
  return (
    <>
      <Navbar />
      <section className="py-20 bg-white sm:py-10 lg:py-44 lg:pb-32">
        <div className="w-full px-4 mx-auto sm:px-6 lg:px-">
          <div className="md:flex md:items-center md:justify-center md:space-x-14 bg-white rounded-lg p-6 shadow-lg transition duration-300 hover:shadow-2xl hover:bg-gray-300">
            <div className="relative flex-shrink-0 w-48 h-48">
              <div className="absolute w-48 h-48 bg-gray-300 rounded-full -bottom-2 -right-1"></div>
              <img
                className="relative object-cover w-48 h-48 rounded-full"
                src="/images/co-ordinator.png"
                alt="Principal"
              />
            </div>

            <div className="mt-10 md:mt-0">
              <blockquote>
                <p className="text-xl text-black">
                  The ground to mobilise society necessitates a pattern of
                  education endowed with sheer value. It compels me to predict
                  that  B.S PUBLIC SCHOOL is quick to embrace the changing demand of time.
                  Never to give up has been its brainchild since its inception.
                  Constructively, it is racing, being well cognizant of its
                  mission of providing motherly protection to be well-cultured
                  right from the pre-primary wing. A timely fashion with every
                  minute facility over here prompts it to provide a work
                  culture. On the other hand, persistent effort to endow the
                  young leaners with clear vision is its goal. En-route a
                  promising career,  B.S PUBLIC SCHOOL, is a platform of values and morals as
                  the hallmark of growth. Its venture is with a missionary zeal.
                  Though, an uphill task yet  B.S PUBLIC SCHOOL is faithfully engaged in
                  accomplishing its goal.
                </p>
              </blockquote>
              <p className="text-lg font-semibold text-black mt-7">
               Urvashi Bhardwaj 
              </p>
              <p className="mt-1 text-base text-gray-600">Co-Ordinator</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Coordinator;
