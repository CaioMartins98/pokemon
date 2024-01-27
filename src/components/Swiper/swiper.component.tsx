import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { History, Navigation } from "swiper/modules";
import "../../../node_modules/swiper";
import { Button } from "./styles";
import { useState } from "react";

SwiperCore.use([Navigation, History]);

interface SwiperProps {
  buttonTitle: string;
  route: string;
  handleNavigation: (route: string) => void;
  selected: string;
}

const SwiperComponent = ({
  buttonTitle,
  route,
  handleNavigation,
}: SwiperProps) => {
  const [selectedButton, setSelectedButton] = useState("");
  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };
  console.log('selectedButton === route',selectedButton === route)
  return (
    <>
      <Button
        selected={selectedButton === route}
        onClick={() => {
          handleButtonClick(route);
          handleNavigation(route);
        }}
      >
        {buttonTitle}
      </Button>
    </>
  );
};

export default SwiperComponent;
