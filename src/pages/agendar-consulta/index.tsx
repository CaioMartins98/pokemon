import React from "react";
import Header from "../../components/Header/header.component";
import Head from "next/head";
import HeaderPage from "../../components/HeaderPage/header-page.component";
import {
  Button,
  Column,
  Container,
  Divider,
  FormContainer,
  Info,
  Input,
  Label,
  MainContainer,
  NovoPokemonButton,
  Row,
  Select,
  Span,
  SubInfo,
  SubSpan,
  Title,
  Total,
} from "./style";
import Footer from "../../components/Footer/footer.component";
import { useForm, Controller } from "react-hook-form";

function AgendarConsulta() {
  const { control, handleSubmit, register } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
    // Faça o que precisar com os dados do formulário aqui
  };
  return (
    <Container>
      <Head>
        <title>Agendar consulta</title>
      </Head>
      <Header />
      <HeaderPage
        fromPage="Home"
        currentPage="Agendar consulta"
        title="Agendar consulta"
        subTitle="Recupere seus pokémons em 5 segundos"
      />
      <MainContainer>
        <Title>Preencha o formulário abaixo para agendar sua consulta</Title>
        <FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Row>
              <Label>
                Nome
                <Input {...register("nome")} placeholder="Digite seu nome" />
              </Label>
              <Label>
                Sobrenome
                <Input
                  {...register("sobrenome")}
                  placeholder="Digite seu sobrenome"
                />
              </Label>
            </Row>

            <Row>
              <Label>
                Região:
                <Controller
                  control={control}
                  name="região"
                  render={({ field }) => (
                    <Select {...field} width={265}>
                      <option value="" disabled selected hidden>
                        Selecione
                      </option>
                      <option value="regiao1">Região 1</option>
                      <option value="regiao2">Região 2</option>
                      <option value="regiao3">Região 3</option>
                      {/* Adicione mais opções conforme necessário */}
                    </Select>
                  )}
                />
              </Label>

              <Label>
                Cidade:
                <Controller
                  control={control}
                  name="cidade"
                  render={({ field }) => (
                    <Select {...field} width={265}>
                      <option value="" disabled selected hidden>
                        Selecione
                      </option>
                      <option value="cidade1">Cidade 1</option>
                      <option value="cidade2">Cidade 2</option>
                      <option value="cidade3">Cidade 3</option>
                    </Select>
                  )}
                />
              </Label>
            </Row>
            <Column>
              <Span>Cadastre seu time</Span>
              <SubSpan>Atendemos até 06 pokémons por vez</SubSpan>
            </Column>
            <Row>
              <Span>Pokémon 1</Span>
              <Controller
                control={control}
                name="pokemons"
                render={({ field }) => (
                  <Select style={{ marginRight: 13 }} {...field} width={450}>
                    <option value="" disabled selected hidden>
                      Selecione
                    </option>
                    <option value="pokemon1">Pokemon 1</option>
                    <option value="pokemon2">Pokemon 2</option>
                    <option value="pokemon3">Pokemon 3</option>
                  </Select>
                )}
              />
            </Row>
            <Row>
              <NovoPokemonButton>
                Adicionar novo pokémon ao time +
              </NovoPokemonButton>
            </Row>
            <Row>
              <Label>
                Data para Atendimento:
                <Controller
                  control={control}
                  name="dataAtendimento"
                  render={({ field }) => (
                    <Select {...field} width={265}>
                      <option value="" disabled selected hidden>
                        Selecione uma data
                      </option>
                      <option value="data1">Data 1</option>
                      <option value="data2">Data 2</option>
                      <option value="data3">Data 3</option>
                      {/* Adicione mais opções conforme necessário */}
                    </Select>
                  )}
                />
              </Label>

              <Label>
                Horário de Atendimento:
                <Controller
                  control={control}
                  name="horaAtendimento"
                  render={({ field }) => (
                    <Select {...field} width={265}>
                      <option value="" disabled selected hidden>
                        Selecione um horário
                      </option>
                      <option value="hora1">Hora 1</option>
                      <option value="hora2">Hora 2</option>
                      <option value="hora3">Hora 3</option>
                    </Select>
                  )}
                />
              </Label>
            </Row>
            <Divider />
            <Row>
              <Info>Número de pokémons a serem atendidos:</Info>
              <Info>01</Info>
            </Row>
            <Row>
              <Info>Atendimento unitário por pokémon: </Info>
              <Info>R$ 70,00</Info>
            </Row>
            <Row>
              <Info>Subtotal:</Info>
              <Info>R$ 70,00</Info>
            </Row>
            <Row>
              <Info>Taxa geracional*: </Info>
              <Info>R$ 2,10</Info>
            </Row>
            <Row>
              <SubInfo>
                *adicionamos uma taxa de 3%, multiplicado pelo número da geração
                mais alta do time, com limite de até 30%
              </SubInfo>
            </Row>
            <Row>
              <Total>Valor Total: R$ 72,10</Total>
              <Button type="submit">Concluir agendamento</Button>
            </Row>
          </form>
        </FormContainer>
      </MainContainer>
      <Footer />
    </Container>
  );
}

export default AgendarConsulta;
