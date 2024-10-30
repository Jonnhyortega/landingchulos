import React from "react";
import { Routes as ReactDomRoutes, Route } from "react-router-dom";
import { Home } from "../Pages/Home/Home";
import Diseños from "../Pages/Diseños/Diseños";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";

export const Routes = () => {
  return (
    <ReactDomRoutes>
      <Route index path="/" element={<Home />} />
      <Route path="/disenos" element={<Diseños />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/write-message" element={<Contact />} />
    </ReactDomRoutes>
  );
}

export default Routes;
