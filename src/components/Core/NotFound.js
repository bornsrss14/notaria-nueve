import React from "react";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div className="container-404">
      <div className="container-text-404">
        <p className="p-404-p">404</p>
        <h2>Whoops!💢 Something's missing</h2>
        <p>
          "Oh no! Psyduck got lost... This page isn’t registered in the
          Pokédex."
        </p>
        <Link className="back-home-link" to="/">
          BACK TO HOME
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
