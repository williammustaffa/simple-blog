import React from "react";
import { Image } from "semantic-ui-react";
import Navigation from "components/Navigation";
import logo from "assets/images/logo.svg";

import "./style.scss";

function Header() {
  return (
    <div className="custom-header">
      <Image src={logo} className="header-logo" />
      <Navigation />
    </div>
  );
}

export default Header;