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
                Qvevri : l???amphore traditionnelle du vin de G??orgie
              </h1>
              <br />
              <p>
                Les Qvevri ou Kvevri (?????????????????? en g??orgien) sont de grandes
                amphores ou jarres en argile ?? l???extr??mit?? conique. Leur
                contenance varie de 1000 ?? 6000 litres. Elles sont utilis??es
                pour la vinification et le stockage du vin de G??orgie, et sont
                la plus vieille m??thode de vinification connue (des amphores
                anciennes de plus de 8000 ans ont ??t?? retrouv??es sur diff??rents
                sites arch??ologiques de G??orgie). Elles ont un impact tr??s
                positif sur le vin et conf??rent ses caract??ristiques uniques au
                vin de G??orgie.
              </p>
              <br />
              <p>
                En 2013, l???UNESCO a inscrit la m??thode viticole traditionnelle
                g??orgienne en Qvevri au patrimoine culturel immat??riel.
              </p>
              <br />
              <p>
                La composition des Qvevri permet de renforcer leurs parois mais
                joue ??galement un r??le d???antiseptique naturel. Leur int??rieur
                est tapiss?? d???une couche de cire d???abeille qui permet d???assurer
                l?????tanch??it??.
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
                La m??thode de{" "}
                <span style={{ fontWeight: "bold" }}>
                  vinification en Qvevri
                </span>{" "}
                consiste ?? fouler les raisins dans un fouloir d???o?? le jus
                s?????coule directement dans la Qvevri. Les peaux et les grappes
                non ??coul??es sont r??cup??r??es et ajout??es dans l???amphore avec le
                jus. La fermentation alcoolique d??marre spontan??ment et dure une
                quinzaine de jours. Les Qvevri sont ensuite ferm??es
                herm??tiquement avec un couvercle en bois ou en pierre selon les
                r??gions (parfois aussi depuis peu en verre chez certains
                vignerons, car cela leur permet de surveiller la mac??ration ??
                travers le couvercle).
              </p>
              <br />
              <p>
                La fabrication des Qvevri prend deux ?? trois mois. Elles sont
                dans un premier temps fa??onn??es et s??ch??es avant d?????tre plac??es
                dans un four sp??cial o?? commence la cruciale ??tape de
                combustion.
              </p>
              <br />
              <p>
                Le fait d???enterrer les Qvevri permet au vin de toujours y garder
                une temp??rature constante d???environ 13 ?? 15 degr??s, id??ale pour
                la fermentation. Les processus chimiques de vinification s???y
                d??roulent de mani??re lente et naturelle, et ne n??cessitent aucun
                des ??quipements sp??ciaux ou des additifs utilis??s lors de la
                production industrielle du vin.
              </p>
              <br />
              <p>
                ?? Kakheti, l???une des principales r??gions viticoles de G??orgie,
                les Qvevri sont enterr??es dans des caves ?? vin appel??es Marani.
                Certaines d???entre elles ont obtenu le statut de mus??e en raison
                de leur anciennet?? et de leur caract??re unique. Dans l???ouest de
                la G??orgie, elles sont enterr??es ?? l???air libre. Les techniques
                de vinification diff??rent ??galement selon les r??gions de
                G??orgie.
              </p>
              <br />
              <p>
                Presque tous les viticulteurs g??orgiens produisent encore le vin
                en Qvevri. L???Agence nationale du vin du minist??re de
                l???Agriculture de G??orgie les soutient et leur donne la
                possibilit?? de pr??senter leurs produits dans les expositions
                internationales de vins naturels, ce qui permet d???accroitre la
                notori??t?? du vin de G??orgie vinifi?? en Qvevri ?? travers le
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
