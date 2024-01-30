import styled from "styled-components";

const StyledDialog = styled.dialog`
  width: 410px;
  padding: 20px;
  border: 1px solid #df8686;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  position: relative;
`;

const Title = styled.span`
  color: #1d1d1d;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin: 10px 0px;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 183px;
  height: 42px;
  border-radius: 30px;
  background: #e40f0f;
  color: #fff;
  transition: 0.5s;
  margin: 20px;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Message = styled.span`
  color: #747474;
  text-align: center;
  font-size: 14px;
  font-weight: 400;
`;

const StyledComponents = {
  StyledDialog,
  Title,
  HeaderContainer,
  Overlay,
  Button,
  MessageContainer,
  Message,
};

export default StyledComponents;
