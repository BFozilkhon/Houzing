import styled from "styled-components";
import { ReactComponent as trusted } from "../../../assets/icons/trusted.svg";
import { ReactComponent as house } from "../../../assets/icons/house.svg";
import { ReactComponent as calculator } from "../../../assets/icons/calculator.svg";
import { ReactComponent as maps } from "../../../assets/icons/maps.svg";

export const Cards = styled.div`
  width: 360px;
  height: 336px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  margin: 20px;
  :hover {
    box-shadow: 0px 20px 50px rgba(13, 38, 59, 0.2);
  }
  :hover .circle {
    background: #0061df;
  }
  :hover .icons {
    path {
      fill: white;
    }
  }
`;

Cards.Circle = styled.div`
  width: 112px;
  height: 112px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: white;
`;

Cards.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 23px;
  color: #0d263b;
  margin: 26px 0px 17px 0px;
`;

Cards.Item = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #696969;
  width: 90%;
`;

Cards.Trusted = styled(trusted)``;
Cards.House = styled(house)``;
Cards.Calculator = styled(calculator)``;
Cards.Maps = styled(maps)``;
