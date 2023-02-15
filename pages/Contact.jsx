import {
  FaFacebook,
  FaFacebookF,
  FaGoogle,
  FaLinkedinIn,
  FaRegEnvelope,
} from "react-icons/fa";

import Head from "next/head";
import Image from "next/image";
import { MdLockOutline } from "react-icons/md";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className='cursor-default bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 h-screen'>
         <main className="flex flex-row xs:flex-col justify-center align-center py-[20vh] ">
        <div className=" rounded-2xl shadow-2xl flex w-2/3 max-w-4xl bg-white">
          <div className="w-3/5 p-5">
            <div className="text-left font-bold">
              <span className="text-black">Crypto Cloud</span>
            </div>
            <div className="py-10">
              <h2 className="text-3xl font-bold text-red-700 mb-2">
                Sign into your account
              </h2>
              <div className="border-2 w-10 border-red-700 inline-block mb-2"></div>
              <div className="flex justify-center my-2">
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaFacebookF className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaLinkedinIn className="text-sm" />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-200 rounded-full p-3 mx-1"
                >
                  <FaGoogle className="text-sm" />
                </a>
              </div>
              <p className="text-gray-400 my-3">or use your email</p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-100 w-64 p-2 flex items-center mb-3 ">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    className="bg-gray-100 outline-none flex-1"
                    type="email"
                    name="email"
                    placeholder="Email "
                  />
                </div>
                <div className="bg-gray-100 w-64 p-2 flex items-center">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    className="bg-gray-100 outline-none flex-1"
                    type="email"
                    name="email"
                    placeholder="Password "
                  />
                </div>
                <br />
                <div className="flex w-64 mb-5 justify-between">
                  <label className="flex items-center text-xs">
                    <input
                      type="checkbox"
                      name="remember me"
                      className="mr-1"
                    />
                    Remember me
                  </label>
                  <a href="#" className="text-xs">
                    Forgot Password ?
                  </a>
                </div>
                <a
                  href="#"
                  className="border-2 border-red-600 text-red-600 rounded-full px-12 py-2 inline-block font-semibold hover:bg-red-600 hover:text-white"
                >
                  Sign In
                </a>
              </div>
            </div>
          </div>
          {/*sign in section*/}
          <div className="w-2/5 bg-red-600 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12">
            <h2 className="text-2xl font-bold mb-2">W E L C O M E</h2>
            <div className="border-4 w-20 border-white inline-block mb-3"></div>
            <p className="mb-10">
              To become a Member of Crypto Cloud click below to Sign Up as new
              member
            </p>
            <a
              href="#"
              className="border-2 border-white rounded-full justify-center px-12 py-2 inline-block font-semibold hover:bg-white hover:text-red-600"
            >
              Sign Up
            </a>
          </div>
          {/*sign up section*/}
        </div>
      </main>
      </div>
     
    </div>
  );
};

export default Contact;
