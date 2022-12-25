import React, { useEffect, useState } from "react";
import { CartState } from "../Context/UseContext";
import HomeCarousel from "./Home/HomeCarousel";
import "./home.css";
import SectionTwo from "./Home/SectionTwo";
import SectionThree from "./Home/SectionThree";
import axios from "axios";
import { queryClient } from "..";

function Home() {
  const [ip, setIP] = useState("");
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

  const getData = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    console.log(res.data);
    setIP(res.data.IPv4);
  };
  useEffect(() => {
    getData();
  }, []);

  console.log(ip);

  return (
    <div className={theme}>
      <p>{ip}</p>
      <HomeCarousel />
      <SectionTwo />
      <SectionThree />
    </div>
  );
}

export default Home;
