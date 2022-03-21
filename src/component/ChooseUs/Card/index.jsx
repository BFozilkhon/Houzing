import React from "react";
import { Cards } from "./style";

export const Card = () => {
  return (
    <Cards>
      <Cards.Circle className="circle">
        <Cards.Maps className="icons" />
      </Cards.Circle>
      <Cards.Title>Trusted By Thousands</Cards.Title>
      <Cards.Item>
        With over 1 million+ homes for sale available on the website, Trulia can
        match you with a house you will want to call home.
      </Cards.Item>
    </Cards>
  );
};

export default Card;
