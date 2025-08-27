import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "../styles/components/navbar.css";

export default function NavBar() {
  const [link, setLink] = useState(true);

  const handleActive = (value) => {
    setLink(value);
    console.log(link);
  };

  return (
    <div className="navBar-container">
      <nav className="navBar-Nav">
        <h1>Title</h1>

        <div className="navBar-toggle">
          <Link
            onClick={() => handleActive(true)}
            className={link === true ? "navBar-Link_catalogo" : ""}
            to="/catalogo"
          >
            Catálogo
          </Link>
          <Link
            onClick={() => handleActive(false)}
            className={link === false ? "navBar-Link_kanban" : ""}
            to="/kanban"
          >
            Kaban
          </Link>
        </div>

        <div>
          <span>Claro</span>
        </div>

        <div>
          <span>Cart</span>
        </div>
      </nav>
    </div>
  );
}
