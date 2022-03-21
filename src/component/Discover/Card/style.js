import styled from "styled-components";
import { ReactComponent as arrow } from "../../../assets/icons/arrow-top-bottom.svg";
import { ReactComponent as bed } from "../../../assets/icons/bed.svg";
import { ReactComponent as shower } from "../../../assets/icons/shower.svg";
import { ReactComponent as car } from "../../../assets/icons/car.svg";
import { ReactComponent as triangle } from "../../../assets/icons/triangle.svg";
import { ReactComponent as puls } from "../../../assets/icons/puls.svg";
import { ReactComponent as heart } from "../../../assets/icons/heart.svg";
import { ReactComponent as play } from "../../../assets/icons/play-button.svg";
import { ReactComponent as kamera } from "../../../assets/icons/kamera.svg";

export const Cards = styled.div`
  width: 360px;
  padding-bottom: 10px;
  transition: all 0.2s;
  :hover {
    box-shadow: 0px 20px 50px rgba(13, 38, 59, 0.2);
  }
  :hover .full {
    display: flex;
  }
  margin: 20px;
`;

Cards.Img = styled.div`
  background-image: url(${"https://images.unsplash.com/photo-1592928302636-c83cf1e1c887?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"});
  background-size: 100% 100%;
  width: 100%;
  height: 270px;
  position: relative;
`;

Cards.Button = styled.div`
  background: ${({ dark }) => (dark ? "#0D263B" : "#0061df")};
  border-radius: 3px;
  width: 100px;
  height: 35px;
  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 13px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
Cards.Wrap = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  bottom: 20px;
  left: 20px;
  display: none;
  transition: all 0.3s;
`;

Cards.Kamera = styled(kamera)``;
Cards.Play = styled(play)``;

Cards.HoverItem = styled.div`
  font-family: "Cerebri Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  color: #ffffff;
  margin: 0px 10px;
`;

Cards.Profil = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

Cards.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #0d263b;
  margin: 10px 0px 0px 20px;
`;
Cards.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #696969;
  margin: 9px 0px 20px 20px;
`;

Cards.Flexing = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Cards.Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

Cards.Bed = styled(bed)``;
Cards.Shower = styled(shower)``;
Cards.Car = styled(car)``;
Cards.Triangle = styled(triangle)``;

Cards.Item = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #696969;
  margin-top: 7.7px;
`;

Cards.Cost = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  text-decoration-line: line-through;
  color: #696969;
`;

Cards.CostTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 20px;
  color: #0d263b;
  margin-top: 3px;
`;

Cards.HR = styled.div`
  width: 100%;
  border-bottom: 2px solid #e6e9ec;
  margin: 20px 0px;
`;

Cards.Arrow = styled(arrow)``;
Cards.Puls = styled(puls)``;
Cards.Heart = styled(heart)``;

Cards.Circle = styled.div`
  border-radius: 60px;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s;
  cursor: pointer;
  :hover {
    background: #f6f8f9;
  }
`;

Cards.IconWrap = styled.div`
  display: flex;
  align-items: center;
  width: 30%;
  justify-content: space-between;
`;
