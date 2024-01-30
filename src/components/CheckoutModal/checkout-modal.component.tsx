import React from "react";
import Styled from "./styles";
import Image from "next/image";

interface CheckoutModalProps {
  isOpen: boolean;
  title: string;
  onClose(): void;
  icon: string;
  message: string;
}

const CheckoutModal = ({
  isOpen,
  onClose,
  title,
  icon,
  message,
}: CheckoutModalProps) => {
  if (!isOpen) return null;
  return (
    <Styled.Overlay>
      <Styled.StyledDialog open>
        <Styled.HeaderContainer>
          <Styled.Title>{title}</Styled.Title>
        </Styled.HeaderContainer>
        <Image src={icon} alt="icon" width={30} height={30} />
        <Styled.MessageContainer>
          <Styled.Message>{message}</Styled.Message>
        </Styled.MessageContainer>
        <Styled.Button onClick={onClose}>Fazer novo agendamento</Styled.Button>
      </Styled.StyledDialog>
    </Styled.Overlay>
  );
};
export default CheckoutModal;
