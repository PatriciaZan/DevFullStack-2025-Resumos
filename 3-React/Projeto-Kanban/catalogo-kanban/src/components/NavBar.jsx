import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <nav>
        <h1>Title</h1>
        <div>
          <Link to="/catalogo">Catálogo</Link>
          <Link to="/kanban">Kaban</Link>
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
