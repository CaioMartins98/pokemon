import styled from "styled-components";

export const Container = styled.div`
  overflow-x: hidden;
`;
export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: left;
  margin: 50px 0px;
`;

export const DescriptionContainer = styled.div`
  width: 408px;
  display: flex;
  flex-direction: column;
`;

export const Description = styled.span<{
  fontSize: number;
  fontWeight: number;
  mt?: number;
}>`
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: #000;
  font-weight: ${({ fontWeight }) => fontWeight};
  margin-top: ${({ mt }) => `${mt}px`};
`;
