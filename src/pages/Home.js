import React from 'react';
import Navbar from '../navbar/Nav';
import backgroundImage from '../assets/belgian.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';



const HomePage = () => {
  return (
    <div>
      <Navbar/>
      
      <div className="h-screen bg-no-repeat bg-cover " 
      style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1 className='text-gray-300 text-2xl capitalize font-bold pt-40 px-20 '>nothing down here</h1>
        <div className='grid grid-cols-2 sm:grid grid-cols-1 px-20 mt-10 font-medium text-slate-100'>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmo magna aliqua.<br/>Ut enim ad minim veniam, i ut aliquip ex ea commodo consequat <br/> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

        </div>
      </div>
      <div className='bg-slate-800 text-white'>
        {/*cards go here*/}
        <section>
          {/*card 1*/}
          <div className='text-center py-20'>
            <h4 className='uppercase font-bold text-emerald-500'>pricing</h4>
            <h1 className='capitalize text-3xl font-bold'>Get affordable pricing</h1>
          </div>
          <div className='max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 '>
            <div className='border border-gray-500 shadow-lg p-8 rounded-2xl bg-slate-900'>
              <p className='relative text-sm font-bold'>
                <span className='absolute top-0 left-0'>$</span>
                <span className='text-6xl pl-2'>10.8</span>
                <span className='font-normal'>per day</span>
              </p>
              
              <div className='py-10'>
                <h3 className='text-xl font-bold pb-3'>Dog Training</h3>
                <p className='leading 6'>30 sessions</p>
                
              </div>
              <ul className='pb-10 space-y-4'>
                <li className="flex items-center text-sm leading 6">
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className="text-emerald-500 text-xl mr-2 hover:text-red-500 "
                  />
                  Protection Work
                </li>
                <li className="flex items-center text-sm leading 6">
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className="text-emerald-500 text-xl mr-2 hover:text-red-500 "
                  />
                  Behaviour And Socialization
                </li>

              </ul>
              <Link to='' 
                className='mt-8 block rounded-lg bg-emerald-500 px-6 py-4 text-center text-sm font-semibold leading-4 shadow-md hover:bg-emerald-700 '>
                  Buy Now
              </Link>
              </div>
            {/*card 2*/}
            <div className='border border-gray-500 shadow-lg p-8 rounded-2xl bg-slate-900'>
              <p className='relative text-sm font-bold'>
                <span className='absolute top-0 left-0'>$</span>
                <span className='text-6xl pl-2'>17.9</span>
                <span className='font-normal'>per day</span>
              </p>
              
              <div className='py-10'>
                <h3 className='text-xl font-bold pb-3'>Handler Training</h3>
                <p className='leading 6'>60 sessions</p>
                
              </div>
              <ul className='pb-10 space-y-4'>
                <li className="flex items-center text-sm leading 6">
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className="text-emerald-500 text-xl mr-2 hover:text-red-500 "
                  />
                  Dog Management
                </li>
                <li className="flex items-center text-sm leading 6">
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className="text-emerald-500 text-xl mr-2 hover:text-red-500 "
                  />
                  Dog Handling
                </li>

              </ul>
              <Link to='' 
                className='mt-8 block rounded-lg bg-emerald-500 px-6 py-4 text-center text-sm font-semibold leading-4 shadow-md hover:bg-emerald-700 '>
                  Buy Now
              </Link>
              </div>
            
            {/*card 3*/}
            <div className='border border-gray-500 shadow-lg p-8 rounded-2xl bg-slate-900'>
              <p className='relative text-sm font-bold'>
                <span className='absolute top-0 left-0'>$</span>
                <span className='text-6xl pl-2'>14.3</span>
                <span className='font-normal'>per sessions</span>
              </p>
              
              <div className='py-10'>
                <h3 className='text-xl font-bold pb-3'>Dog Grooming</h3>
                <p className='leading 6'> Upon visit</p>
                
              </div>
              <ul className='pb-10 space-y-4'>
                <li className="flex items-center text-sm leading 6">
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className="text-emerald-500 text-xl mr-2 hover:text-red-500 "
                  />
                  Full Grooming
                </li>
                <li className="flex items-center text-sm leading 6">
                  <FontAwesomeIcon
                    icon={faBookmark}
                    className="text-emerald-500 text-xl mr-2 hover:text-red-500 "
                  />
                    Basic Grooming
                </li>

              </ul>
              <Link to='' 
                className='mt-8 block rounded-lg bg-emerald-500 px-6 py-4 text-center text-sm font-semibold leading-4 shadow-md hover:bg-emerald-700 '>
                  Buy Now
              </Link>
              </div>
             
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;
