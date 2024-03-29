import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: 72px;
  background-color: #1d1d1d;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 0;
`;

const FooterTitle = styled.span`
  color: #fff;
  font-size: 14px;
  @media (max-width: 780px) {
    width: 290px;
    text-align: center;
  }
`;

const StyledComponents = {
  FooterContainer,
  FooterTitle,
};

export default StyledComponents;
