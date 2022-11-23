import { Button, Container } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import { CartState } from "../../Context/UseContext";
import "../../Media.css";

const Error = () => {
  const {
    state: { theme },
  } = CartState();
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#000",
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "50px 0",
            flexDirection: "column",
            gap: "50px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "50px",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h1 style={{ fontFamily: "open sans" }}>
                OOPS... PAGE IS NOT FOUND!
              </h1>
              <h3 style={{ fontFamily: "open sans" }}>
                D'ont worry! just follow the link below to back home page
              </h3>
            </div>
            <h1 className="error_404" style={{ fontSize: "20rem" }}>
              404
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button
              style={{
                textTransform: "unset",
                padding: "5px 40px",
                borderRadius: "2rem",
                backgroundColor: theme === "light" ? "#980433" : "#333",
              }}
            >
              <NavLink
                style={{ color: theme === "light" ? "#fff" : "#980433" }}
                to="/georgien_vins"
              >
                Main Page
              </NavLink>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Error;
