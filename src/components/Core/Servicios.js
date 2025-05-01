import React, { Component } from "react";
export const Servicios = ({ Icon, advice, description }) => {
  return (
    <>
      <div className="each-service">
        <div className="each-serv-icon-label">
          <div className="icon-legal">
            <Icon size={24} />
          </div>
          <h3>{advice}</h3>
        </div>
        <div className="truncate-multiline">
          <p>{description}</p>
          <div className="overlay">Conocer más...</div>
        </div>
      </div>
    </>
  );
};

export default Component;
