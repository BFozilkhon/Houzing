import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 290px;
  background: var(--colorBlue);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
Wrapper.Title = styled.div`
  font-family: 'Cerebri Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  color: var(--colorWhite);
  margin-bottom: 15px;
`;
Wrapper.Description = styled.div`
  font-family: 'Cerebri Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: var(--colorWhite);
`;
Wrapper.Button = styled.div`
  width: 198px;
  height: 55px;
  background-color: var(--colorWhite);
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Cerebri Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 17px;
  text-transform: uppercase;
  color: var(--colorBlue);
  margin-top: 26px;
  cursor: pointer;
`;
