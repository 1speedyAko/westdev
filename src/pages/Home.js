import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../navbar/Footer";
import Card from "./Card"
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import backgroundImage from "../assets/belgian.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUsers, faDog, faClock } from "@fortawesome/free-solid-svg-icons";
import { ReactTyped } from "react-typed";
import Testimonial from "./Testimonials";

// import { Link } from "react-router-dom";
import { useState } from "react";







const HomePage = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="w-full bg-slate-800 ">
      <Navbar />

      <div
          className="h-screen bg-no-repeat bg-cover aspect-w-4 aspect-h-5 inset-0 relative"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          {/* Content */}
          <div className="relative z-10">
            <h1 className="text-gray-300 text-2xl capitalize font-bold pt-40 px-10">
              <ReactTyped strings={['Who are we ?']} typeSpeed={100} loop />
            </h1>
            <div className="block px-10 mt-5 font-medium text-slate-100">
              <p>
                Welcome to West k9, where we believe in the ability of every dog to be
                a well-behaved and happy member of your family. Founded in ____, our
                sole dedication is to provide top-notch training services to dogs of
                all ages, breeds, and temperaments. Our mission at WK9 is to enhance
                the bond between dogs and their owners through effective, compassionate
                techniques. We strive to create a positive and supportive environment
                where dogs can learn and grow together.
                <br />
                At our facility, our team of experienced and certified trainers brings
                a wealth of knowledge and passion to every training session. The team
                endeavors to stay up to date with the most recent training methods and
                industry standards to ensure we offer the finest possible guidance &
                support.
              </p>
            </div>
          </div>
        </div>


      <div className="p-10 px-10 bg-emerald-200 grid lg:grid-cols-3 md:grid-cols-2  gap-10 ">
        <div>
          
          <p>
            Central to our training philosophy is the belief that the reinforcement is key to successful and ethical dog training.
            We work closely with you to develop customized training programs that fit your lifestyle and goals ensuring that both you and your dog 
                    
          </p>
        </div>
        <div>
          
          <p>
           {/*  image here, */}
           <img className=""
           src='https://media.istockphoto.com/id/918538458/photo/two-boerboel-puppies-relaxing-together-at-the-park.webp?a=1&b=1&s=612x612&w=0&k=20&c=p4e43MvO2vAVgS_oti0Zsiy98f5jBj6ykTPBv6wfbeQ='
           alt="dog">
           </img>
          </p>
        </div>
        <div className="mb-4">
          
          <p className="">
          We prioritize understanding the unique needs of both our 
          canines and human clients to provide training solutions that work best for your
          and your dog. 
 
           
          </p>
        </div>
      </div>
      <div className="bg-slate-800 p-30 grid lg:grid-cols-3 md:grid-cols-2 gap-10 py-10">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
          className="">
          <div className="flex flex-col items-center ">
            <p className="order-1 text-5xl text-emerald-400 font-bold ">Happy Clients</p>
            <FontAwesomeIcon
              icon={faUsers}
              className="order-2 text-5xl text-blue-500 p-9"
            />
            <div className="order-3 text-3xl text-white ">
              {counterOn && (
                <CountUp
                  start={0}
                  end={60}
                  duration={2}
                  delay={0}
                  className=" text-4xl font-bold"
                />
              )}
              +
            </div>
          </div>
        </ScrollTrigger>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
          className="">
          <div className="flex flex-col items-center">
            <p className="order-1 text-5xl text-emerald-400 font-bold">Adoptions</p>
            <FontAwesomeIcon
              icon={faDog}
              className="order-2 text-5xl text-blue-500 p-9"
            />
            <div className="order-3 text-3xl text-white ">
              {counterOn && (
                <CountUp
                  start={0}
                  end={30}
                  duration={2}
                  delay={0}
                  className=" text-4xl font-bold"
                />
              )}
              +
            </div>
          </div>
        </ScrollTrigger>
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
          className="">
          <div className="flex flex-col items-center">
            <p className="order-1 text-5xl text-emerald-400 text-center font-bold">
              {" "}
              Years
            </p>
            <FontAwesomeIcon
              icon={faClock}
              className="order-2 text-6xl text-blue-500 p-9 "
            />
            <div className="order-3 text-3xl text-white ">
              {counterOn && (
                <CountUp
                  start={0}
                  end={5}
                  duration={5}
                  delay={0}
                  className=" text-4xl font-bold "
                />
              )}
              +
            </div>
          </div>
        </ScrollTrigger>
      </div>
      <div className="bg-emerald-200 py-8">
        <h1 className="text-black text-3xl text-center pb-8 font-bold">
          Our Services
        </h1>
        <div className="grid lg:grid-cols-4 text-black text-center text-xl gap-7 ">
          <div>
            <h1 className="font-bold">Dog Grooming</h1>
            
              <ul>
                <li>Nail clipping</li>
                <li>Full body wash</li>
                <li></li>
                <li></li>
              </ul>
          
          </div>
          <div>
            <h1 className="font-bold">Dog Training</h1>
            
            <ul>
                <li>Foundational Training</li>
                <li>Basic Training</li>
                <li>Intermidiate Training</li>
                <li>Advanced Training</li>
              </ul>
            
          </div>
          <div>
            <h1 className="font-bold">Handler Training</h1>
            
            <ul>
                <li>Basics of dog Training</li> 
                <li>Understanding behaviour and communication</li>
                <li>Practical Training techniques</li>
              </ul>
           
          </div>
          <div>
            <h1 className="font-bold">Dog Breeding</h1>
            <p className="text-center">
            <ul>
                <li>Stud services</li>
                <li>Puppy rehoming</li>
                <li></li>
                <li></li>
              </ul>
             </p>
          </div>
        </div>
        {/* <div className="text-center mt-10 pt-4">
          <button className="bg-gray-500 btn"> read more</button>
        </div> */}
      </div>
      <div className="bg-slate-800  text-white pb-10">
        {/*cards go here*/}
        <section>
          {/*card 1*/}
          <div className="text-center py-20">
            <h4 className="uppercase font-bold text-emerald-500">Hey!</h4>
            <h1 className="capitalize text-3xl font-bold">
              come lets help you
            </h1>
          </div>
          <div>
            <Card/>
          </div>
          
        </section>
      </div>
      <div>
        
      </div>
      < Testimonial/>
      <Footer />
    </div>
  );
};

export default HomePage;
