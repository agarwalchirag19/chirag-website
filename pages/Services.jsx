import {FaEthereum} from 'react-icons/fa';
import Navbar from "../components/Navbar";
import React from "react";

const Services = () => {
  return (
    <div className="bg-white h-screen">
      <Navbar />
      <div>
        <div className="flex flex-1 md:flex-row flex-col justify-between py-20 px-10">
          <div className="h-[300px] w-[300px] bg-black text-white m-5 shadow-lg shadow-indigo-800/95">
            <div >
              <p>
                leo leo leo leo leo leo leo leo leo leo leo leo leo leo leo leo leo leo leo 
                <br/>
                <br/>
                <br/>idha8a
                leroam am
              </p>
              <button>
                <span className="inline-flex items-center px-4 py-2 border ">
                  buy now <FaEthereum/>
                </span>
              </button>
            </div>
          </div>
          <div className="h-[300px] w-[300px] bg-black m-5 shadow-lg shadow-indigo-800/95"></div>
          <div className="h-[300px] w-[300px] bg-black m-5 shadow-lg shadow-indigo-800/95"></div>
          <div className="h-[300px] w-[300px] bg-black m-5 shadow-lg shadow-indigo-800/95"></div>
        </div>
        <div className="flex flex-1 md:flex-row flex-col justify-between py-20 px-10">
          <div className="h-[300px] w-[300px] bg-black m-5 shadow-lg shadow-indigo-800/95"></div>
          <div className="h-[300px] w-[300px] bg-black m-5 shadow-lg shadow-indigo-800/95"></div>
          <div className="h-[300px] w-[300px] bg-black m-5 shadow-lg shadow-indigo-800/95"></div>
          <div className="h-[300px] w-[300px] bg-black m-5 shadow-lg shadow-indigo-800/95"></div>
        </div>
      </div>
    </div>
  );
};

export default Services;
