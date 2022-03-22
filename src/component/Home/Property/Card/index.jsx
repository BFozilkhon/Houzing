import React from "react";
import { Container, Icon, Img, Wrapper } from "./style";

export const CardProperty = ({ value }) => {
  return (
    <Container>
      <Img src={value?.img} alt="homes" />
      <Container.Title>{value?.title}</Container.Title>
      <Icon src={value?.icon} />
    </Container>
  );
};

export default CardProperty;
