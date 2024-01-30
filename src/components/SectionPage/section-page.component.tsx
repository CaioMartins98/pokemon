import React from "react";
import Styled from "./styles";
interface HeaderPageProps {
  fromPage: string;
  currentPage: string;
  title: string;
  subTitle: string;
}
function HeaderPage({
  currentPage,
  fromPage,
  subTitle,
  title,
}: HeaderPageProps) {
  return (
    <Styled.SectionPageContainer>
      <Styled.SectionNavigationContainer>
        <Styled.NavigationContainer>
          <Styled.SectionNavigationTitle>
            {fromPage}
            <Styled.Span>{" >"}</Styled.Span>
          </Styled.SectionNavigationTitle>
          <Styled.SectionNavigationTitle>
            {currentPage}
          </Styled.SectionNavigationTitle>
        </Styled.NavigationContainer>
        <Styled.Title>{title}</Styled.Title>
        <Styled.SubTitle>{subTitle}</Styled.SubTitle>
      </Styled.SectionNavigationContainer>
    </Styled.SectionPageContainer>
  );
}

export default HeaderPage;
