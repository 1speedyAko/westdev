import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { AiOutlineHeart } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";
import { CiUser } from "react-icons/ci";

const Bar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className="w-full flex items-center justify-between py-4 px-6 bg-white z-10">
      <div className="flex items-center space-x-2">
        <div className="flex items-center">
        <form action="" method="post" className="flex ">
              <input
                type="text"
                placeholder="search your product"
                autoCorrect="off"
                className="py-2 px-4 rounded-l-md border border-blue-500 border-opacity-75 focus:outline-none focus:border-blue-700"
                    />
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-auto rounded-r-md focus:outline-none">
                Subscribe
              </button>
            </form>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative flex items-center">
          <div onClick={toggleDropdown} className="cursor-pointer flex items-center">
            <CiUser className="text-black text-xl" />
            <p className="text-black">Hello, User</p>
          </div>
          {dropdownVisible && (
            <div className="absolute right-0 mt-o w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10 transition-opacity ease-in-out duration-1000">
              <Link
                to="/signin"
                className="block px-4 py-2 text-center text-blue-500 hover:bg-blue-100"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="block px-4 py-2 text-center text-blue-500 hover:bg-blue-100"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
        <div className="text-black text-xl cursor-pointer">
          <AiOutlineHeart />
        </div>
        <div className="text-black text-xl cursor-pointer">
          <BiShoppingBag />
        </div>
      </div>
    </div>
  );
};

export default Bar;

