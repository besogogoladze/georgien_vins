import { Container } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import { CartState } from "../../Context/UseContext";
import DHL from "../../Icons/dhl.png";
import DPD from "../../Icons/dpd.png";
import UPS from "../../Icons/ups-old.png";

const Footer = () => {
  const {
    state: { theme },
  } = CartState();

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "rgb(10, 12, 11)",
        borderTop: "1px #333 solid",
      }}
    >
      <Container
        style={{
          padding: "100px 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "baseline",
          flexFlow: "wrap",
          gap: 25,
        }}
      >
        <div style={{ width: "280px" }}>
          <h2 style={{ marginBottom: "15px", borderBottom: "2px #333 solid" }}>
            A propos de nous
          </h2>
          <p>
            Vins Geist est une boutique en ligne qui propose plus de 150 types
            de vins importés directement de Géorgie. Les partenaires de la
            Georgian Wine House sont des vignerons géorgiens renommés. La
            majorité des variétés de vin ont remporté des prix internationaux
            dans le monde entier.
          </p>
        </div>
        <div style={{ width: "280px" }}>
          <h2 style={{ marginBottom: "15px", borderBottom: "2px #333 solid" }}>
            Information
          </h2>
          <h4 style={{ display: "flex", flexDirection: "column" }}>
            <NavLink
              style={{
                margin: "2.5px 0",
                color: theme === "light" ? "#333" : "#980433",
                textDecoration: "underline",
              }}
            >
              Impression
            </NavLink>
            <NavLink
              style={{
                margin: "2.5px 0",
                color: theme === "light" ? "#333" : "#980433",
                textDecoration: "underline",
              }}
            >
              Protection des données
            </NavLink>
            <NavLink
              style={{
                margin: "2.5px 0",
                color: theme === "light" ? "#333" : "#980433",
                textDecoration: "underline",
              }}
            >
              Conditions générales
            </NavLink>
            <NavLink
              style={{
                margin: "2.5px 0",
                color: theme === "light" ? "#333" : "#980433",
                textDecoration: "underline",
              }}
            >
              Paiement et expédition
            </NavLink>
            <NavLink
              style={{
                margin: "2.5px 0",
                color: theme === "light" ? "#333" : "#980433",
                textDecoration: "underline",
              }}
            >
              Politique d'annulation
            </NavLink>
            <NavLink
              style={{
                margin: "2.5px 0",
                color: theme === "light" ? "#333" : "#980433",
                textDecoration: "underline",
              }}
            >
              A propos de nous
            </NavLink>
          </h4>
        </div>
        <div style={{ width: "280px" }}>
          <h2 style={{ marginBottom: "15px", borderBottom: "2px #333 solid" }}>
            Assistance téléphonique
          </h2>
          <p>
            Assistance et conseil au :
            <a
              style={{
                fontSize: "20px",
                color: theme === "light" ? "#980433" : "#fff",
                display: "block",
              }}
              href="tel:+33 7 67 11 85 35"
            >
              +33 7 67 11 85 35
            </a>
            du lundi au vendredi de 9h à 19h.
          </p>
        </div>
        <div style={{ width: "280px" }}>
          <h2 style={{ marginBottom: "15px", borderBottom: "2px #333 solid" }}>
            Méthodes d'expédition
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <img style={{ width: "100px" }} src={DHL} alt="DHL" />
            <img style={{ width: "80px" }} src={DPD} alt="DPD" />
            <img style={{ width: "60px" }} src={UPS} alt="UPS" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;