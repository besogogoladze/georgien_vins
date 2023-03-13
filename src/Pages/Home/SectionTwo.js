import React from "react";
import { NavLink } from "react-router-dom";
import "./SectionTwo.css";
import vin2 from "../../Icons/pro-2.webp";
import vin3 from "../../Icons/pro-3.webp";
import vin4 from "../../Icons/pro-4.webp";
import vin5 from "../../Icons/pro-5.webp";
import vin6 from "../../Icons/pro-6.webp";
import promo1 from "../../Icons/promo-1.webp";
import promo2 from "../../Icons/promo-2.webp";
import promo3 from "../../Icons/promo-3.webp";
import { CartState } from "../../Context/UseContext";

const SectionTwo = () => {
  const {
    state: { theme },
    productFilterDispatch,
  } = CartState();

  return (
    <div className={theme}>
      <div
        id="soldPack"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div style={{ width: "33.3333333%", position: "relative" }}>
          <NavLink
            onClick={() =>
              productFilterDispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "Blanc",
              })
            }
            to="/VINS"
            className="SectionTwoA"
          >
            <img className="SectionTwoImg" src={promo1} alt="img" />
          </NavLink>
        </div>
        <div style={{ width: "33.3333333%", position: "relative" }}>
          <NavLink
            onClick={() =>
              productFilterDispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "Rouge",
              })
            }
            to="/VINS"
            className="SectionTwoA"
          >
            <img className="SectionTwoImg" src={promo2} alt="img" />
          </NavLink>
        </div>
        <div style={{ width: "33.3333333%", position: "relative" }}>
          <NavLink
            onClick={() =>
              productFilterDispatch({
                type: "FILTER_BY_CATEGORY",
                payload: "Rose",
              })
            }
            to="/VINS"
            className="SectionTwoA"
          >
            <img className="SectionTwoImg" src={promo3} alt="img" />
          </NavLink>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexFlow: "wrap",
          padding: "50px 0",
        }}
        className="SectionTwoVins"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavLink>
            <img src={vin2} alt="vinBlanche" />
          </NavLink>
          <h3>Vintage Wines</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavLink>
            <img src={vin3} alt="vinBlanche" />
          </NavLink>
          <h3>Imperial Wines</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavLink>
            <img src={vin2} alt="vinBlanche" />
          </NavLink>
          <h3>White Wines</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavLink>
            <img src={vin4} alt="vinBlanche" />
          </NavLink>
          <h3>Sparkling Wines</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavLink>
            <img src={vin5} alt="vinBlanche" />
          </NavLink>
          <h3>Rose Wines</h3>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <NavLink>
            <img src={vin6} alt="vinBlanche" />
          </NavLink>
          <h3>Red Wines</h3>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
