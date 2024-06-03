import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cardInfo = [
    {
        usd:"$",
        price: 10.8,
        description:"per session",
        info:"Dog Training",
        sessions:"30 sessions",
        service1:"Protection Work",
        service2:"Behaviour And Socialization",
        button:"Get Started"
    },
    {
        usd:"$",
        price:15.9,
        description:"per session",
        info:"Handler Training",
        sessions:"30 sessions",
        service1:" Dog Management",
        service2:"Dog Handling",
        button:"Get Started"
        
    },
    {
        usd:"$",
        price:20.2,
        description:"per session",
        info:"Dog Grooming",
        sessions:"Upon Vist",
        service1:"Full Grooming",
        service2:" Basic Grooming",
        button:"Get Started"
    },
]



const card = ()=> {
    return(
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 ">
            {cardInfo.map((item) => (
                 <div className="border border-gray-500 shadow-lg p-8 rounded-2xl bg-slate-900">
                 <p className=" text-sm font-bold z-2">
                   <span className=" top-0 left-0">{item.usd}</span>
                   <span className="text-6xl pl-2">{item.price}</span>
                   <span className="font-normal">{item.description}</span>
                 </p>
       
                 <div className="py-10">
                   <h3 className="text-xl font-bold pb-3">Dog Training</h3>
                   <p className="leading-6">30 sessions</p>
                 </div>
                 <ul className="pb-10 space-y-4">
                   <li className="flex items-center text-sm leading 6">
                     <FontAwesomeIcon
                       icon={faBookmark}
                       className="text-blue-500 text-xl mr-2 hover:text-blue-700 "
                     />
                     Protection Work
                   </li>
                   <li className="flex items-center text-sm leading 6">
                     <FontAwesomeIcon
                       icon={faBookmark}
                       className="text-blue-500 text-xl mr-2 hover:text-blue-700 "
                     />
                     Behaviour And Socialization
                   </li>
                 </ul>
                 <Link
                   to=""
                   className="mt-8 block rounded-lg bg-blue-500 px-6 py-4 text-center text-sm font-semibold leading-4 shadow-md hover:bg-blue-700 ">
                   Get started
                 </Link>
               </div>
            
            ))}
       
      </div>
    )
}

export default card;