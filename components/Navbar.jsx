import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-black navbar   px-20 py-5 text-xl text-white ">
      <div className="flex flex-row justify-between">
      <Link href='/'>
        <div>Crypto Cloud</div>
      </Link>
        <div>
          <ul className="flex flex-row justify-evenly">
            <Link href="/About">
              <li className="mx-2">About</li>
            </Link>
            <Link href="/Services">
              <li className="mx-2">Services</li>
            </Link>
            <Link href="/Contact">
              <li className="mx-2">Contact</li>
            </Link>
            
          </ul>
        </div>
        <div>
            <button>
                log out
            </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
