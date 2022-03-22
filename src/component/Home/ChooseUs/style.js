import styled from "styled-components";

export const Container = styled.div`
  background: #f6f8f9;
  padding: 100px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

Container.Header = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  color: #0d263b;
`;

Container.Title = styled.div`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #696969;
  margin: 10px 0px 50px 0px;
`;

export const Wrapper = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
