import React from "react";
import { Link } from "react-router-dom";
export default function NotFount() {
  return (
    <div>
      <h1>404</h1>
      <p>Página não encontrada</p>
      <Link to="/">Voltar</Link>
      {/* Não sabe se esta ativo, NavLink destaca/sabe onde vai */}
    </div>
  );
}
