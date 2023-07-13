import React from "react";
import Navbar from "../navbar/Nav";
import Carousel from "../components/Carousel";
import { Stack, Typography } from "@mui/material";

const infoList = [
  {
    p: "Tailwind CSS is the only framework that Ive seen scale on large.",
    name: "Charles Ako",
    role: "ICT and Tech Support, Algolia",
  },
  {
    p: "Tailwind CSS is the only framework that Ive seen scale on large.",
    name: "Charles Ako",
    role: "ICT and Tech Support, Algolia",
  },
  {
    p: "Tailwind CSS is the only framework that Ive seen scale on large.",
    name: "Charles Ako",
    role: "ICT and Tech Support, Algolia",
  },
  {
    p: "Tailwind CSS is the only framework that Ive seen scale on large.",
    name: "Charles Ako",
    role: "ICT and Tech Support, Algolia",
  },
];

const Card = ({ info }) => {
  return (
    <div className="border border-gray-500 shadow-lg p-8 rounded-2xl bg-slate-900 ">
      <Stack
        sx={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          "@media (max-width: 600px)": {
            display: "grid",
            gridTemplateColumns: "1fr ",
          },
        }}
        class="md:flex h-full  rounded-xl p-8 md:p-0">
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
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            <br /> and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Contrary to popular
            belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000
            years old. Richard McClintock, a Latin professor at Hampden-Sydney
            College in Virginia, looked up one of the more obscure Latin words,
            consectetur, from a Lorem Ipsum passage, and going through the cites
            of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de
            Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
            Cicero, written in 45 BC. This book is a treatise on the theory of
            ethics, very popular during the Renaissance. The first line of Lorem
            Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
            1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
            reproduced below for those interested. Sections 1.10.32 and 1.10.33
            from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from
            the 1914 translation by H. Rackham.
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
      <Carousel />
    </div>
  );
};

export default AboutPage;
