import React from "react";
import {
  HeaderNavigationContainer,
  HeaderNavigationTitle,
  HeaderPageContainer,
  NavigationContainer,
  Span,
  SubTitle,
  Title,
} from "./styles";
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
    <HeaderPageContainer>
      <HeaderNavigationContainer>
        <NavigationContainer>
          <HeaderNavigationTitle>
            {fromPage}
            <Span>{" >"}</Span>
          </HeaderNavigationTitle>
          <HeaderNavigationTitle>{currentPage}</HeaderNavigationTitle>
        </NavigationContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </HeaderNavigationContainer>
    </HeaderPageContainer>
  );
}

export default HeaderPage;
