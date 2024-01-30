import React from "react";
import {
  Button,
  HeaderContainer,
  Message,
  MessageContainer,
  Overlay,
  StyledDialog,
  Title,
} from "./styles";
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
    <Overlay>
      <StyledDialog open>
        <HeaderContainer>
          <Title>{title}</Title>
        </HeaderContainer>
        <Image src={icon} alt="icon" width={30} height={30}/>
        <MessageContainer>
          <Message>{message}</Message>
        </MessageContainer>
        <Button onClick={onClose}>Fazer novo agendamento</Button>
      </StyledDialog>
    </Overlay>
  );
};
export default CheckoutModal;
