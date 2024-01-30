import React from "react";
import { CloseButton, HeaderContainer, Overlay, StyledDialog, Title } from "./styles";

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose(): void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Overlay>
      <StyledDialog open>
        <HeaderContainer>
          <Title>{title}</Title>
          <CloseButton onClick={onClose}>X</CloseButton>
        </HeaderContainer>
        {children}
      </StyledDialog>
    </Overlay>
  );
};
export default Modal;
