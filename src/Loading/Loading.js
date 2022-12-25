import React from "react";
import { CartState } from "../Context/UseContext";
import Vin from "../Icons/Personal-Wine-Loading-Animation-For-Website.gif";
import './loading.css';

function Loading() {

  const {
    state: { theme },
  } = CartState();

  return (
    <div
    className={theme}
      style={{
        zIndex: "1000",
        width: "100%",
        height: '100vh',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img style={{ width: "10%", borderRadius:'10rem' }} src={Vin} alt="Loading..." />
      <h2 className="loading">
        Loading
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </h2>
    </div>
  );
}

export default Loading;
