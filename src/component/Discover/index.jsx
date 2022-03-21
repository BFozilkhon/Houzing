import React from "react";
import Card from "./Card";
import { Container, Wrapper } from "./style";
export const Discover = () => {
  return (
    <Container>
      <Container.Header>Discover Our Featured Listings</Container.Header>
      <Container.Title>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </Container.Title>
      <Wrapper>
        <Card />
        <Card />
        <Card />
        <Card />
      </Wrapper>
    </Container>
  );
};

export default Discover;
