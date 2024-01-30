import React from "react";
import { ButtonField } from "./styles";
interface ButtonProps {
  selectedButton: string;
  handleButtonClick: (buttonName: string) => void;
  route: string;
  buttonTitle: string;
}
function Button({
  handleButtonClick,
  selectedButton,
  route,
  buttonTitle,
}: ButtonProps) {
  return (
    <>
      <ButtonField
        selected={selectedButton === route}
        onClick={() => {
          handleButtonClick(route);
        }}
      >
        {buttonTitle}
      </ButtonField>
    </>
  );
}

export default Button;
