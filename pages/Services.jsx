import { FaEthereum } from "react-icons/fa";
import Navbar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div className='h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500'>
      <Navbar />
      <div className="cursor-default ">
        <div className="text-2xl text-red-700 px-[100px] py-[60px] ">
          <section className="text-gray-400 bg-black body-font ">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-white ">
                  Pricing 😀
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                  The best pricing you can find is only at Crypto Cloud
                </p>
                <div className="flex mx-auto border-2 border-none rounded overflow-hidden mt-6 ">
                  <p className="py-1 px-4 bg-red-500 text-white focus:outline-none ">
                    Monthly
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap -m-4">
                <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                  <div className="h-full p-6 rounded-lg border-2 border-blue-700 flex flex-col relative overflow-hidden transfrom hover:bg-blue-600 duration-500 hover:scale-90">
                    <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
                      BASIC
                    </h2>
                    <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                      <span>$30</span>
                    </h1>
                    <p className="flex items-center text-gray-400 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Kapaow Algo : 10 M/Hs
                    </p>
                    <p className="flex items-center text-gray-400 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Cortex Algo : 20 M/Hs
                    </p>
                    <p className="flex items-center text-gray-400 mb-6">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Octopus Algo : 20 M/Hs
                    </p>
                    <button className="flex items-center mt-auto text-white bg-blue-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-700 rounded ">
                      0.013
                      <span className="text-lg ml-1 font-normal text-gray-400">
                        <span>
                          <FaEthereum />
                        </span>
                      </span>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-auto"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                    <p className="text-lg text-gray-400 mt-3">Give it a try ?</p>
                  </div>
                </div>
                <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                  <div className="h-full p-6 rounded-lg border-2 border-red-500 flex flex-col relative overflow-hidden hover:bg-red-400 duration-500 hover:scale-90">
                    <span className="bg-red-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl ">
                      POPULAR
                    </span>
                    <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
                      PRO
                    </h2>
                    <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                      <span>$75</span>
                    </h1>
                    <p className="flex items-center text-gray-400 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Kapaow Algo : 20 M/Hs
                    </p>
                    <p className="flex items-center text-gray-400 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Cortex Algo : 40 M/Hs
                    </p>
                    <p className="flex items-center text-gray-400 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Ethash Algo : 60 M/Hs
                    </p>
                    <p className="flex items-center text-gray-400 mb-6">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Octopus Algo : 40 M/Hs
                    </p>
                    <button className="flex items-center mt-auto text-white bg-red-500 border-0 py-2 px-4 w-full focus:outline-none hover:bg-red-600 rounded">
                      0.035
                      <span className="text-lg ml-1 font-normal text-gray-400">
                        <span>
                          <FaEthereum />
                        </span>
                      </span>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-auto"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                    <p className="text-lg text-gray-400 mt-3">Give it a try?</p>
                  </div>
                </div>
                <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                  <div className="h-full p-6 rounded-lg border-2 border-blue-700 flex flex-col relative overflow-hidden hover:bg-blue-600 duration-500 hover:scale-90">
                    <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
                      BUSINESS
                    </h2>
                    <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                      <span>$100</span>
                    </h1>
                    <p className="flex items-center text-gray-400 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Kapaow Algo : 30 M/Hs
                    </p>
                    <p className="flex items-center text-gray-400 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Cortex Algo : 80 M/Hs
                    </p>
                    <p className="flex items-center text-gray-400 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Ethash Algo : 120 M/Hs
                    </p>
                    <p className="flex items-center text-gray-400 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Zhash Algo : 100 M/Hs
                    </p>
                    <p className="flex items-center text-gray-400 mb-6">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Octopus Algo : 60 M/Hs
                    </p>
                    <button className="flex items-center mt-auto text-white bg-blue-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-700 rounded">
                      0.068
                      <span className="text-lg ml-1 font-normal text-gray-400">
                        <span>
                          <FaEthereum />
                        </span>
                      </span>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-auto"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                    <p className="text-lg text-gray-400 mt-3">Give it a try?</p>
                  </div>
                </div>
                <div className="p-4 xl:w-1/4 md:w-1/2 w-full">
                  <div className="h-full p-6 rounded-lg border-2 border-blue-700 flex flex-col relative overflow-hidden hover:bg-blue-600 duration-500 hover:scale-90">
                    <h2 className="text-sm tracking-widest text-gray-400 title-font mb-1 font-medium">
                      SPECIAL
                    </h2>
                    <h1 className="text-5xl text-white leading-none flex items-center pb-4 mb-4 border-b border-gray-800">
                      <span>$250 </span>
                    </h1>
                    <p className="flex items-center text-gray-400 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Kapaow Algo : 40 M/Hs
                    </p>
                    <p className="flex items-center text-gray-400 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Cortex Algo : 120 M/Hs
                    </p>
                    <p className="flex items-center text-gray-400 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Ethash Algo : 180 M/Hs{" "}
                    </p>
                    <p className="flex items-center text-gray-400 mb-2">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Zhash Algo : 200 M/Hs
                    </p>
                    <p className="flex items-center text-gray-400 mb-6">
                      <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-800 text-gray-500 rounded-full flex-shrink-0">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2.5"
                          className="w-3 h-3"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 6L9 17l-5-5"></path>
                        </svg>
                      </span>
                      Octopus Algo : 100 M/Hs
                    </p>
                    <button className="flex items-center mt-auto text-white bg-blue-800 border-0 py-2 px-4 w-full focus:outline-none hover:bg-blue-700 rounded">
                      0.101
                      <span className="text-lg ml-1 font-normal text-gray-400">
                        <span>
                          <FaEthereum />
                        </span>
                      </span>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        className="w-4 h-4 ml-auto"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                    </button>
                    <p className="text-lg text-gray-400 mt-3">Give it a try?</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Contact;
