import React from "react";
import { Cards } from "./style";
export const CardBlog = () => {
  return (
    <Cards>
      <Cards.Img>
        <Cards.Flexing btn>
          <Cards.Button>FAMILY HOUSE</Cards.Button>
        </Cards.Flexing>
      </Cards.Img>
      <Cards.Box>
        <Cards.Div>
          <Cards.Div>
            <Cards.User />
            <Cards.Text>Robert Fox</Cards.Text>
          </Cards.Div>
          <Cards.Div left>
            <Cards.Message />
            <Cards.Text>06 April, 2021</Cards.Text>
          </Cards.Div>
        </Cards.Div>
        <Cards.Title>
          Redfin Ranks the Most Competitive Neighborhoods of 2020
        </Cards.Title>
        <Cards.Item>
          Semper sagittis facilisi praesent elementum purus faucibus faucibus
          non tempus.{" "}
        </Cards.Item>
        <Cards.Href>Read More</Cards.Href>
      </Cards.Box>
    </Cards>
  );
};

export default CardBlog;
