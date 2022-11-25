import React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import MenuIcon from "@mui/icons-material/Menu";
import { CartState } from "../../../../Context/UseContext";
import { NavLink } from "react-router-dom";
import "../HeaderNav.css";
import { Divider } from "@mui/material";

const BurgerMenu = () => {
  const [state, setState] = React.useState({
    right: false,
  });
  const {
    state: { theme },
  } = CartState();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        height: "100%",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{
        backgroundColor: theme === "light" ? "#fff" : "rgb(10, 12, 11)",
      }}
    >
      <List
        id="BurgerNavigation"
        style={{
          position: "relative",
          display: "flex",
          gap: "10px",
          padding: "10px 10px",
          flexDirection: "column",
        }}
      >
        <Divider
          style={{
            borderColor: theme === "light" ? "rgba(0, 0, 0, 0.12)" : "#333",
          }}
        />
        <li>
          <NavLink
            style={{ color: theme === "light" ? "#333" : "#980433" }}
            className="nav_a"
            exact="true"
            to="/georgien_vins"
          >
            HOME
          </NavLink>
        </li>
        <Divider
          style={{
            borderColor: theme === "light" ? "rgba(0, 0, 0, 0.12)" : "#333",
          }}
        />
        <li style={{ width: "100%" }}>
          <NavLink
            style={{
              color: theme === "light" ? "#333" : "#980433",
            }}
            className="nav_a"
            to="/VINS"
            onClick={() => state[false]}
          >
            VINS
          </NavLink>
        </li>
        <Divider
          style={{
            borderColor: theme === "light" ? "rgba(0, 0, 0, 0.12)" : "#333",
          }}
        />
        <li>
          <NavLink
            style={{ color: theme === "light" ? "#333" : "#980433" }}
            className="nav_a"
            to="/SPIRITUEUX"
          >
            SPIRITUEUX
          </NavLink>
        </li>
        <Divider
          style={{
            borderColor: theme === "light" ? "rgba(0, 0, 0, 0.12)" : "#333",
          }}
        />
        <li>
          <NavLink
            style={{ color: theme === "light" ? "#333" : "#980433" }}
            className="nav_a"
            to="/DELICATESSEN"
          >
            DELICATESSEN
          </NavLink>
        </li>
        <Divider
          style={{
            borderColor: theme === "light" ? "rgba(0, 0, 0, 0.12)" : "#333",
          }}
        />
        <li>
          <NavLink
            style={{ color: theme === "light" ? "#333" : "#980433" }}
            className="nav_a"
            to="/VIGNERON"
          >
            VIGNERON
          </NavLink>
        </li>
        <Divider
          style={{
            borderColor: theme === "light" ? "rgba(0, 0, 0, 0.12)" : "#333",
          }}
        />
        <li>
          <NavLink
            style={{ color: theme === "light" ? "#333" : "#980433" }}
            className="nav_a"
            to="/BESTSELLERS"
          >
            BESTSELLERS
          </NavLink>
        </li>
        <Divider
          style={{
            borderColor: theme === "light" ? "rgba(0, 0, 0, 0.12)" : "#333",
          }}
        />
        <li>
          <NavLink
            style={{ color: theme === "light" ? "#333" : "#980433" }}
            className="nav_a"
            to="/PAQUETS_DE_DEGUSTATION"
          >
            PAQUETS DE DEGUSTATION
          </NavLink>
        </li>
        <Divider
          style={{
            borderColor: theme === "light" ? "rgba(0, 0, 0, 0.12)" : "#333",
          }}
        />
        <li>
          <NavLink
            style={{ color: theme === "light" ? "#333" : "#980433" }}
            className="nav_a"
            to="/GEORGIE"
          >
            GEORGIE
          </NavLink>
        </li>
        <Divider
          style={{
            borderColor: theme === "light" ? "rgba(0, 0, 0, 0.12)" : "#333",
          }}
        />
        <li>
          <NavLink
            style={{ color: theme === "light" ? "#333" : "#980433" }}
            className="nav_a"
            to="/OFFRES"
          >
            OFFRES
          </NavLink>
        </li>
        <Divider
          style={{
            borderColor: theme === "light" ? "rgba(0, 0, 0, 0.12)" : "#333",
          }}
        />
        <li>
          <NavLink
            style={{ color: theme === "light" ? "#333" : "#980433" }}
            className="nav_a"
            to="/B2B_&_IMPORT"
          >
            B2B & IMPORT
          </NavLink>
        </li>
        <Divider
          style={{
            borderColor: theme === "light" ? "rgba(0, 0, 0, 0.12)" : "#333",
          }}
        />
        <li>
          <NavLink
            style={{ color: theme === "light" ? "#333" : "#980433" }}
            className="nav_a"
            to="/VIN_PRIME"
          >
            VIN PRIME
          </NavLink>
        </li>
        <Divider
          style={{
            borderColor: theme === "light" ? "rgba(0, 0, 0, 0.12)" : "#333",
          }}
        />
      </List>
    </Box>
  );
  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            id="BurgerMenu"
            style={{ color: theme === "light" ? "#fff" : "#980433" }}
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon style={{ fontSize: "30px" }} />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default BurgerMenu;
