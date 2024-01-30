import styled from "styled-components";

const SectionPageContainer = styled.div`
  height: 187px;
  background-color: #e40f0f;
  width: 92%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 80px;
`;

const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const SectionNavigationContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 500px;
  flex-direction: column;
`;
const SectionNavigationTitle = styled.span`
  color: #fff;
  font-size: 12px;
  font-weight: 700;
`;
const Title = styled.span`
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  margin-top: 10px;
`;
const SubTitle = styled.span`
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  margin-top: 10px;
`;

const Span = styled.span`
  font-weight: 400;
  margin: 0px 5px;
`;

const StyledComponents = {
  SectionNavigationContainer,
  SectionNavigationTitle,
  SectionPageContainer,
  NavigationContainer,
  Span,
  SubTitle,
  Title,
};

export default StyledComponents;
