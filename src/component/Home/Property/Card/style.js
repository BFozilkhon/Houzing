import styled from "styled-components";

export const Icon = styled.img`
  width: 60px;
  height: 60px;
  position: absolute;
  visibility: hidden;
  top: 40%;
`;

export const Img = styled.img`
  opacity: 1;
  filter: brightness(50%);
  :hover {
    transition: 0.3s ease-in-out;
    cursor: pointer;
    opacity: 0.7;
  }
  width: 269px;
  height: 320px;
  display: flex;
  flex-direction: row;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  :hover ${Icon} {
    visibility: visible;
    transition: 0.3s ease-in-out;
  }
`;

Container.Title = styled.div`
  font-weight: 600;
  font-style: normal;
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  position: absolute;
  bottom: 10%;
`;
