import Link from "next/link";
import React from "react";
import login from "./../pages/Contact";

const Navbar = () => {
  return (
    <div className="bg-black navbar px-[150px] py-5 text-[25px] text-white">
      <div className="flex flex-row justify-between tracking-wider">
        <Link href="/">
          <div className="flex flex-row">
            Crypto Cloud <p className="text-[30px] px-2">☁</p>
          </div>
        </Link>
        <div>
          <ul className="flex flex-row justify-evenly">
            <Link href="/About">
              <li className="mx-8">About</li>
            </Link>
            <Link href="/Services">
              <li className="mx-8">Services</li>
            </Link>
            <Link href="/Contact">
              <li className="mx-8">Contact Us</li>
            </Link>
          </ul>
        </div>
        <div>
          <button className="text-center animate-bounce tracking-wider cursor-default">
            WELCOME🙌
          </button>
          </div>
        </div>
      <div>
   </div>
  </div>
    
  );
};

export default Navbar;
