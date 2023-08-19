import React from "react";
import Navbar from "../navbar/Nav";
import Footer from "../navbar/Footer";
import Card from "./Card"
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import backgroundImage from "../assets/belgian.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faDog,
  faUsers,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";


function Item(props) {
  return (
    <Paper className='bg-emerald-200 text-center'>
      <blockquote>
      <p className="bg-emerald-200  text-black-500 dark:text-black">{props.item.description}</p>
      </blockquote>
      <figcaption class="bg-emerald-200 ">
        <div class="text-black dark:text-black">{props.item.name}</div>
        <div class="text-emerald-700 dark:text-emerald-500">{props.item.role}</div>
      </figcaption>
    </Paper>
      
  );
}

const HomePage = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <div className="w-full bg-slate-800">
      <Navbar />

      <div
        className="h-screen bg-no-repeat bg-cover aspect-w-4 aspect-h-5  "
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1 className="text-gray-300 text-2xl capitalize font-bold pt-40 px-20 ">
          Who are we?
        </h1>
        <div className="block px-20 mt-10 font-medium text-slate-100">
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmo magna aliqua.
            <br />
            Ut enim ad minim veniam, i ut aliquip ex ea commodo consequat <br />{" "}
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
            <br /> Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui officia deserunt mollit anim id est laborum.{" "}
          </p>
        </div>
      </div>

      <div className="p-20 px-10 bg-emerald-200 grid lg:grid-cols-3 md:grid-cols-2  gap-10 ">
        <div>
          <h1 className="text-center"> background story</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco
            
          </p>
        </div>
        <div>
          <h1 className="text-center"> background story</h1>
          <p>
            Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel.
            Congue quisque egestas diam in.
            <br /> Praesent semper feugiat nibh sed. Viverra orci sagittis eu
            volutpat odio facilisis. Mattis vulputate enim nulla aliquet
           
          </p>
        </div>
        <div>
          <h1 className="text-center"> background story</h1>
          <p>
            Egestas dui id ornare arcu odio. Imperdiet massa tincidunt nunc
            pulvinar sapien et. <br />
            Consequat nisl vel pretium lectus quam. Vestibulum mattis
           
          </p>
        </div>
      </div>
      <div className="bg-slate-800 p-30 grid lg:grid-cols-3 md:grid-cols-2 gap-10 py-10">
        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn(false)}
          className="">
          <div className="flex flex-col items-center ">
            <p className="order-1 text-5xl text-emerald-400 ">Happy Clients</p>
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
            <p className="order-1 text-5xl text-emerald-400 ">Adoptions</p>
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
            <p className="order-1 text-5xl text-emerald-400 text-center ">
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
            <h1 className="text-2xl ">Dog Grooming</h1>
            <p >some text here about Dog Grooming</p>
          </div>
          <div>
            <h1 className="text-2xl ">Dog Training</h1>
            <p>some text here about Dog Training </p>
          </div>
          <div>
            <h1 className="text-2xl ">Handler Training</h1>
            <p>some text here about Handler Training</p>
          </div>
          <div>
            <h1 className="text-2xl ">Dog Breeding</h1>
            <p>some text here about Dog Breeding </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-800  text-white pb-10">
        {/*cards go here*/}
        <section>
          {/*card 1*/}
          <div className="text-center py-20">
            <h4 className="uppercase font-bold text-emerald-500">pricing</h4>
            <h1 className="capitalize text-3xl font-bold">
              Get affordable pricing
            </h1>
          </div>
          <div>
            <Card/>
          </div>
          
        </section>
      </div>
       <div className='h-3/4'>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 ">
          <div>
            <img 
            className="w-full"
            src="https://images.pexels.com/photos/1906153/pexels-photo-1906153.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="dog"
            />
          </div>
          <div className="bg-emerald-200 w-full sm:h-25">
            <h1 className="text-center text-3xl font-bold text-black pt-20 pb-10">
              Testimonials
            </h1>
            <Carousel className="bg-emerald-200 ">
              {[
                {
                  name: "Fred Oguta",
                  description:"some txt here about customer feedback and satisfaction",
                    
                  role:"Engineer",

                },
                {
                  name: "Collins Omae",
                  description: "some txt here about customer feedback and satisfaction",
                  role:"Driver",
                },
                {
                  name: "John Doe",
                  description: "some txt here about customer feedback and satisfacti",
                  role:"Rancher",
                }

              ].map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          </div>
        </div>
       </div>
      <Footer />
    </div>
  );
};

export default HomePage;
