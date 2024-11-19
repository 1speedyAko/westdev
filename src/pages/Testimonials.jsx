import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

function Item(props) {
  return (
    <Paper
      sx={{ backgroundColor: "#A7F3D0" }} // Emerald-200 HEX value
      className="text-center p-6 rounded-md shadow-md"
    >
      <blockquote className="mb-4">
        <p className="text-black">{props.item.description}</p>
      </blockquote>
      <figcaption>
        <div className="text-black font-semibold">{props.item.name}</div>
        <div className="text-emerald-700">{props.item.role}</div>
      </figcaption>
    </Paper>
  );
}

function Testimonial() {
  return (
    <div className="h-20px">
      <div className="grid lg:grid-cols-2 md:grid-cols-2">
        <div>
          <img
            className="w-full bg-cover h-50"
            src="https://media.istockphoto.com/id/1309652282/photo/white-japanese-spitz-at-home-sitting-on-cough.webp?a=1&b=1&s=612x612&w=0&k=20&c=oxIYVTjXBdMePRLVWLJqGvJniNPxIISDhHxMiPI4c9s="
            alt="dog"
          />
        </div>
        <div className="bg-emerald-200 sm:h-25">
          <h1 className="text-center text-3xl font-bold text-black pt-20 pb-10">
            Testimonials
          </h1>
          <Carousel className="bg-emerald-200">
            {[
              {
                name: "Willis Otieno",
                description:
                  "Exceptional training program! Clear instructions, patient trainers, and noticeable results. My dog improved significantly. Highly recommend for quality canine education!",
                // role: "Lawyer",
              },
              {
                name: "Kennedy Moreka",
                description:
                  "Top-notch training experience! Professional team, personalized approach, and excellent results. My dog's behavior transformed completely. Highly impressed and grateful!",
                // role: "Driver",
              },
              {
                name: "Fredrick",
                description: "Outstanding training! Professional, personalized approach. My dog’s behavior improved drastically. Highly recommend this service",
                // role: "Rancher",
              },
            ].map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
