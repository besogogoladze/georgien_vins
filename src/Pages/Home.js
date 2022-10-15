import React from "react";
import { CartState } from "../Context/UseContext";
import HomeCarousel from "./Home/HomeCarousel";
import "./home.css";
import SectionTwo from "./Home/SectionTwo";
import SectionThree from "./Home/SectionThree";

function Home() {
  const {
    state: { theme }
  } = CartState();
  

  return (
    <div className={theme}>
      <HomeCarousel/>
      <SectionTwo/>
      <SectionThree/>
    </div>
  );
}

export default Home;
