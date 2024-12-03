import { useState } from "react";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function LocationAndContact() {
  const [message, setMessage] = useState(""); // State to store success/error message
  const [messageType, setMessageType] = useState(""); // State to store message type (success or error)

  function Submit(e) {
    e.preventDefault();
    const form = document.querySelector("form");
    const formData = new FormData(form);

    fetch(
      "https://script.google.com/macros/s/AKfycbzlstkmFLYnnJHhGrtji_rG4nRFHeXPuH1nQK7sh5haUNVrQawIwfBG_52XBHdQRNOzBg/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((response) => {
        if (response.ok) {
          setMessage("Form submitted successfully!");
          setMessageType("success");
          form.reset(); // Clear the form
          // Clear the message after 5 seconds
          setTimeout(() => {
            setMessage("");
            setMessageType("");
          }, 5000);
        } else {
          setMessage("Form submission failed. Please try again.");
          setMessageType("error");
          // Clear the message after 5 seconds
          setTimeout(() => {
            setMessage("");
            setMessageType("");
          }, 5000);
        }
      })
      .catch((error) => {
        setMessage("An error occurred. Please try again later.");
        setMessageType("error");
        console.error("Error:", error);
      });
  }

  return (
    <>
      <Navbar />
      <section className="relative py-6 bg-gray-100 sm:py-12 lg:py-4 mt-20">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-full">
          <div className="bg-white p-8 shadow-md rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {/* Our Location Section */}
              <div>
                <div className="text-left mb-6">
                  <h2 className="text-4xl font-bold text-gray-900">
                    Our Location
                  </h2>
                  <p className="mt-4 text-lg text-gray-600">
                    Visit us at our office or reach out to us through the
                    contact details provided below.
                  </p>
                </div>
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    Contact Information
                  </h3>
                  <div className="flex items-center">
                    <MapPinIcon className="h-6 w-6 text-blue-600 mr-4" />
                    <p className="text-gray-700">
                      Durga Colony, Garh Mukteshwar, Uttar Pradesh, 245205
                    </p>
                  </div>
                  <div className="flex items-center">
                    <PhoneIcon className="h-6 w-6 text-blue-600 mr-4" />
                    <p className="text-gray-700">+917451013241</p>
                  </div>
                  <div className="flex items-center">
                    <EnvelopeIcon className="h-6 w-6 text-blue-600 mr-4" />
                    <p className="text-gray-700"> <a href="mailto:bhardwajjatin2002@gmail.com">bhardwajjatin2002@gmail.com </a></p>
                  </div>
                </div>
              </div>

              {/* Contact Us Section */}
              <div className="flex justify-end">
                <div className="w-full max-w-lg mx-auto">
                  <div className="text-center mb-6">
                    <h2 className="text-4xl font-bold text-gray-900">
                      Contact Us
                    </h2>
                  </div>

                  {/* Display success/error message */}
                  {message && (
                    <div
                      className={`mb-4 p-4 w-full text-center ${
                        messageType === "success"
                          ? "text-green-600 bg-green-100"
                          : "text-red-600 bg-red-100"
                      } rounded-md`}
                    >
                      {message}
                    </div>
                  )}

                  <form className="form mt-4" onSubmit={Submit}>
                    <div className="grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-4">
                      {/* Updated to stack inputs below each other on mobile */}
                      <div className="sm:col-span-1">
                        <label className="text-base font-medium text-gray-900">
                          Parent's Name
                        </label>
                        <div className="mt-1.5">
                          <input
                            type="text"
                            placeholder="Enter parent's name"
                            name="parentName"
                            className="block w-full px-3 py-2 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-1">
                        <label className="text-base font-medium text-gray-900">
                          Student Name
                        </label>
                        <div className="mt-1.5">
                          <input
                            type="text"
                            placeholder="Enter student name"
                            name="studentName"
                            className="block w-full px-3 py-2 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-1">
                        <label className="text-base font-medium text-gray-900">
                          Phone Number
                        </label>
                        <div className="mt-1.5">
                          <input
                            type="phone"
                            placeholder="Enter Phone Number"
                            name="phoneNumber"
                            className="block w-full px-3 py-2 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-1">
                        <label className="text-base font-medium text-gray-900">
                          Class
                        </label>
                        <div className="mt-1.5">
                          <input
                            type="number"
                            placeholder="Class"
                            name="className"
                            className="block w-full px-3 py-2 text-black bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div className="col-span-1 sm:col-span-2">
                        <label className="text-base font-medium text-gray-900">
                          Message
                        </label>
                        <div className="mt-1.5">
                          <textarea
                            placeholder="Message"
                            name="message"
                            className="block w-full px-3 py-2 text-black bg-white border border-gray-200 rounded-md resize-none focus:outline-none focus:border-blue-600 caret-blue-600"
                            rows="4"
                          ></textarea>
                        </div>
                      </div>

                      <div className="col-span-1 sm:col-span-2">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full px-4 py-2 text-base font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* School Hours Section */}
            <div className="mt-6 text-left">
              <h3 className="text-2xl font-semibold text-gray-800">
                School Hours
              </h3>
              <p className="text-gray-700 mt-2">
                Monday - Saturday: 7:20 AM - 1:20 PM
              </p>
              <p className="text-gray-700">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
