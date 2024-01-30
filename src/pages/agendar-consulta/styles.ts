import styled from "styled-components";

const Container = styled.div`
  overflow-x: hidden;
`;

const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 50px 0px;
  width: 100%;
  flex-direction: column;
`;

const Title = styled.span`
  color: #1d1d1d;
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 30px;
`;

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 550px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 560px;
  margin-bottom: 10px;
  @media (max-width: 780px) {
    flex-direction: column;
    height: 125px;
  }
`;
const Column = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 560px;
`;
const Label = styled.label<{ error: boolean | any }>`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  color: ${({ error }) => (error ? "#e40f0f" : "#1d1d1d")};
  font-size: 12px;
  font-weight: 700;
  width: 100%;
`;

const Input = styled.input<{ error?: boolean | any }>`
  border-radius: 8px;
  border: 1px solid ${({ error }) => (error ? "#e40f0f" : "#d5d5d5")};
  width: 265px;
  height: 45px;
  padding: 0px 10px;
  margin: 5px 0px;
  max-width: 245px;
`;
const Select = styled.select<{ width: number; error: boolean | any }>`
  border-radius: 8px;
  border: 1px solid ${({ error }) => (error ? "#e40f0f" : "#d5d5d5")};
  width: ${({ width }) => width}px;
  height: 45px;
  padding: 0px 10px;
  margin: 5px 0px;
`;

const SelectPokemon = styled.div`
  width: 450px;
  height: 200px;
  margin: 25px 0px;
  overflow-y: auto;
`;

const StyledOption = styled.div<{ selected: boolean | null }>`
  padding: 8px;
  cursor: pointer;
  border-bottom: 1px solid #d5d5d5;
  background-color: ${({ selected }) => (selected ? "#e40f0f" : "transparent")};
  color: ${({ selected }) => (selected ? "#FFF" : "#000")};
  &:hover {
    background-color: ${({ selected }) => (selected ? "#b30404" : "#f9f9f9")};
  }
`;

const Span = styled.span`
  color: #1d1d1d;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const SubSpan = styled.span`
  color: #747474;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const NovoPokemonButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  border: 1px solid #1d1d1d;
  width: 253px;
  height: 42px;
  color: #1d1d1d;
  font-family: Inter;
  background-color: transparent;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  margin: 20px 0px;
`;

const Divider = styled.div`
  height: 1px;
  width: 550px;
  background: #d5d5d5;
  margin: 20px 0px;
`;

const Info = styled.span`
  color: #747474;
  font-size: 14px;
  font-weight: 400;
`;

const SubInfo = styled.span`
  color: #747474;
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
`;

const Total = styled.span`
  color: #1d1d1d;
  font-size: 24px;
  font-weight: 600;
`;

const Button = styled.button`
  width: 183px;
  height: 42px;
  border-radius: 30px;
  background: #e40f0f;
  color: #fff;
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }
`;

const PokemonContainer = styled.div`
  border-radius: 8px;
  border: 1px solid #d5d5d5;
  width: 450px;
  height: 25px;
  padding: 8px;
`;

const PokemonName = styled.span`
  color: #1d1d1d;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -15px;
`;

const CloseButton = styled.span`
  font-weight: 700;
  font-size: 18px;
  color: #a9a9a9;
  cursor: pointer;
`;

const ErrorMessage = styled.span`
  font-weight: 500;
  font-size: 10px;
  color: #e40f0f;
`;

const Styled = {
  Container,
  MainContainer,
  Title,
  FormContainer,
  Row,
  Column,
  Label,
  Input,
  Select,
  SelectPokemon,
  StyledOption,
  Span,
  SubSpan,
  NovoPokemonButton,
  Divider,
  Info,
  SubInfo,
  Total,
  Button,
  PokemonContainer,
  PokemonName,
  CloseButton,
  ErrorMessage,
};

export default Styled;
