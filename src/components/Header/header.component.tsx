/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Styled from "./styles";
import { useRouter } from "next/router";
import Button from "../Button/button-component";
import Image from "next/image";
import PokeBall from "../../../public/images/white-pokeball.svg";
function Header() {
  const router = useRouter();
  const [selectedButton, setSelectedButton] = useState("");
  const [width, setWidth] = useState(260);

  useEffect(() => {
    if (router) {
      const timeout = setTimeout(
        () => {
          setWidth(60);
        },
        router.pathname !== "/home" ? 0 : 5000
      );

      return () => clearTimeout(timeout);
    }
  }, [router]);

  const handleNavigation = (route: string) => {
    if (router) {
      router.push(route);
    }
  };

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
    handleNavigation(buttonName);
  };

  useEffect(() => {
    if (router) {
      setSelectedButton(router.pathname);
    }
  }, [router?.pathname]);

  const handleMouseEnter = () => {
    return setWidth(260);
  };

  const handleMouseLeave = () => {
    return setWidth(60);
  };
  
  return (
    <Styled.HeaderContainer>
      <>
        {router?.pathname === "/home" ? (
          <Styled.ShrinkContainer
            width={width}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image src={PokeBall} alt="pokeball" />
            {width >= 260 && <Styled.Title>Centro Pokémon</Styled.Title>}
          </Styled.ShrinkContainer>
        ) : (
          <Styled.Container
            width={width}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image src={PokeBall} alt="pokeball" />
            {width >= 260 && <Styled.Title>Centro Pokémon</Styled.Title>}
          </Styled.Container>
        )}
      </>

      <Styled.ButtonContainer>
        <Button
          buttonTitle="Início"
          route="/home"
          selectedButton={selectedButton}
          handleButtonClick={() => {
            handleButtonClick("/home");
          }}
        />
        <Button
          buttonTitle="Quem somos"
          route="/quem-somos"
          selectedButton={selectedButton}
          handleButtonClick={() => {
            handleButtonClick("/quem-somos");
          }}
        />
        <Button
          buttonTitle="Agendar consulta"
          route="/agendar-consulta"
          selectedButton={selectedButton}
          handleButtonClick={() => {
            handleButtonClick("/agendar-consulta");
          }}
        />
      </Styled.ButtonContainer>
    </Styled.HeaderContainer>
  );
}

export default Header;
