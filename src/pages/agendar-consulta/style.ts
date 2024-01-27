import styled from "styled-components";

export const Container = styled.div`
  overflow-x: hidden;
`;

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 50px 0px;
  width: 100%;
  flex-direction: column;
`;

export const Title = styled.span`
  color: #1d1d1d;
  font-size: 24px;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 30px;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 550px;
`;

export const Row = styled.div`
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
export const Column = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 560px;
  margin: 50px 0px 20px 0px;
`;
export const Label = styled.label`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  color: #1d1d1d;
  font-size: 12px;
  font-weight: 700;
  width: 100%;
`;
export const Input = styled.input`
  border-radius: 8px;
  border: 1px solid #d5d5d5;
  width: 265px;
  height: 45px;
  padding: 0px 10px;
  margin: 5px 0px;
  max-width: 245px;
`;
export const Select = styled.select<{ width: number }>`
  border-radius: 8px;
  border: 1px solid #d5d5d5;
  width: ${({ width }) => width}px;
  height: 45px;
  padding: 0px 10px;
  margin: 5px 0px;

  option {
    color: #333;
    background-color: #fff;
  }
`;

export const Span = styled.span`
  color: #1d1d1d;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export const SubSpan = styled.span`
  color: #747474;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
export const NovoPokemonButton = styled.div`
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

export const Divider = styled.div`
  height: 1px;
  width: 550px;
  background: #d5d5d5;
  margin: 20px 0px;
`;

export const Info = styled.span`
  color: #747474;
  font-size: 14px;
  font-weight: 400;
`;

export const SubInfo = styled.span`
  color: #747474;
  font-family: Inter;
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 20px;
`;

export const Total = styled.span`
  color: #1d1d1d;
  font-size: 24px;
  font-weight: 600;
`;

export const Button = styled.button`
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
