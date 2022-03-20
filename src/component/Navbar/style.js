import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";
import background from "../../assets/imgs/landing.jpg";
import { NavLink } from "react-router-dom";

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 225px 0px 225px;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${background});
  background-repeat: no-repeat;
  background-size: cover;
`;

Wrap.LogoWrap = styled.div`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 32px;
  color: #ffffff;
  span {
    margin-left: 13px;
  }
`;

Wrap.NavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: var(--colorWhite);
`;

Wrap.Logo = styled(logo)`
  width: 40px;
  height: 48px;
  path {
    fill: white;
  }
`;

Wrap.Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
`;

Wrap.Li = styled.li`
  display: flex;
  align-items: center;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
  color: #fff;
  padding-right: 40px;
`;
