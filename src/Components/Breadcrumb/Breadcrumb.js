import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import GrainIcon from "@mui/icons-material/Grain";
import { NavLink } from "react-router-dom";
import { CartState } from "../../Context/UseContext";

import { withRouter, Link } from "react-router-dom";

const Breadcrumb = ({ props }) => {
  const {
    state: { theme },
  } = CartState();
  const {
    history,
    location: { pathname },
  } = props;

  const pathnames = pathname.split("/").filter((x) => x);

  return (
    // <div
    //   role="presentation"
    //   style={{ backgroundColor: theme === "light" ? "#fff" : "#000" }}
    // >
    //   <Breadcrumbs
    //     aria-label="breadcrumb"
    //     separator=">"
    //     style={{ color: theme === "light" ? "#000" : "#980433" }}
    //   >
    //     <NavLink
    //       underline="hover"
    //       style={{
    //         display: "flex",
    //         alignItems: "center",
    //         color: theme === "light" ? "#000" : "#980433",
    //       }}
    //       to="/georgien_vins"
    //     >
    //       <HomeIcon sx={{ mr: 0.5 }} fontSize="medium" />
    //       Home
    //     </NavLink>
    //     <Typography
    //       style={{
    //         display: "flex",
    //         alignItems: "center",
    //         color: theme === "light" ? "#000" : "#980433",
    //       }}
    //     >
    //       <GrainIcon sx={{ mr: 0.5 }} fontSize="medium" />
    //       Spiritueux
    //     </Typography>
    //   </Breadcrumbs>
    // </div>
    <div aria-label="breadcrumb">
      {/* {pathnames.length > 0 ? <Typography /> : <Link /> } the same as next example */}
      <Link to="#" onClick={() => history.push("/")}>
        Home
      </Link>
      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
        const isLastLink = index === pathnames.length - 1;
        return isLastLink ? (
          <Typography>{name}</Typography>
        ) : (
          <Link to="#" key={name} onClick={() => history.push(`/${name}`)}>
            {name}
          </Link>
        );
      })}
    </div>
  );
};

export default Breadcrumb;
