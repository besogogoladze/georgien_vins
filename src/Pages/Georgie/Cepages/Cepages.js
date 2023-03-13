import { Divider, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartState } from "../../../Context/UseContext";
import "../Georgie.css";
import Cépage_Rouge from "../../../Icons/cépage-rouge.webp";
import Cépage_Blanc from "../../../Icons/cépage-blanc.webp";
import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import map_de_georgie from "../../../Icons/map_de_georgie.webp";
import { Slide } from "react-awesome-reveal";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
function Cepages() {
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
                Cépages de Géorgie
              </h1>
            </Container>
          </div>
          <Slide>
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
                    CEPAGES
                  </Typography>
                </Breadcrumbs>
              </div>
              <div className="georgieDescription">
                <p>
                  Le caractère unique du vin de Géorgie est conditionné, outre
                  son{" "}
                  <NavLink
                    style={{ color: theme === "light" ? "#980433" : "#fff" }}
                    to={"/GEORGIE/Histoire"}
                  >
                    {" "}
                    histoire,
                  </NavLink>{" "}
                  le micro-climat du pays, ses terres et ses techniques
                  viticoles, par les variétés endémiques des{" "}
                  <span style={{ fontWeight: "bold" }}>
                    {" "}
                    cépages de Géorgie.
                  </span>{" "}
                  Il existe plus de 500 cépages indigènes en Géorgie. Une
                  trentaine d’entre eux sont toujours utilisés pour la
                  vinification commerciale.
                </p>
                <br />
                <p>
                  La Géorgie dispose d’un climat idéal pour la production de
                  vin. Les étés sont ensoleillés tandis que les hivers sont doux
                  et sans gel. Le pays compte également sur de nombreuses
                  sources d’eau naturelles qui viennent des montagnes du Caucase
                  et se jettent dans les vallées. L’air humide du pays, affecté
                  par la mer Noire, aide également les vignes à se développer de
                  manière optimale.
                </p>
                <br />
                <p>
                  Tout comme les vins français, les vins géorgiens sont souvent
                  composés d’un mélange de deux ou plusieurs cépages. Les vins
                  tirent également leurs noms des régions ou des villages dans
                  lesquelles ils sont produits.
                </p>
              </div>
              <Divider
                style={{
                  margin: "100px 0",
                  border: "1px solid rgb(51, 51, 51)",
                }}
              ></Divider>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "150px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "start",
                    gap: "50px",
                  }}
                  className="CepageTitle"
                >
                  <img alt="CepagesImg" src={Cépage_Rouge} />
                  <h1
                    style={{
                      fontFamily: "Alex Brush",
                      fontWeight: "600",
                      fontSize: "2.625em",
                      lineHeight: "1.143",
                    }}
                  >
                    Cépages de Géorgie : les rouges
                  </h1>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "50px",
                  }}
                  className="CepagePharagraph"
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "40px",
                    }}
                  >
                    <h1>
                      <FiberManualRecordRoundedIcon
                        style={{ marginRight: "10px", fontSize: ".7rem" }}
                      />
                      Saperavi
                    </h1>
                    <p>
                      Le cépage Saperavi produit de riches vins rouges adaptés à
                      vieillissement long. Il permet d’obtenir des niveaux
                      d’alcool élevés et est souvent mélangé avec d’autres
                      cépages plus doux. Le Saperavi est l’un des principaux
                      cépages utilisés pour la production des vins rouges
                      géorgiens.
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "40px",
                    }}
                  >
                    <h1>
                      <FiberManualRecordRoundedIcon
                        style={{ marginRight: "10px", fontSize: ".7rem" }}
                      />
                      Ojaleshi
                    </h1>
                    <p>
                      L’Ojaleshi est un autre cépage rouge assez répandu et
                      cultivé sur les versants montagneux dominant les rives de
                      la rivière Tskhenistskali, dans la région de Samegrelo en
                      Géorgie occidentale.
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "40px",
                    }}
                  >
                    <h1>
                      <FiberManualRecordRoundedIcon
                        style={{ marginRight: "10px", fontSize: ".7rem" }}
                      />
                      Usakhelauri
                    </h1>
                    <p>
                      L’Usakhelauri est un cépage rouge indigène. C’est un
                      raisin d’une qualité exceptionnelle. Cultivé sur les
                      pentes montagneuses de Lechkhumi, le processus de culture
                      est assez complexe et se caractérise par un faible volume
                      de récolte. Seulement trois tonnes de raisins peuvent être
                      récoltés chaque année, les vins d’Usakhelauri sont donc
                      très chers.
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "40px",
                    }}
                  >
                    <h1>
                      <FiberManualRecordRoundedIcon
                        style={{ marginRight: "10px", fontSize: ".7rem" }}
                      />
                      Alexandreuli
                    </h1>
                    <p>
                      Le cépage rouge Alexandreuli est l’une des plus anciennes
                      variétés de raisin de Géorgie.
                    </p>
                  </div>
                </div>
              </div>
              <Divider
                style={{
                  margin: "100px 0",
                  border: "1px solid rgb(51, 51, 51)",
                }}
              ></Divider>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "150px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "start",
                    gap: "50px",
                  }}
                  className="CepageTitle"
                >
                  <img alt="CepagesImg" src={Cépage_Blanc} />
                  <h1
                    style={{
                      fontFamily: "Alex Brush",
                      fontWeight: "600",
                      fontSize: "2.625em",
                      lineHeight: "1.143",
                    }}
                  >
                    Cépages de Géorgie : les blancs
                  </h1>
                </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "50px",
                  }}
                  className="CepagePharagraph"
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "40px",
                    }}
                  >
                    <h1>
                      <FiberManualRecordRoundedIcon
                        style={{ marginRight: "10px", fontSize: ".7rem" }}
                      />
                      Mtsvane
                    </h1>
                    <p>
                      Le Mtsvane est un cépage blanc qui occupe une place très
                      importante dans la vinification géorgienne. Il est souvent
                      mélangé avec du Rkatsiteli pour accorder un équilibre
                      aromatique et fruité au vin.
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "40px",
                    }}
                  >
                    <h1>
                      <FiberManualRecordRoundedIcon
                        style={{ marginRight: "10px", fontSize: ".7rem" }}
                      />
                      Rkatsiteli
                    </h1>
                    <p>
                      Il s’agit du cépage blanc le plus utilisé dans la
                      vinification géorgienne. Le Rkatsiteli se développe
                      également en dehors de la Géorgie, en particulier dans les
                      anciens pays soviétiques.
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "40px",
                    }}
                  >
                    <h1>
                      <FiberManualRecordRoundedIcon
                        style={{ marginRight: "10px", fontSize: ".7rem" }}
                      />
                      Chinuri
                    </h1>
                    <p>
                      Le Chinuri est cultivé dans la région de Kartli. Il
                      atteint sa pleine maturité fin octobre et est généralement
                      utilisé dans les vins mousseux. Il est souvent mélangé
                      avec du Goruli Mtsvane et de l’Aligoté.
                    </p>
                  </div>
                </div>
              </div>
              <Divider
                style={{
                  margin: "100px 0",
                  border: "1px solid rgb(51, 51, 51)",
                }}
              ></Divider>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                }}
                className="CepageTitle CepagePharagraph"
              >
                <h1>Les cépages de Géorgie par régions</h1>
                <p>
                  La Géorgie compte 8 régions viticoles, la principale étant
                  Kakheti, qui produit soixante-dix pour cent des raisins du
                  Pays.
                </p>
                <p>
                  Chaque région produit sont vin à partir de cépages différents
                  :
                </p>
                <Container
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    style={{
                      textAlign: "center",
                      width: "100%",
                      border: "1px #000 solid",
                    }}
                    alt="map_de_georgie"
                    src={map_de_georgie}
                  />
                </Container>
              </div>
            </Container>
          </Slide>
        </div>
      ) : null}
    </>
  );
}

export default Cepages;
