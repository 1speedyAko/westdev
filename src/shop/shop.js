import React from 'react'
// import { Link } from 'react-router-dom'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import { useState } from "react";
import{ RiAccountCircleLine} from 'react-icons/ri'
import {BsBagCheck  } from "react-icons/bs";
import { GiBackwardTime } from "react-icons/gi";
import { GrUserSettings} from "react-icons/gr";
import {AiOutlineUserAdd } from "react-icons/ai";
import { BiLogIn } from "react-icons/bi";
import {HiOutlineLogin } from "react-icons/hi";
import { FcAbout } from "react-icons/fc";
import { AiOutlineHome } from "react-icons/ai";
import {GrGallery } from "react-icons/gr";
import {BsHeart } from "react-icons/bs";
import Products from "./Products"





const Shop = () => {
  const[open, setOpen] = useState(true)
  const Menus = [
    { title: 'Account', icon: <RiAccountCircleLine /> },
    { title: 'Orders', icon: <BsBagCheck /> },
    { title: 'Saved Items', icon: <BsHeart /> },
    { title: 'Recently viewed', icon: <GiBackwardTime /> },
    { title: 'Setting', icon: <GrUserSettings /> },
    { title: 'SignUp', gap: true, icon: <AiOutlineUserAdd /> },
    { title: 'Login', icon: <BiLogIn /> },
    { title: 'Logout', icon: <HiOutlineLogin /> },
    { title: 'home', gap: true, icon: <AiOutlineHome /> },
    { title: 'About', icon: <FcAbout /> },
    { title: 'Gallery', icon: <GrGallery /> },
  ];

  
  return (
    <div className='flex '>
      <div
       className={`${open ? "w-72": "w-20"}
        duration-300 lg:z-10  p-5 pt-8 bg-emerald-300 relative`}>
      <AiOutlineArrowLeft 
      className={`absolute cursor-pointer -right-3 
      rounded-full top-9 w-7 border-2 border-gray-700 ${!open && 'rotate-180'}`}
      onClick={()=>setOpen(!open)}
      />

    <div className='flex gap-x-4 items-center'>
      <img
       src=''
       className={`cursor-pointer duration-400`}
      />
      <h1 className={`text-black orign-left font-medium text-xl duration-300 
      ${!open && 'scale-0'}`}>logo westk9</h1>
    </div>
    <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-black-300 text-lg items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              {Menu.icon /* Render the icon */}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
    </div>
      <div className='p-7 text-2xl font-semibold '>
       <Products/>
      </div>
      
    </div>
  )
}

export default Shop