import React from "react";
import ContactbackgoundImg from "../assets/Images/andreas-m-Ek3-ORVnI0A-unsplash.jpg";

const ContactForm = () => {
  return (
    <div
      className="bg-cover bg-center "

      style={{ backgroundImage: `url(${ContactbackgoundImg})` }}
    >
      <div className="container">
        <div class="max-w-screen-md mx-auto p-5">
          <div class="text-center mb-5">
            <p class="mt-4 text-sm leading-7 text-black font-regular uppercase">
              Contact
            </p>
            <h3 class="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
              Free Case Evaluation
            </h3>
          </div>

          <form class="w-full">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  type="text"
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border 
                   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name'
                  placeholder="Name"
                />
                <p class="text-red-500 text-xs italic">
                  Please fill out this field.
                </p>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <input
                  type="text"
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email'
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  type="text"
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border 
                   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name'
                  placeholder="Phone"
                />
              </div>
              <div class="w-full md:w-1/2 px-3">
                <input
                  type="text"
                  className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email'
                  placeholder="Email"
                />
              </div>
            </div>

            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <textarea
                  rows="10"
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  placeholder="Message"
                ></textarea>
              </div>
              <div class="flex justify-center w-full px-3">
                <button
                  class="shadow bg-yellow-600 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
