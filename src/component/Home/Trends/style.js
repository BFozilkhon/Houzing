import styled from "styled-components";
import background from "../../../assets/imgs/landing.jpg";

export const Container = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${background});
  background-size: 100% 100%;
  height: 65vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 100px 0px;
`;

Container.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;

Container.Header = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 33px;
  line-height: 45px;
  text-align: center;
  color: #ffffff;
  width: 35%;
  margin: 15px 0px 25px 0px;
`;

Container.Btn = styled.div`
  width: 176px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0061df;
  border-radius: 3px;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
  color: #ffffff;
  cursor: pointer;
`;
