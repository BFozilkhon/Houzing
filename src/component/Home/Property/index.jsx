import React from "react";
import { property } from "../../../mock/property";
import CardProperty from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Wrap } from "./style";

export const Property = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Container>
      <Container.Header>Explore Our Properties</Container.Header>
      <Container.Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit donec
        sollicitudin
      </Container.Text>
      <Container.Wrap>
        <Carousel
          additionalTransfrom={0}
          autoPlay
          autoPlaySpeed={2000}
          centerMode={false}
          containerClass="container-with-dots"
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          customTransition="all 3s"
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
        >
          {property.map((value) => {
            return <CardProperty key={value.id} value={value} />;
          })}
        </Carousel>
      </Container.Wrap>
    </Container>
  );
};

export default Property;
