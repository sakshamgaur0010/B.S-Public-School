import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Activities = () => {
  return (
    <>

      <Navbar />
      
      {/* First section */}
      <section className="py-6 mt-16 bg-white sm:py-6 lg:pt-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="transition-transform transform hover:scale-102 hover:bg-gray-200 hover:shadow-xl duration-300 ease-in-out"> {/* Added hover:bg-gray-200 and hover:shadow-xl */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-12  transition duration-300 hover:shadow-2xl hover:bg-gray-300">
              
              {/* Left Side Image */}
              <div className="w-auto">
                <div className="h-60 w-70">
                  <img
                    className="object-cover w-full h-full rounded-lg"
                    src="/images/sports.jpg"
                    alt="Sports Activity"
                  />
                </div>

    
              </div>
              
              {/* Right Side Description */}
              <div className="w-full md:w-2/3 text-left">
                <blockquote>
                  <p className="text-lg leading-relaxed text-black font-handwriting">
                    Sports day is one of the most anticipated events in the school calendar, where students participate in races, relay competitions, long jumps, high jumps, and other track and field events. It brings together students, teachers, and parents in an atmosphere of excitement and celebration. Awards and certificates are often given to top performers, boosting morale and motivation. Sports activities held in schools play a crucial role in promoting physical fitness, teamwork, and healthy competition among students.
                  </p>
                </blockquote>
                <div className="mt-4">
                  <p className="text-lg font-semibold text-black">Babita Sharma</p>
                  <p className="mt-1 text-base text-black">Principal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second section */}
      <section className="py-6 bg-white sm:py-6 lg:py-6">
        <div className="max-w-full px-4 mx-auto sm:px-6 lg:px-8 ">
          <div className="transition-transform transform hover:scale-102  hover:bg-gray-200 hover:shadow-xl duration-300 ease-in-out">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-12 transition duration-300 hover:shadow-2xl hover:bg-gray-300">
              
              {/* Right Side Image */}
              <div className="w-auto">
                <div className="h-60 w-80">
                  <img
                    className="object-cover w-full h-full rounded-lg"
                    src="/images/Trip.jpg"
                    alt="Trip Activity"
                  />
                </div>
              </div>
              
              {/* Left Side Description */}
              <div className="w-full md:w-2/3 text-left">
                <p className="text-lg leading-relaxed text-black font-handwriting">
                  The school organizes an annual trip to Prem Wonderland and Water Kingdom, making it a highly anticipated event for students each year. This exciting trip features thrilling rides, water slides, and various attractions that cater to all age groups. Accompanied by teachers and staff for safety, students enjoy a day filled with fun, games, and camaraderie.
                </p>
                <div className="mt-4">
                  <p className="text-lg font-semibold text-black ">Babita Sharma</p>
                  <p className="mt-1 text-base text-black ">Principal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Third section */}
      <section className="py-6 bg-white sm:py-6 lg:py-6">
        <div className="max-w-full px-4 mx-auto sm:px-6 lg:px-8">
          <div className="transition-transform transform hover:scale-102 hover:bg-gray-200 hover:shadow-xl duration-300 ease-in-out">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-12  transition duration-300 hover:shadow-2xl hover:bg-gray-300">
              
              {/* Left Side Image */}
              <div className="w-auto">
                <div className="h-60 w-80">
                  <img
                    className="object-cover w-full h-full rounded-lg"
                    src="/images/medals.jpg"
                    alt="Sports Activity"
                  />
                </div>
              </div>
              
              {/* Right Side Description */}
              <div className="w-full md:w-2/3 text-left">
                <blockquote>
                  <p className="text-lg leading-relaxed text-black font-handwriting">
                  A school medal distribution ceremony is a special event held to recognize and reward students for their academic achievements, sports accomplishments, and other extracurricular successes. It is an important part of school life as it celebrates hard work, dedication, and talent, motivating students to strive for excellence.
                  </p>
                </blockquote>
                <div className="mt-4">
                  <p className="text-lg font-semibold text-black ">Babita Sharma</p>
                  <p className="mt-1 text-base text-black ">Principal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fourth section */}
      <section className="py-6 bg-white sm:py-6 lg:py-6">
        <div className="max-w-full px-4 mx-auto sm:px-6 lg:px-8">
          <div className="transition-transform transform hover:scale-102 hover:bg-gray-200 hover:shadow-xl duration-300 ease-in-out">
            <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row-reverse items-center gap-12 transition duration-300 hover:shadow-2xl hover:bg-gray-300">
              
              {/* Right Side Image */}
              <div className="w-auto">
                <div className="h-60 w-80">
                  <img
                    className="object-cover w-full h-full rounded-lg"
                    src="/images/Celebration.jpg"
                    alt="Trip Activity"
                  />
                </div>
              </div>
              
              {/* Left Side Description */}
              <div className="w-full md:w-2/3 text-left">
                <p className="text-lg leading-relaxed text-black font-handwriting">
                Republic Day is celebrated with great enthusiasm in schools across India on January 26th each year. The day begins with a flag hoisting ceremony, where the national flag is unfurled by the principal or a special guest, followed by the singing of the national anthem. Students participate in a variety of patriotic programs, including speeches, cultural dances, songs, and skits that highlight India's rich heritage and the importance of the Constitution.
                </p>
                <div className="mt-4">
                  <p className="text-lg font-semibold text-black ">Babita Sharma</p>
                  <p className="mt-1 text-base text-black ">Principal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Activities;
