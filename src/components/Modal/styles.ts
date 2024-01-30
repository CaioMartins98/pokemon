import styled from "styled-components";

const StyledDialog = styled.dialog`
  width: 500px;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
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
  justify-content: space-between;
  margin: 10px 0px;
  border-bottom: 1px solid #d5d5d5;
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

const CloseButton = styled.span`
  font-weight: 700;
  font-size: 20px;
  color: #a9a9a9;
  cursor: pointer;
  margin-bottom: 20px;
`;

const StyledComponents = {
  CloseButton,
  HeaderContainer,
  Overlay,
  StyledDialog,
  Title,
};
export default StyledComponents;
