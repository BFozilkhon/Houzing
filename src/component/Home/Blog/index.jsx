import React from "react";
import { CardBlog } from "./Card";
import { Container, Wrapper } from "./style";

export const Blog = () => {
  return (
    <Container>
      <Container.Header>From Our Blog</Container.Header>
      <Container.Title>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </Container.Title>
      <Wrapper>
        <CardBlog />
        <CardBlog />
        <CardBlog />
        <CardBlog />
      </Wrapper>
    </Container>
  );
};

export default Blog;
