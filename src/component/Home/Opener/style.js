import { Select, Tabs } from "antd";
import styled from "styled-components";
import background from "../../../assets/imgs/landing.jpg";
import { ReactComponent as search } from "../../../assets/icons/search.svg";
import { ReactComponent as adSearch } from "../../../assets/icons/advancedSearch.svg";

const { TabPane } = Tabs;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(${background});
  background-repeat: no-repeat;
  background-size: 100%;
  font-weight: 900;
`;

export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 1em;
  line-height: 1.25em;
  text-align: center;
  text-transform: uppercase;
  color: var(--colorWhite);
`;

Container.TitleHead = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
  color: #ffffff;
`;

Container.Header = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 60px;
  line-height: 76px;
  text-align: center;
  color: #ffffff;
`;

export const Wrap = styled(Tabs)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;

  #rc-tabs-0-tab-1,
  #rc-tabs-0-tab-2,
  #rc-tabs-0-tab-3 {
    color: white;
    &:active {
      color: var(--colorWhite);
    }

    font-style: normal;
    font-weight: 600;
    font-size: 1em;
    line-height: 20px;
    color: var(--colorWhite);
  }

  .ant-tabs-nav::before {
    border-bottom: none;
  }

  .ant-tabs-ink-bar {
    background-color: var(--colorWhite);
  }
`;

Wrap.TabPane = styled(TabPane)``;

Container.Box = styled.div`
  width: 1050px;
  height: 95px;
  background-color: var(--colorWhite);
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  border-radius: 3px;
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  align-items: center;

  margin-top: 26px;
`;

Container.Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

Title.Item = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  text-transform: uppercase;
  color: #0d263b;
`;

export const Choose = styled(Select)`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #696969;
`;

export const Search = styled.div`
  padding: 4px;
  border-bottom: 2px solid #e6e9ec;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 300px;
`;

export const Input = styled.input`
  border: none;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

Title.AdvSearch = styled.div`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 18px;
  color: #0d263b;
`;

export const SearchIcon = styled(search)`
  cursor: pointer;
  path {
    fill: ${({ big }) => big && "var(--colorWhite)"};
  }
  margin-right: 11px;
`;

export const AdvanSearchIcon = styled(adSearch)`
  cursor: pointer;
`;

export const Button = styled.div`
  display: flex;
  width: 155px;
  height: 55px;
  background: #0061df;
  border-radius: 3px;
  align-items: center;
  padding: 0 28px;

  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  text-transform: uppercase;
  color: var(--colorWhite);
  cursor: pointer;
  box-sizing: border-box;
`;
