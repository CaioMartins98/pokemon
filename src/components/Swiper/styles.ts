import styled from "styled-components";

export const Button = styled.button<{ selected: boolean }>`
  padding: 10px;
  margin: 5px;
  background-color: ${({ selected }) => (selected ? "red" : "transparent")};
  color: ${({ selected }) => (selected ? "white" : "black")};
  border: 1px solid black;
  cursor: pointer;

  &:hover {
    background-color: ${({ selected }) => (selected ? "red" : "lightgray")};
  }
`;
