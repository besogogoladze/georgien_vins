import React, { useEffect } from "react";
import { CartState } from "../Context/UseContext";
import HomeCarousel from "./Home/HomeCarousel";
import "./home.css";
import SectionTwo from "./Home/SectionTwo";
import SectionThree from "./Home/SectionThree";
import axios from "axios";
import { queryClient } from "..";

function Home() {
  const {
    state: { theme },
  } = CartState();
  useEffect(() => {
    queryClient.prefetchQuery("products", async () => {
      const data = await axios.get(process.env.REACT_APP_PRODUCTS_API, {
        headers: { "Access-Control-Allow-Origin": "*" },
      });
      return data;
    });
  }, []);

  return (
    <div className={theme}>
      <HomeCarousel />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default Home;
