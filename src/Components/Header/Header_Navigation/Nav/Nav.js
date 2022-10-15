import React from 'react';
import { NavLink } from "react-router-dom";
import ".././HeaderNav.css";
import "../../../../index.css";
import { CartState } from '../../../../Context/UseContext';

const Nav = () => {
     const {
    state: { theme },
  } = CartState();
  return (
    <ul
        id="Navigation"
        style={{
          boxShadow: theme === "light" ? "0 0 1px #090d2a" : "0 0 15px #fff",
          borderTop: "1px #fff solid",
          borderBottom: "1px #fff solid",
          position: "relative",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%",
          padding: "10px 0",
        }}
      >
        <li>
          <NavLink className="nav_a" exact="true" to="/">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_a" to="/VINS">
            VINS
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_a" to="/SPIRITUEUX">
            SPIRITUEUX
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_a" to="/DELICATESSEN">
            DELICATESSEN
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_a" to="/VIGNERON">
            VIGNERON
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_a" to="/BESTSELLERS">
            BESTSELLERS
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_a" to="/PAQUETS_DE_DEGUSTATION">
            PAQUETS DE DEGUSTATION
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_a" to="/GEORGIE">
            GEORGIE
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_a" to="/OFFRES">
            OFFRES
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_a" to="/B2B_&_IMPORT">
            B2B & IMPORT
          </NavLink>
        </li>
        <li>
          <NavLink className="nav_a" to="/VIN_PRIME">
            VIN PRIME
          </NavLink>
        </li>
      </ul>
  )
}

export default Nav
