import styled from "styled-components";

const Container = styled.div`
  overflow-x: hidden;
`;
const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin: 50px 0px;
`;

const DescriptionContainer = styled.div`
  width: 408px;
  display: flex;
  flex-direction: column;
`;

const Description = styled.span<{
  fontSize: number;
  fontWeight: number;
  mt?: number;
}>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: #000;
  font-weight: ${({ fontWeight }) => fontWeight};
  margin-top: ${({ mt }) => `${mt}px`};
`;

const StyledComponents = {
  Container,
  MainContainer,
  DescriptionContainer,
  Description,
};

export default StyledComponents;