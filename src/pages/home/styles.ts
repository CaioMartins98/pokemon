import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  align-items: center;
  background-image: url("/images/pokemon-hero.jpg");
  background-size: cover;
  background-position: center;
`;

const Description = styled.span`
  font-size: 32px;
  color: #fff;
  font-weight: 700;
  width: 550px;
  text-align: center;
`;

const Styled = {
  Container,
  Description,
};
export default Styled;
