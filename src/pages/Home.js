import React from 'react';
import Navbar from '../navbar/Nav';
import Footer from '../navbar/Footer'
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import backgroundImage from '../assets/belgian.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark,faDog,faUsers,faClock  } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';


import { useState } from "react";


const HomePage = () => {

  const[counterOn, setCounterOn] = useState(false)

 

  return (
    <div>
      <Navbar />
      
      <div className="h-screen bg-no-repeat bg-cover w-full  " 
      style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1 className='text-gray-300 text-2xl capitalize font-bold pt-40 px-20 '>nothing down here</h1>
        <div className='block px-20 mt-10 font-medium text-slate-100'>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,
           sed do eiusmo magna aliqua.<br/>Ut enim ad minim veniam, i ut aliquip ex ea commodo consequat <br/> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<br/> Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>

        </div>
      </div>
      <div className='bg-slate-800 to emerald-200 text-white pb-10'>
        {/*cards go here*/}
        <section>
          {/*card 1*/}
          <div className='text-center py-20'>
            <h4 className='uppercase font-bold text-emerald-500'>pricing</h4>
            <h1 className='capitalize text-3xl font-bold'>Get affordable pricing</h1>
          </div>
          <div className='max-w-7xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8 '>
            <div className='border border-gray-500 shadow-lg p-8 rounded-2xl bg-slate-900'>
              <p className=' text-sm font-bold z-2'>
                <span className=' top-0 left-0'>$</span>
                <span className='text-6xl pl-2'>10.8</span>
                <span className='font-normal'>per session</span>
              </p>
              
              <div className='py-10'>
                <h3 className='text-xl font-bold pb-3'>Dog Training</h3>
                <p className='leading-6'>30 sessions</p>
                
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
                  Get started
              </Link>
              </div>
            {/*card 2*/}
            <div className='border border-gray-500 shadow-lg p-8 rounded-2xl bg-slate-900'>
              <p className=' text-sm font-bold'>
                <span className=' top-0 left-0'>$</span>
                <span className='text-6xl pl-2'>5</span>
                <span className='font-normal'>per day</span>
              </p>
              
              <div className='py-10'>
                <h3 className='text-xl font-bold pb-3'>Boarding</h3>
                <p className='leading 6'>Upon visit</p>
                
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
                  Get started
              </Link>
              </div>
            
            {/*card 3*/}
            <div className='border border-gray-500 shadow-lg p-8 rounded-2xl bg-slate-900'>
              <p className=' text-sm font-bold'>
                <span className=' leading'>$</span>
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
                 Get started
              </Link>
              </div>
          </div>
        </section>
      </div>
     <div className='p-20 px-10 bg-emerald-200 grid lg:grid-cols-3 md:grid-cols-2  gap-10 '>
      <div >
       <h1 className='text-center'> background story</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.<br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div>
       <h1 className='text-center'> background story</h1>
       <p>Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. Congue quisque egestas diam in.<br/> Praesent semper feugiat nibh sed. Viverra orci sagittis eu volutpat odio facilisis. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan. Nullam vehicula ipsum a arcu. Nisi quis eleifend quam adipiscing vitae proin. Volutpat blandit aliquam etiam erat velit scelerisque in. Velit egestas dui id ornare arcu odio ut sem nulla. Ut sem viverra aliquet eget sit amet.</p>
      </div>
      <div >
       <h1 className='text-center'> background story</h1>
       <p>Egestas dui id ornare arcu odio. Imperdiet massa tincidunt nunc pulvinar sapien et. <br/>Consequat nisl vel pretium lectus quam. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Tellus rutrum tellus pellentesque eu tincidunt. Pharetra magna ac placerat vestibulum lectus. Tempor orci eu lobortis elementum nibh tellus molestie nunc. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Elementum eu facilisis sed odio morbi quis commodo odio aenean. </p>
      </div>
     </div> 
     <div className='bg-gray-700 p-30 grid lg:grid-cols-3 md:grid-cols-2 gap-10 py-10'>
       <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit = {()=>setCounterOn(false)} className='' >
        <div className="flex flex-col items-center relative">
            <p className="order-1 text-5xl text-orange-400 ">Happy Clients</p>
            <FontAwesomeIcon icon={faUsers} className="order-2 text-5xl text-white p-6" />
            <div className='text-3xl text-white '>
            { counterOn && <CountUp start = {0} end = {60}  duration = {2} delay={0} className="order-3 text-4xl font-bold"/> } 
            <span className='absolute'>+</span>
            </div>
          </div>
       </ScrollTrigger>
       <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit = {()=>setCounterOn(false)} className='' >
          <div className="flex flex-col items-center">
            <p className="order-1 text-5xl text-orange-400 ">Adoptions</p>
            <FontAwesomeIcon icon={faDog} className="order-2 text-5xl text-white p-6" />
            <div className='text-3xl text-white '>
            { counterOn && <CountUp start = {0} end = {30}  duration = {2} delay={0} className="order-3 text-4xl font-bold"/> } 
            <span className='absolute'>+</span>
            </div>
          </div>
       </ScrollTrigger>
       <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit = {()=>setCounterOn(false)} className='' >
          <div className="flex flex-col items-center">
            <p className="order-1 text-5xl text-orange-400 text-center "> Years Of Expirience</p>
            <FontAwesomeIcon icon={faClock} className="order-2 text-5xl text-white p-6 " />
            <div className='text-3xl text-white '>
            { counterOn && <CountUp start = {0} end = {5}  duration = {5} delay={0} className="order-3 text-4xl font-bold "/> } 
            <span className='absolute'>+</span>
            </div>
          </div>
        </ScrollTrigger>
        

       </div>
          <Footer/>
   </div>
  
   );
  };


export default HomePage;
