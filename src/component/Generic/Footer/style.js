import styled, { css } from 'styled-components';
import { ReactComponent as location } from '../../../assets/icons/location.svg';
import { ReactComponent as phone } from '../../../assets/icons/phone.svg';
import { ReactComponent as email } from '../../../assets/icons/email.svg';
import { ReactComponent as telegram } from '../../../assets/icons/telegram.svg';
import { ReactComponent as logo } from '../../../assets/icons/footerlogo.svg';

const IconSize = css`
  min-height: 18px;
  min-width: 18px;
  margin-right: 21px;
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 605px;
  background: #0d263b;
  color: #ffffff;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 10%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const BottomSide = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  height: 103px;
  background: #0d263b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
`;
Container.Title = styled.div`
  font-family: 'Cerebri Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  margin-bottom: 25px;
`;
Container.Paragraph = styled.div`
  font-family: 'Cerebri Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 26px;
  color: #ffffff;
`;
Container.InputWrap = styled.div`
  position: relative;
  height: 60px;
`;
Container.Message = styled.div`
  width: 50px;
  height: 50px;
  background: #0061df;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 5px;
  right: 5px;
`;
Container.Input = styled.input`
  width: 100%;
  height: 60px;
  font-family: 'Cerebri Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #696969;
  padding-left: 19px;
  outline: none;
`;
Container.First = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 60%;
`;
Container.First.Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
Container.Second = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 60%;
  transform: translateX(15%);
`;

Container.Third = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 60%;
  transform: translateX(15%);
`;
Container.Fourth = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 60%;
  transform: translateX(15%);
`;
Container.Fifth = styled.div`
  flex: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 60%;
`;
// Icons
export const Location = styled(location)`
  ${IconSize}
`;
export const Phone = styled(phone)`
  ${IconSize}
`;
export const Email = styled(email)`
  ${IconSize}
`;
export const Telegram = styled(telegram)`
  width: 20px;
  height: 20px;
`;
export const Logo = styled(logo)``;
