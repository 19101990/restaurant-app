import React from "react";
import { Navigation } from "..";
import logo from "../../images/logo/logo.jpg";

import "./Header.css";

function Header() {
  return (
    <section className="header">
      <section className="header-top">
        <section className="header-top__logo">
          <a href="/">
            <img src={logo} width="140" height="80" />
          </a>
        </section>
        <section className="header-top__navbar">
          <section className="header-top__navigation">
            <Navigation />
          </section>
        </section>
      </section>
    </section>
  );
}

export default Header;
