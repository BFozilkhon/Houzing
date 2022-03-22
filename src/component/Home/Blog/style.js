import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 0px;
  margin: 100px 0px;
  background-color: #f6f8f9;
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
  text-align: center;
  color: #696969;
  margin: 10px 0px 36px 0px;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
  flex-wrap: wrap;
  /* justify-content: center; */
`;
