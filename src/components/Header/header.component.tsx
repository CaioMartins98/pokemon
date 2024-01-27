import React, { useEffect, useState } from "react";
import {
  ButtonContainer,
  Container,
  HeaderContainer,
  ShrinkContainer,
  Title,
} from "./styles";
import SwiperComponent from "../Swiper/swiper.component";
import { useRouter } from "next/router";
import Button from "../Button";
import Image from "next/image";
import PokeBall from "../../../public/images/white-pokeball.svg";
function Header() {
  const router = useRouter();
  const [selectedButton, setSelectedButton] = useState("");
  const [width, setWidth] = useState(260);

  useEffect(() => {
   
    const timeout = setTimeout(
      () => {
        setWidth(62);
      },
      router.pathname !== "/home" ? 0 : 5000
    );

    return () => clearTimeout(timeout);
  }, [router.pathname]);

  const handleNavigation = (route: string) => {
    router.push(route);
  };

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
    handleNavigation(buttonName);
  };
  useEffect(() => {
    const currentRoute = router.pathname;
    setSelectedButton(currentRoute);
  }, [router.pathname]);

  const handleMouseEnter = () => {
    return setWidth(260);
  };

  const handleMouseLeave = () => {
    return setWidth(60);
  };
  
  return (
    <HeaderContainer>
      
        <>
          <ShrinkContainer
            width={width}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Image src={PokeBall} alt="pokeball" />
            {width >= 260 && <Title>Centro Pokémon</Title>}
          </ShrinkContainer>
        </>
    
      <ButtonContainer>
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
      </ButtonContainer>
    </HeaderContainer>
  );
}

export default Header;
