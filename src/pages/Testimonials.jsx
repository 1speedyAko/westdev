import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import dogs from "../assets/dogs.png"

function Item(props) {
    return (
      <Paper className='bg-emerald-200 text-center'>
        <blockquote>
        <p className="bg-emerald-200  text-black-500 dark:text-black">{props.item.description}</p>
        </blockquote>
        <figcaption className="bg-emerald-200 ">
          <div className="text-black dark:text-black">{props.item.name}</div>
          <div className="text-emerald-700 dark:text-emerald-500">{props.item.role}</div>
        </figcaption>
      </Paper>
        
    );
  }

function Testimonial() {
    return (
    <div className='h-20px'>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 ">
        <div>
          <img 
          className=" w-full bg-cover h-50"
          src={dogs}
          alt="dog"
          />
        </div>
        <div className="bg-emerald-200  sm:h-25">
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
   </div>)
}

export default Testimonial;