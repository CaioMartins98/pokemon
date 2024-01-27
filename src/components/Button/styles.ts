import styled from "styled-components";

export const ButtonField = styled.button<{ selected: boolean }>`
  padding: 10px;
  background-color: ${({ selected }) => (selected ? '#E40F0F' : "transparent")};
  color: ${({ selected }) => (selected ? "white" : "black")};
  min-width: 180px;
  height: 42px;
  border: none;
  border-radius: 30px;
  cursor: pointer;

  &:active,
  &:focus {
    background-color: #E40F0F;
    color: white;
  }
`;
