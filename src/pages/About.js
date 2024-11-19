import React from "react";
import Navbar from "../navbar/Nav";
// import { Stack} from "@mui/material";
import Footer from "../navbar/Footer"

// const infoList = [
//   {
//     p: "Tailwind CSS is the only framework that Ive seen scale on large.",
//     name: "Eugene Mose",
//     role: "Handler, co-founder",
//   },
//   {
//     p: "Tailwind CSS is the only framework that Ive seen scale on large.",
//     name: "Charles Ako",
//     role: "Tech Support, co-founder",
//   },
//   {
//     p: "Tailwind CSS is the only framework that Ive seen scale on large.",
//     name: "Rodney Winston",
//     role: "Handler , co-founder",
//   },
//   {
//     p: "Tailwind CSS is the only framework that Ive seen scale on large.",
//     name: "Kevin",
//     role: "Handler , co-founder",
//   },
// ];

// const Card = ({ info }) => {
//   return (
//     <div className="border border-gray-500 shadow-lg p-8 rounded-2xl bg-slate-900 ">
//       <Stack
//         sx={{
//           display: "grid",
//           gridTemplateColumns: "1fr 3fr",
//           height: "100%",
//           flexGrow: 1,
//           "@media (max-width: 600px)": {
//             display: "grid",
//             gridTemplateColumns: "1fr ",
//           },
//         }}
//         class="md:flex rounded-xl p-8 md:p-0">
//         <Stack
//           sx={{
//             "@media (max-width: 600px)": {
//               maxWidth: "60%",
//               marginRight: "auto",
//               marginLeft: "auto",
//             },
//           }}
//           className="h-full w-full items-center content-center flex">
//           <img
//             class="w-full h-3/6 md:w-48 md:rounded-none  mt-auto mb-auto"
//             src="https://ioanaradu.com/wp-content/uploads/2016/03/man-Javier-Bardem-suit.jpg"
//             alt="Man"
//           />
//         </Stack>
//         <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
//           <blockquote>
//             <p class="text-lg font-medium">{info.p}</p>
//           </blockquote>
//           <figcaption class="font-medium">
//             <div class="text-sky-500 dark:text-sky-400">{info.name}</div>
//             <div class="text-slate-700 dark:text-slate-500">{info.role}</div>
//           </figcaption>
//         </div>
//       </Stack>
//     </div>
//   );
// };

const AboutPage = () => {
  return (
    <div>
      <Navbar />

      <div className=" py-20 z-8 w-full text-white pb-10 bg-slate-800 px-10">
        <h1 className="text-center text-4xl mb-4 py-10 font-bold text-emerald-600">About page</h1>
        <div className="grid 3/4-h text-center px-3 lg:grid-cols-2 md:grid-cols-2 gap-4">
        <div className=" gap-3">
          <h2 className="text-3xl ">Why us?</h2>
        <p className="container mt-4">
            At WK9, we understand that grooming is an esseential part of your dogs overall health and well-being.
            Our comprehensive grooming services are designed to keep your dog looking and feeling their best while ensuring a comftable
            and stress free for both you and your pet.
            Here at WK9, our basic obedience training program is tailored to establish a strong foundation of good behaviours
            and communication between you and your dog.
            At WK9, we specialize in providing top notch handler training to ensure that your dog is well behaved, obedient and you have no problem during engagement.
          </p>
        </div>
          
          <div>
            <img
              src="https://images.unsplash.com/photo-1601758124096-1fd661873b95?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9nc3xlbnwwfHwwfHx8MA%3D%3D"
              alt="dog pet"
            />
          </div>
        </div>
        {/* <div className="text-center text-4xl mb-4 text-bold py-10">
          <h1>Meet Our Team</h1>
        </div> */}
        {/* <div className="max-w-7xl mx-auto grid lg:grid-cols-2 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-8">
          {infoList.map((item, index) => (
            <Card key={index} info={item} />
          ))}
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
