import React from "react";
import UpHeader from "./UpHeader";
import "./Header.css";
import HeaderNav from "./Header_Navigation/HeaderNav";

function Header() {
  return (
    <div style={{ backgroundColor: "#0a0c0b", borderBottom: "1px #333 solid" }}>
      <UpHeader />
      <HeaderNav />
    </div>
  );
}

export default Header;
