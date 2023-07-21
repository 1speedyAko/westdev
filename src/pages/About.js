import React from "react";
import Navbar from "../navbar/Nav";
import Carousel from "../components/Carousel";
import { Stack, Typography } from "@mui/material";
import Footer from "../navbar/Footer"

const infoList = [
  {
    p: "Tailwind CSS is the only framework that Ive seen scale on large.",
    name: "Eugene Mose",
    role: "Handler, co-founder",
  },
  {
    p: "Tailwind CSS is the only framework that Ive seen scale on large.",
    name: "Charles Ako",
    role: "Tech Support, co-founder",
  },
  {
    p: "Tailwind CSS is the only framework that Ive seen scale on large.",
    name: "Rodney Winston",
    role: "Handler , co-founder",
  },
  {
    p: "Tailwind CSS is the only framework that Ive seen scale on large.",
    name: "Kevin",
    role: "Handler , co-founder",
  },
];

const Card = ({ info }) => {
  return (
    <div className="border border-gray-500 shadow-lg p-8 rounded-2xl bg-slate-900 ">
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          height: "100%",
          flexGrow: 1,
          "@media (max-width: 600px)": {
            display: "grid",
            gridTemplateColumns: "1fr ",
          },
        }}
        class="md:flex rounded-xl p-8 md:p-0">
        <Stack
          sx={{
            "@media (max-width: 600px)": {
              maxWidth: "60%",
              marginRight: "auto",
              marginLeft: "auto",
            },
          }}
          className="h-full w-full items-center content-center flex">
          <img
            class="w-full h-3/6 md:w-48 md:rounded-none  mt-auto mb-auto"
            src="https://ioanaradu.com/wp-content/uploads/2016/03/man-Javier-Bardem-suit.jpg"
            alt="Man"
          />
        </Stack>
        <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p class="text-lg font-medium">{info.p}</p>
          </blockquote>
          <figcaption class="font-medium">
            <div class="text-sky-500 dark:text-sky-400">{info.name}</div>
            <div class="text-slate-700 dark:text-slate-500">{info.role}</div>
          </figcaption>
        </div>
      </Stack>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div>
      <Navbar />

      <div className=" py-20 z-8 w-full text-white pb-10 bg-slate-800">
        <h1 className="text-center text-4xl mb-4 py-10">about page</h1>
        <div className="3/4-h text-center px-3">
          <p>
            ufu jj Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
            <br /> Lorem Ipsum has been the industry's standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            
          </p>
        </div>
        <div className="text-center text-4xl mb-4 text-bold py-10">
          <h1>Meet Our Team</h1>
        </div>
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
          {infoList.map((item, index) => (
            <Card key={index} info={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
