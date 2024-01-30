import React from "react";
import Styled from "./styles";

interface ModalProps {
  isOpen: boolean;
  title: string;
  onClose(): void;
  children: React.ReactNode;
}

const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <Styled.Overlay>
      <Styled.StyledDialog open>
        <Styled.HeaderContainer>
          <Styled.Title>{title}</Styled.Title>
          <Styled.CloseButton onClick={onClose}>X</Styled.CloseButton>
        </Styled.HeaderContainer>
        {children}
      </Styled.StyledDialog>
    </Styled.Overlay>
  );
};
export default Modal;
