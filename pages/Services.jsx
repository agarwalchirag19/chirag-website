import { FaEthereum } from "react-icons/fa";
import Navbar from "../components/Navbar";
import React from "react";

const Services = () => {
  return (
    <div className="bg-white h-screen">
      <Navbar />
      <div>
        <div className="flex flex-1 md:flex-row flex-col justify-between py-20 px-10">
          <div className="h-[300px] w-[300px] bg-black text-white m-5 shadow-lg shadow-indigo-800/95">
            <div className="text-[20px] align-text-bottom px-5 py-3 justify-items-center flex-row   ">
              <h1 className="p-2">
                <p className="align-middle flex justify-center">Mining Hashrate</p>
                lerom ispum 
              </h1>
            </div>

            <div className="justify-evenly flex ">
              <button className="fixed mt-[10px] ">
                <h1 className="flex flex-row px-5 py-3 border text-center align-middle">
                  buy now{" "}
                  <span className="items-center align-middle mt-1">
                    {" "}
                    <FaEthereum />
                  </span>
                </h1>
              </button>
            </div>
          </div>
          <div className="h-[300px] w-[300px] bg-black text-white m-5 shadow-lg shadow-indigo-800/95"></div>
          <div className="h-[300px] w-[300px] bg-black text-white m-5 shadow-lg shadow-indigo-800/95"></div>
          <div className="h-[300px] w-[300px] bg-black text-white m-5 shadow-lg shadow-indigo-800/95"></div>
        </div>
        <div className="flex flex-1 md:flex-row flex-col justify-between py-20 px-10">
          <div className="h-[300px] w-[300px] bg-black text-white m-5 shadow-lg shadow-indigo-800/95"></div>
          <div className="h-[300px] w-[300px] bg-black text-white m-5 shadow-lg shadow-indigo-800/95"></div>
          <div className="h-[300px] w-[300px] bg-black text-white m-5 shadow-lg shadow-indigo-800/95"></div>
          <div className="h-[300px] w-[300px] bg-black text-white m-5 shadow-lg shadow-indigo-800/95"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
