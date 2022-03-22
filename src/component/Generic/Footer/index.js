import React from 'react';
import {
  Container,
  Location,
  Phone,
  Email,
  Telegram,
  Wrapper,
  BottomSide,
  Logo,
} from './style';

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Container.First>
          <Container.Title>Contact Us</Container.Title>
          <Container.First.Wrapper>
            <Location />
            <Container.Paragraph>
              329 Queensberry Street, North Melbourne VIC 3051, Australia.
            </Container.Paragraph>
          </Container.First.Wrapper>
          <Container.First.Wrapper>
            <Phone />
            <Container.Paragraph>123 456 789</Container.Paragraph>
          </Container.First.Wrapper>
          <Container.First.Wrapper>
            <Email />
            <Container.Paragraph>support@houzing.com</Container.Paragraph>
          </Container.First.Wrapper>
        </Container.First>
        <Container.Second>
          <Container.Title>Discover</Container.Title>
          <Container.Paragraph>Chicago</Container.Paragraph>
          <Container.Paragraph>Los Angels</Container.Paragraph>
          <Container.Paragraph>Miami</Container.Paragraph>
          <Container.Paragraph>New York</Container.Paragraph>
        </Container.Second>
        <Container.Third>
          <Container.Title>Lists by Category</Container.Title>
          <Container.Paragraph>Chicago</Container.Paragraph>
          <Container.Paragraph>Los Angels</Container.Paragraph>
          <Container.Paragraph>Miami</Container.Paragraph>
          <Container.Paragraph>New York</Container.Paragraph>
        </Container.Third>
        <Container.Fourth>
          <Container.Title>Quick Links</Container.Title>
          <Container.Paragraph>Chicago</Container.Paragraph>
          <Container.Paragraph>Los Angels</Container.Paragraph>
          <Container.Paragraph>Miami</Container.Paragraph>
          <Container.Paragraph>New York</Container.Paragraph>
        </Container.Fourth>
        <Container.Fifth>
          <Container.Title>Subscribe</Container.Title>
          <Container.Paragraph>
            We don’t send spam so don’t worry.
          </Container.Paragraph>
          <Container.InputWrap>
            <Container.Input placeholder='enter your email' />
            <Container.Message>
              <Telegram />
            </Container.Message>
          </Container.InputWrap>
        </Container.Fifth>
      </Container>
      <BottomSide>
        <Container.Paragraph>
          Copyright © 2021 CreativeLayers. All Right Reserved.
        </Container.Paragraph>
        <Logo />
        <Container.Paragraph>
          Home Site Map Privacy policy Cookie Policy
        </Container.Paragraph>
      </BottomSide>
    </Wrapper>
  );
};

export default Footer;

/*
Apartments
Condos
Houses
Offices
Retail
Villas
*/
