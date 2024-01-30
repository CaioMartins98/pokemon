import React from "react";
import Styled from "./styles";
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
      <Styled.ButtonField
        selected={selectedButton === route}
        onClick={() => {
          handleButtonClick(route);
        }}
      >
        {buttonTitle}
      </Styled.ButtonField>
    </>
  );
}

export default Button;
