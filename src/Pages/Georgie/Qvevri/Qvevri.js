import { Divider, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { CartState } from "../../../Context/UseContext";
import Qvevri_free from "../../../Icons/Qvevri-free.jpg";
import "../Georgie.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { NavLink } from "react-router-dom";

function Qvevri() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
  }, []);
  const {
    state: { theme },
  } = CartState();

  function handleClick(event) {
    event.preventDefault();
  }
  return (
    <>
      {loading ? (
        <div style={{ backgroundColor: theme === "light" ? "#fff" : "#000" }}>
          <div className="Cropped_Vin_de_Georgie">
            <Container>
              <h1 style={{ color: theme === "light" ? "#fff" : "#980433" }}>
                Qvevri
              </h1>
            </Container>
          </div>
          <Container style={{ padding: "50px 0" }}>
            <div
              style={{ padding: "0 0 50px 0" }}
              role="presentation"
              onClick={handleClick}
            >
              <Breadcrumbs
                separator={
                  <ArrowForwardIosRoundedIcon
                    style={{
                      fontSize: "15px",
                      color: theme === "light" ? "#000" : "#fff",
                    }}
                  />
                }
                aria-label="breadcrumb"
              >
                <NavLink
                  style={{
                    color: theme === "light" ? "#000" : "#fff",
                    textDecoration: "underline",
                  }}
                  to="/GEORGIE"
                >
                  GEORGIE
                </NavLink>
                <Typography
                  color={theme === "light" ? "#000" : "#fff"}
                  aria-current="page"
                >
                  QVEVRI
                </Typography>
              </Breadcrumbs>
            </div>
            <div className="georgieDescription">
              <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
                Qvevri : l’amphore traditionnelle du vin de Géorgie
              </h1>
              <br />
              <p>
                Les Qvevri ou Kvevri (ქვევრი en géorgien) sont de grandes
                amphores ou jarres en argile à l’extrémité conique. Leur
                contenance varie de 1000 à 6000 litres. Elles sont utilisées
                pour la vinification et le stockage du vin de Géorgie, et sont
                la plus vieille méthode de vinification connue (des amphores
                anciennes de plus de 8000 ans ont été retrouvées sur différents
                sites archéologiques de Géorgie). Elles ont un impact très
                positif sur le vin et confèrent ses caractéristiques uniques au
                vin de Géorgie.
              </p>
              <br />
              <p>
                En 2013, l’UNESCO a inscrit la méthode viticole traditionnelle
                géorgienne en Qvevri au patrimoine culturel immatériel.
              </p>
              <br />
              <p>
                La composition des Qvevri permet de renforcer leurs parois mais
                joue également un rôle d’antiseptique naturel. Leur intérieur
                est tapissé d’une couche de cire d’abeille qui permet d’assurer
                l’étanchéité.
              </p>
            </div>
            <Container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "50px",
                maxWidth: "640px",
              }}
            >
              <img
                style={{ alignSelf: "center", width: "100%" }}
                alt="Qvevri_free"
                src={Qvevri_free}
              />
            </Container>
            <Divider
              style={{ margin: "100px 0", border: "1px solid rgb(51, 51, 51)" }}
            ></Divider>
          </Container>
          <Container style={{ padding: "0 0 50px 0" }}>
            <div className="georgieDescription">
              <h1 style={{ textAlign: "center", marginBottom: "40px" }}>
                La vinification en Qvevri
              </h1>
              <br />
              <p>
                La méthode de{" "}
                <span style={{ fontWeight: "bold" }}>
                  vinification en Qvevri
                </span>{" "}
                consiste à fouler les raisins dans un fouloir d’où le jus
                s’écoule directement dans la Qvevri. Les peaux et les grappes
                non écoulées sont récupérées et ajoutées dans l’amphore avec le
                jus. La fermentation alcoolique démarre spontanément et dure une
                quinzaine de jours. Les Qvevri sont ensuite fermées
                hermétiquement avec un couvercle en bois ou en pierre selon les
                régions (parfois aussi depuis peu en verre chez certains
                vignerons, car cela leur permet de surveiller la macération à
                travers le couvercle).
              </p>
              <br />
              <p>
                La fabrication des Qvevri prend deux à trois mois. Elles sont
                dans un premier temps façonnées et séchées avant d’être placées
                dans un four spécial où commence la cruciale étape de
                combustion.
              </p>
              <br />
              <p>
                Le fait d’enterrer les Qvevri permet au vin de toujours y garder
                une température constante d’environ 13 à 15 degrés, idéale pour
                la fermentation. Les processus chimiques de vinification s’y
                déroulent de manière lente et naturelle, et ne nécessitent aucun
                des équipements spéciaux ou des additifs utilisés lors de la
                production industrielle du vin.
              </p>
              <br />
              <p>
                À Kakheti, l’une des principales régions viticoles de Géorgie,
                les Qvevri sont enterrées dans des caves à vin appelées Marani.
                Certaines d’entre elles ont obtenu le statut de musée en raison
                de leur ancienneté et de leur caractère unique. Dans l’ouest de
                la Géorgie, elles sont enterrées à l’air libre. Les techniques
                de vinification diffèrent également selon les régions de
                Géorgie.
              </p>
              <br />
              <p>
                Presque tous les viticulteurs géorgiens produisent encore le vin
                en Qvevri. L’Agence nationale du vin du ministère de
                l’Agriculture de Géorgie les soutient et leur donne la
                possibilité de présenter leurs produits dans les expositions
                internationales de vins naturels, ce qui permet d’accroitre la
                notoriété du vin de Géorgie vinifié en Qvevri à travers le
                monde.
              </p>
            </div>
            <Container
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "50px",
              }}
            >
              <img
                style={{
                  alignSelf: "center",
                  width: "100%",
                }}
                alt="Qvevri_free"
                src="https://i0.wp.com/www.bonumvinum.eu/wp-content/uploads/image-3.png?w=870"
              />
            </Container>
          </Container>
        </div>
      ) : null}
    </>
  );
}

export default Qvevri;
