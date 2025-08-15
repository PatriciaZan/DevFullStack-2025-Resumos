import React from "react";
import { useParams, Link } from "react-router-dom";
export default function Post() {
  const { id } = useParams();
  return (
    <section>
      <h1>Post #{id}</h1>
      <p>Aqui vc está no Post de ID</p>

      <p>
        <Link to="posts/100">/posts/100</Link>
      </p>
    </section>
  );
}
