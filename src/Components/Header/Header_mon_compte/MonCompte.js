import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
export default function MonCompte() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const { loginWithRedirect, logout, isLoading, isAuthenticated } = useAuth0();

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ padding: "15px" }}
    >
      <List>
        <ListItemText>Mon Compte</ListItemText>
      </List>
      <Divider />
      <List
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {!isLoading && !isAuthenticated && (
          <ListItemButton
            style={{
              backgroundColor: "#183940",
              padding: "10px",
              color: "#fff",
              width: "100%",
              placeContent: "center",
            }}
            onClick={() => loginWithRedirect()}
          >
            Connexion
          </ListItemButton>
        )}
        {!isLoading && isAuthenticated && (
          <ListItemButton
            style={{
              backgroundColor: "#183940",
              padding: "10px",
              color: "#fff",
              width: "100%",
              placeContent: "center",
            }}
            onClick={() => logout()}
          >
            Deconnexion
          </ListItemButton>
        )}
      </List>
      <Divider />
      <List>
        <ListItemText>
          <NavLink to={"/Aperçu"}>Aperçu</NavLink>
        </ListItemText>
        <ListItemText>
          {isAuthenticated && (
            <NavLink to={"/Profil_Personnel"}>Profil personnel</NavLink>
          )}
          {!isAuthenticated && (
            <NavLink onClick={() => loginWithRedirect()}>
              Profil personnel
            </NavLink>
          )}
        </ListItemText>
        <ListItemText>
          <NavLink to={"/Adresses"}>Adresses</NavLink>
        </ListItemText>
        <ListItemText>
          <NavLink to={"/Moyens_de_paiement"}>Moyens de paiement</NavLink>
        </ListItemText>
        <ListItemText>
          <NavLink to={"/Commandes"}>Commandes</NavLink>
        </ListItemText>
      </List>
    </Box>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            style={{
              color: "#fff",
              fontSize: "12px",
              textTransform: "none",
              display: "flex",
              alignItems: "center",
            }}
            onClick={toggleDrawer(anchor, true)}
          >
            <PersonOutlineOutlinedIcon style={{ fontSize: "1.3rem" }} />
            <p>Mon Compte</p>
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
