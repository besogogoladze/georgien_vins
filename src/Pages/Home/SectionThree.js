import { Container } from "@mui/system";
import React from "react";
import bgImg from "../../Icons/bg-1.webp";
import "./SectionThree.css";
import georgian_sun from "../../Icons/georgian_sun.webp";
import giuaani_logo from "../../Icons/giuaani_logo.webp";
import kankatela from "../../Icons/kankatela.webp";
import mukuzani from "../../Icons/mukuzani.webp";
import royal_khvanchkara from "../../Icons/royal-khvanchkara-logo.webp";
import vazisubani_logo from "../../Icons/vazisubani-logo.webp";
import { CartState } from "../../Context/UseContext";

const SectionThree = () => {
  const {
    state: { theme },
  } = CartState();

  return (
    <div style={{ width: "100%" }}>
      <img style={{ width: "100%" }} src={bgImg} alt="bgImgError" />
      <Container
        style={{
          maxWidth: "56rem",
          display: "flex",
          justifyContent: "center",
          padding: "20px 0",
        }}
      >
        <div className="logos-ticker">
          <div
            className="logos-ticker-fade"
            style={{
              borderRadius: '2rem',
              background:
                theme === "light"
                  ? "linear-gradient(to right, rgba(22, 26, 43, 1) -15%, rgba(22, 26, 43, .01) 5%, rgba(22, 26, 43, .01) 95%, rgba(22, 26, 43, 1) 130%)"
                  : "linear-gradient(to right, rgba(22, 26, 43, 1) 0%, rgba(22, 26, 43, .01) 5%, rgba(22, 26, 43, .01) 95%, rgba(22, 26, 43, 1) 100%)",
            }}
            aria-hidden="true"
          ></div>
          <div className="logos-ticker-container">
            <img src={georgian_sun} alt="asdasf" />
            <img src={giuaani_logo} alt="asdasf" />
            <img src={kankatela} alt="asdasf" />
            <img src={mukuzani} alt="asdasf" />
            <img src={royal_khvanchkara} alt="asdasf" />
            <img src={vazisubani_logo} alt="asdasf" />
          </div>
          <div className="logos-ticker-container">
            <img src={georgian_sun} alt="asdasf" />
            <img src={giuaani_logo} alt="asdasf" />
            <img src={kankatela} alt="asdasf" />
            <img src={mukuzani} alt="asdasf" />
            <img src={royal_khvanchkara} alt="asdasf" />
            <img src={vazisubani_logo} alt="asdasf" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SectionThree;
