import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import "../Georgie.css";
import { Fade } from "react-awesome-reveal";
import Raisin_De_Georgie from "../../../Icons/vin-georgie-raisin.webp";
import Raisin_De_Georgie2 from "../../../Icons/vin-georgie-raisin2.webp";
import { CartState } from "../../../Context/UseContext";
import { Divider, Typography } from "@mui/material";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { NavLink } from "react-router-dom";

function Histoire() {
  const [loading, setLoading] = useState(false);

  function handleClick(event) {
    event.preventDefault();
  }

  useEffect(() => {
    setLoading(true);
  }, []);

  const {
    state: { theme },
  } = CartState();

  return (
    <>
      {loading ? (
        <div style={{ backgroundColor: theme === "light" ? "#fff" : "#000" }}>
          <div className="Cropped_Vin_de_Georgie">
            <Container>
              <h1 style={{ color: theme === "light" ? "#fff" : "#980433" }}>
                Histoire du vin de Géorgie
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
                  HISTOIRE
                </Typography>
              </Breadcrumbs>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "100px",
              }}
              className="georgieDescriptionContainer"
            >
              <div>
                <Fade direction="left" triggerOnce="true">
                  <div
                    className="georgieDescriptionImg"
                    style={{
                      borderRadius: 400 / 2,
                      backgroundImage: `url(${Raisin_De_Georgie})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      height: "400px",
                      width: "400px",
                    }}
                  ></div>
                </Fade>
              </div>
              <div className="georgieDescription">
                <Fade direction="up" triggerOnce="true">
                  <h1 style={{ textAlign: "center" }}>
                    La Géorgie berceau du vin
                  </h1>
                  <br />
                  <p>
                    La Géorgie est considérée comme le berceau de la
                    viticulture.
                    <span style={{ fontWeight: "bold" }}>
                      {" "}
                      L’histoire du vin de Géorgie
                    </span>{" "}
                    remonte en effet à{" "}
                    <span style={{ fontWeight: "bold" }}>
                      plus de 8000 ans.
                    </span>
                  </p>
                  <br />
                  <p>
                    Des traces de viticulture et de vinification datant du VIe
                    siècle avant Jésus Christ ont été retrouvées dans plusieurs
                    régions du pays. De nombreuses découvertes archéologiques
                    tendent à prouver que la Géorgie est véritablement le plus
                    ancien pays viticole au monde.
                  </p>
                  <br />
                  <p>
                    Des amphores en argiles anciennes de plus de 8000 ans ont
                    été découvertes, et des analyses ont permis de démontrer
                    qu’elles contenaient du vin. Il a également été découvert
                    que certaines de ces amphores contenaient des pépins de
                    raisin Rkatsiteli, ce qui indique une viniculture déjà très
                    développée à cette époque. Bon nombre d’archéologues
                    confirment également que la Géorgie est le premier pays où
                    la vigne sauvage a été « domestiquée » pour être cultivée.
                  </p>
                  <br />
                  <p>
                    La linguistique vient elle aussi appuyer la thèse de
                    l’apparition du vin en Géorgie. En effet, de nombreuses
                    preuves démontrent que le mot « vin » s’est répandu dans le
                    monde à partir du mot géorgien « Gvino ».
                  </p>
                  <br />
                  <p>
                    L’origine et la signification sémantique du mot vin, ayant
                    la même racine dans presque toutes les langues, n’a pu être
                    démontrée qu’à partir du mot géorgien « Gvino », provenant
                    du mot « Gvivli », ce dernier définissant quelque chose qui
                    monte et fermente.
                  </p>
                  <br />
                  <p>
                    De nombreuses recherches historiques et archéologiques sont
                    encore en cours sur le sol géorgien, l’avenir nous en
                    apprendra donc sans doute encore davantage sur l’histoire du
                    vin de Géorgie.
                  </p>
                </Fade>
              </div>
            </div>
          </Container>
          <Divider />
          <Container style={{ marginTop: "100px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "100px",
              }}
              className="georgieDescriptionContainer"
            >
              <div>
                <Fade direction="left" triggerOnce="true">
                  <div
                    className="georgieDescriptionImg"
                    style={{
                      borderRadius: 400 / 2,
                      backgroundImage: `url(${Raisin_De_Georgie2})`,
                      backgroundPosition: "center",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      height: "400px",
                      width: "400px",
                    }}
                  ></div>
                </Fade>
              </div>
              <div className="georgieDescription">
                <Fade direction="up" triggerOnce="true">
                  <h1 style={{ textAlign: "center" }}>
                    Tradition viticole Géorgienne
                  </h1>
                  <br />
                  <p>
                    La tradition viticole géorgienne est liée à
                    <span style={{ fontWeight: "bold" }}>
                      {" "}
                      huit mille ans d’histoire ininterrompue.
                    </span>{" "}
                    La viticulture géorgienne a traversé des millénaires et a su
                    préserver une méthode de vinification ancestrale et unique
                    au monde.
                  </p>
                  <br />
                  <p>
                    La traditionnelle méthode de vinification géorgienne,
                    utilisant le fameux « Qvevri », est inscrite au patrimoine
                    culturel immatériel de l’humanité de l’UNESCO depuis 2013.
                  </p>
                  <br />
                  <p>
                    La connaissance et l’expérience de la fabrication et de la
                    vinification de Qvevri sont transmises aux nouvelles
                    générations par les familles, tout le monde participe aux
                    activités de récolte et de vinification. Les enfants
                    apprennent à entretenir les vignes, à presser les raisins, à
                    fermenter le vin, à récolter de l’argile et à fabriquer et
                    cuire des Qvevris en observant leurs aînés.
                  </p>
                  <br />
                  <p>
                    Le processus de vinification traditionnel consiste à presser
                    les raisins puis à verser le jus, les peaux de raisins, les
                    tiges et les pépins dans le Qvevri, qui est scellé et enfoui
                    dans le sol afin que le vin puisse fermenter pendant cinq à
                    six mois.
                  </p>
                  <br />
                  <p>
                    Le vin joue un rôle vital dans la vie quotidienne et dans la
                    célébration d’événements et de rituels profanes et
                    religieux. Les caves à vin sont toujours considérées comme
                    l’endroit le plus sacré de la maison familiale. La tradition
                    de la vinification en Qvevri définit le mode de vie des
                    communautés locales et fait partie intégrante de leur
                    identité culturelle et de leur héritage, l’histoire du vin
                    de Géorgie étant fréquemment évoquée dans les traditions et
                    les chansons géorgiennes.
                  </p>
                  <br />
                </Fade>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </>
  );
}

export default Histoire;
