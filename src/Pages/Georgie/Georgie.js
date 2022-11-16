import React from "react";
import { NavLink } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActions, Container, Divider } from "@mui/material";
import Raisin_De_Georgie2 from "../../Icons/vin-georgie-raisin2.jpg";
import KeyboardDoubleArrowRightRoundedIcon from "@mui/icons-material/KeyboardDoubleArrowRightRounded";
import { CartState } from "../../Context/UseContext";
import Cropped_Cepage from "../../Icons/cropped-cépage.jpg";
import Cropped_Qvevri from "../../Icons/cropped-qvevri.jpg";
import "./Georgie.css";
import { Zoom } from "react-awesome-reveal";

function Georgie() {
  const {
    state: { theme },
  } = CartState();

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#000",
      }}
    >
      <Zoom triggerOnce={true}>
        <Container
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "10px",
            padding: "100px 0",
          }}
          id="GeorgieContainer"
        >
          <Card className="GeorgieCard" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image={Raisin_De_Georgie2}
              alt="Raisin_De_Georgie2"
            />
            <CardContent
              style={{ backgroundColor: theme === "light" ? "#fff" : "#000" }}
            >
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                style={{ color: theme === "light" ? "#000" : "#980433" }}
              >
                Histoire
              </Typography>
              <Typography
                variant="p"
                style={{ color: theme === "light" ? "#000" : "#980433" }}
              >
                La Géorgie est considérée comme le berceau du vin. L’histoire du
                vin de Géorgie remonte en effet à plus de 8000 ans.
              </Typography>
            </CardContent>
            <Divider
              style={{
                backgroundColor: theme === "light" ? "#000" : "#980433",
              }}
            />
            <CardActions
              style={{ backgroundColor: theme === "light" ? "#fff" : "#000" }}
            >
              <Button size="small" color="primary">
                <NavLink
                  to={"/GEORGIE/Histoire"}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    color: theme === "light" ? "#000" : "#980433",
                  }}
                >
                  En savoir plus{" "}
                  <KeyboardDoubleArrowRightRoundedIcon
                    style={{ color: theme === "light" ? "#000" : "#980433" }}
                  />
                </NavLink>
              </Button>
            </CardActions>
          </Card>
          <Card className="GeorgieCard" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image={Cropped_Cepage}
              alt="Cropped_Cepage"
            />
            <CardContent
              style={{ backgroundColor: theme === "light" ? "#fff" : "#000" }}
            >
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                style={{ color: theme === "light" ? "#000" : "#980433" }}
              >
                Cépages
              </Typography>
              <Typography
                variant="p"
                style={{ color: theme === "light" ? "#000" : "#980433" }}
              >
                Il existe plus de 500 cépages indigènes en Géorgie. Une
                trentaine d’entre eux sont majoritairement utilisés.
              </Typography>
            </CardContent>
            <Divider
              style={{
                backgroundColor: theme === "light" ? "#000" : "#980433",
              }}
            />
            <CardActions
              style={{ backgroundColor: theme === "light" ? "#fff" : "#000" }}
            >
              <Button size="small" color="primary">
                <NavLink
                  to={"/GEORGIE/Cepages"}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    color: theme === "light" ? "#000" : "#980433",
                  }}
                >
                  En savoir plus{" "}
                  <KeyboardDoubleArrowRightRoundedIcon
                    style={{ color: theme === "light" ? "#000" : "#980433" }}
                  />
                </NavLink>
              </Button>
            </CardActions>
          </Card>
          <Card className="GeorgieCard" sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="200"
              image={Cropped_Qvevri}
              alt="Cropped_Qvevri"
            />
            <CardContent
              style={{ backgroundColor: theme === "light" ? "#fff" : "#000" }}
            >
              <Typography
                gutterBottom
                variant="h4"
                component="div"
                style={{ color: theme === "light" ? "#000" : "#980433" }}
              >
                Qvevri
              </Typography>
              <Typography
                variant="p"
                style={{ color: theme === "light" ? "#000" : "#980433" }}
              >
                Les qvevri sont de grandes amphores en argile utilisée pour la
                vinification et le stockage du vin en Géorgie.
              </Typography>
            </CardContent>
            <Divider
              style={{
                backgroundColor: theme === "light" ? "#000" : "#980433",
              }}
            />
            <CardActions
              style={{ backgroundColor: theme === "light" ? "#fff" : "#000" }}
            >
              <Button size="small" color="primary">
                <NavLink
                  to={"/GEORGIE/Qvevri"}
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    color: theme === "light" ? "#000" : "#980433",
                  }}
                >
                  En savoir plus{" "}
                  <KeyboardDoubleArrowRightRoundedIcon
                    style={{ color: theme === "light" ? "#000" : "#980433" }}
                  />
                </NavLink>
              </Button>
            </CardActions>
          </Card>
        </Container>
      </Zoom>
    </div>
  );
}

export default Georgie;
