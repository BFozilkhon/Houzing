import React from "react";
import Card from "./Card";
import { Container, Wrapper } from "./style";

export const ChooseUs = () => {
  return (
    <Container>
      <Container.Header>Why Choose Us</Container.Header>
      <Container.Title>We provide full service at every step</Container.Title>
      <Wrapper>
        <Card />
        <Card />
        <Card />
        <Card />
      </Wrapper>
    </Container>
  );
};

export default ChooseUs;
