import React, { Component } from "react";
import { Link } from "react-router-dom";
export const Servicios = ({ Icon, advice, description }) => {
  return (
    <>
      <div className="each-service">
        <Link to={"todos-servicios"}>
          <div className="each-serv-icon-label">
            <div className="icon-legal">
              <Icon size={26} stroke={1} color="#1100a5" />
            </div>
            <h3>{advice}</h3>
          </div>
          <div className="truncate-multiline">
            <p>{description}</p>
            <div className="overlay">Conocer más...</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Component;
