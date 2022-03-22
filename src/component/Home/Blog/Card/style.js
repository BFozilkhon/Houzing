import styled from "styled-components";
import { ReactComponent as user } from "../../../../assets/icons/user.svg";
import { ReactComponent as message } from "../../../../assets/icons/message.svg";

export const Cards = styled.div`
  width: 360px;
  padding-bottom: 10px;
  transition: all 0.2s;
  :hover {
    box-shadow: 0px 20px 50px rgba(13, 38, 59, 0.2);
    transform: scale(1.05);
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

Cards.Flexing = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Cards.Box = styled.div`
  padding: 30px 20px;
`;

Cards.Div = styled.div`
  display: flex;
  margin-left: ${({ left }) => left && "30px"};
`;

Cards.Message = styled(message)``;
Cards.User = styled(user)``;

Cards.Text = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: #696969;
  margin-left: 13px;
`;

Cards.Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 28px;
  color: #0d263b;
  margin: 14px 0px 16px 0px;
`;

Cards.Item = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #696969;
  margin-bottom: 15px;
`;

Cards.Href = styled.a`
  font-style: normal;
  font-weight: 900;
  font-size: 13px;
  text-decoration-line: underline;
  text-transform: uppercase;
  color: #0061df;
`;
