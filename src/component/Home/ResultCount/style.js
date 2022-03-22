import styled from "styled-components";

export const Wrap = styled.div`
  width: 60%;
  margin: 80px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

Wrap.Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

Wrap.NumHeader = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  color: #0061df;
`;

Wrap.Item = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  color: #696969;
  margin-top: 4px;
`;

export const Hr = styled.div`
  width: 100%;
  border-bottom: 2px solid #e6e9ec;
`;
