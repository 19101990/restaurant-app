import React from "react";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <a href="/dish" className="navigation-item">
        {" Dish "}
      </a>
      <a href="/price" className="navigation-item">
        {" price "}
      </a>
      <a href="/donate" className="navigation-item">
        {" donate "}
      </a>
      <a href="/order-now" className="navigation-item">
        {" order now"}
      </a>
      <a href="/contact-us" className="navigation-item">
        {" contact us "}
      </a>
    </div>
  );
}

export default Navigation;
