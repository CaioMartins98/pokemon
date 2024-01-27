import styled, { keyframes } from "styled-components";

const initialWidth = 260;
const finalWidth = 60;

export const HeaderContainer = styled.div`
  width: 98%;
  height: 104px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  background-color: #fff;
  margin-left: 30px;

  @media (max-width: 780px) {
    flex-direction: column;
    height: 125px;
  }
`;

export const ButtonContainer = styled.div`
  width: 540px;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
  @media (max-width: 780px) {
    margin: 10px 0px;
  }
`;

export const Container = styled.div<{ width: number }>`
  width: ${({ width }) => width}px;
  height: 60px;
  border-radius: 50px;
  background-color: #e40f0f;
  display: flex;
  align-items: center;
   &:hover {
    width: 260px !important;
    cursor: pointer;
  }
  justify-content: center;
`;

const shrinkAnimation = keyframes`

  from {
    transition: 2s;
    width: ${initialWidth}px;
  }
  to {
    transition: 2s;
    width: ${finalWidth}px;
  }
`;

export const ShrinkContainer = styled(Container)`
  animation: ${shrinkAnimation} 0.7s ease-in-out 5s forwards;

  &:hover {
    width: 260px !important;
    cursor: pointer;
  }
`;

export const Title = styled.span`
  font-size: 20px;
  color: #fff;
  font-weight: 600;
  margin-left: 10px;
`;
