import React, { Component } from "react";
import { faker } from "@faker-js/faker";
export const Servicios = ({ Icon, advice, description }) => {
  const LoremIpsumComponent = ({ length }) => {
    const text = faker.lorem.paragraph();
    return <p>{text.slice(0, length)}</p>;
  };
  return (
    <>
      <div className="each-service">
        <div className="each-serv-icon-label">
          <div className="icon-legal">
            <Icon size={24} />
          </div>
          <h3>{advice}</h3>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default Component;
