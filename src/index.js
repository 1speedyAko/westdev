import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Home from "./pages/Home";
import Shop from "./shop/Shop";
import SignUp from "./shop/Signup.JS";
import SignIn from "./shop/Login";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "services",
    element: <App />,
  },
  {
    path:"shop",
    element:<Shop/>
  },
  {
    path:"gallery",
    element:<Gallery/>
  },
  {
    path:"signIn",
    element:<SignIn/>
  },
  {
    path:"signUp",
    element:<SignUp/>
  }
 
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
