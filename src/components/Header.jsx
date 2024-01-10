import React, { useState } from "react";
import { FaBars, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";
export const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <div className="flex justify-center sm:justify-center gap-10 items-center z-10 relative h-[80px]">
        <div>
          {/* <img className="w-[200px] h-[70px] mx-auto" src={Logo} alt="Logo" /> */}
          <FaRocket className="py-1 mx-2" size={40} />
        </div>

        <div>
          <h1 className="text-center flex">
            Welcome To My Capsule Custom Page!
          </h1>
        </div>
        <div className="hidden sm:flex sm:justify-between sm:items-center">
          <Link to="/">
            <button className="border rounded-xl py-2 px-7 mx-2 hover:border-yellow-600 hover:bg-orange-500">
              Home
            </button>
          </Link>
          <Link to="about">
            <button className="border rounded-xl py-2 px-7 mx-2 hover:border-yellow-600 hover:bg-orange-500">
              About
            </button>
          </Link>
          <Link to="contact">
            <button className="border rounded-xl py-2 px-7 mx-2 hover:border-yellow-600 hover:bg-orange-500">
              Contact
            </button>
          </Link>
        </div>
        <div onClick={handleNav} className="sm:hidden z-10">
          <FaBars size={20} className="mr-4 cursor-pointer" />
        </div>
        <div
          onClick={handleNav}
          className={
            nav === true
              ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-column"
              : "absolute top-0 h-screen left-[-100%] ease-in duration-500"
          }
        >
          <ul className="h-full w-full text-center pt-12">
            <li className="text-2xl py-8">
              <Link to="/">
                <button>Home</button>
              </Link>
            </li>
            <li className="text-2xl py-8">
              <Link to="/about">
                <button>About</button>
              </Link>
            </li>
            <li className="text-2xl py-8">
              <Link to="/contact">
                <button>Contact</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
