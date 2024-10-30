import React from "react";
import { Hero } from "../../Components/Hero/Hero";
import { HomeWrapper } from "./HomeStyles";
import Benefits from "../../Components/Benefits/Benefits";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";
import Banner from "../../Components/Banner/Banner";
export function Home() {
  return (
    <HomeWrapper>
      <Hero />
      <AboutUs />
      <Benefits />
      <Banner/>
      <Contact/>
    </HomeWrapper>
  );
}
export default Home;
