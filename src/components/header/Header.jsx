import logo from "../../images/logo/logo.jpg";
import { NavLink } from "react-router-dom";

import "./Header.scss";

function Header() {
  return (
    <header>
      <div className="header__logo">
        <a href="/">
          <img src={logo} width="140" height="80" alt="logo" />
        </a>
      </div>
      <section className="header__nav">
        <nav>
          <NavLink exact activeClassName="active" to="/">
            Home
            </NavLink>
          <NavLink activeClassName="active" to="/cart">
            Cart
            </NavLink>
        </nav>
      </section>
    </header>
  );
}

export default Header;
