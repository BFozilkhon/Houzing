import React from "react";
import { Cards } from "./style";

export const Card = () => {
  return (
    <Cards>
      <Cards.Img>
        <Cards.Flexing btn>
          <Cards.Button>FEATURED</Cards.Button>
          <Cards.Button dark>FOR SALE</Cards.Button>
        </Cards.Flexing>
        <Cards.Wrap className="full">
          <Cards.Kamera />
          <Cards.HoverItem>22</Cards.HoverItem>
          <Cards.Play />
          <Cards.HoverItem>3</Cards.HoverItem>
        </Cards.Wrap>
      </Cards.Img>
      <Cards.Title>New Apartment Nice Wiew</Cards.Title>
      <Cards.Text>Quincy St, Brooklyn, NY, USA</Cards.Text>
      <Cards.Flexing>
        <Cards.Div>
          <Cards.Bed />
          <Cards.Item>4 Beds</Cards.Item>
        </Cards.Div>
        <Cards.Div>
          <Cards.Shower />
          <Cards.Item>5 Baths</Cards.Item>
        </Cards.Div>
        <Cards.Div>
          <Cards.Car />
          <Cards.Item>1 Garage</Cards.Item>
        </Cards.Div>
        <Cards.Div>
          <Cards.Triangle />
          <Cards.Item>1200 Sq Ft</Cards.Item>
        </Cards.Div>
      </Cards.Flexing>
      <Cards.HR />
      <Cards.Flexing>
        <div>
          <Cards.Cost>$2,800/mo</Cards.Cost>
          <Cards.CostTitle>$7,500/mo</Cards.CostTitle>
        </div>
        <Cards.IconWrap>
          <Cards.Circle>
            <Cards.Arrow />
          </Cards.Circle>
          <Cards.Circle>
            <Cards.Puls />
          </Cards.Circle>
          <Cards.Circle>
            <Cards.Heart />
          </Cards.Circle>
        </Cards.IconWrap>
      </Cards.Flexing>
    </Cards>
  );
};

export default Card;
