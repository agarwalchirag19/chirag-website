import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black navbar px-[150px] py-5 text-[25px] text-white">
      <div className="flex flex-row justify-between tracking-wider">
        <Link href="/">
          <div>Crypto Cloud</div>
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
              <li className="mx-8">Contact</li>
            </Link>
          </ul>
        </div>
        <div>
          <button className="text-center tracking-wider cursor-default">
            WELCOME🙌
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
