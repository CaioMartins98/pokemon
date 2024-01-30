/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";

import Header from "../../components/Header/header.component";
import Head from "next/head";
import HeaderPage from "../../components/HeaderPage/header-page.component";
import {
  Button,
  CloseButton,
  Column,
  Container,
  Divider,
  ErrorMessage,
  FormContainer,
  Info,
  Input,
  Label,
  MainContainer,
  NovoPokemonButton,
  PokemonContainer,
  PokemonName,
  Row,
  Select,
  SelectPokemon,
  Span,
  StyledOption,
  SubInfo,
  SubSpan,
  Title,
  Total,
} from "./style";
import Footer from "../../components/Footer/footer.component";
import { useForm, Controller } from "react-hook-form";
import { QueryClient, dehydrate, useQuery } from "react-query";
import {
  ApiServiceDateScheduling,
  ApiServicePokemon,
  ApiServiceTimeScheduling,
  ApiTimeService,
} from "../../api/service/api-service";
import {
  PokemonEntity,
  PokemonListResponse,
} from "../../api/entities/pokemon-entity";
import Modal from "../../components/Modal/modal.component";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { formatToBrl } from "../../utils/formatToBrl";
import moment from "moment";
import { yupResolver } from "@hookform/resolvers/yup";
import { agendarConsultaFormSchema } from "../../helpers/schemas/agendar-consulta";
import CheckoutModal from "../../components/CheckoutModal/checkout-modal.component";

function AgendarConsulta({
  pokemonList: listPokemon,
  dateSchedulingList,
}: {
  pokemonList: PokemonListResponse;
  dateSchedulingList: string[];
}) {
  const {
    control,
    handleSubmit,
    register,
    watch,
    formState: { errors },
    reset,
    resetField,
  } = useForm({
    resolver: yupResolver(agendarConsultaFormSchema),
  });

  const [openCheckoutModal, setOpenCheckoutModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [offset, setOffset] = useState(20);
  const [pokemons, setPokemons] = useState<any>([]);
  const [successScheduling, setSuccessScheduling] = useState(false);
  const [selectPokemon, setSelectPokemon] = useState<any>({});
  const [data, setData] = useState<any>({});
  const [listPokemons, setListPokemons] = useState<any>([
    { name: "", url: "", value: 0 },
  ]);

  const timeService: ApiTimeService = new ApiServiceTimeScheduling();

  const getTimesList = async (date: any) => {
    return timeService.fetch(date);
  };

  const today = new Date();
  const todayFormatted = moment(today).format("DD/MM/YYYY");

  const dateSelected = watch("dataAtendimento");
  const { data: timeSchedulingData } = useQuery(
    "timeScheduling",
    () => getTimesList(dateSelected ? dateSelected : todayFormatted),
    {
      initialData: [],
    }
  );

  const total: any = useMemo(() => {
    const newTotal = pokemons.reduce((acc: any, option: any) => {
      return acc + option.value;
    }, 0);

    return newTotal;
  }, [pokemons]);

  const showToast = (message: string, type: any) => {
    if (type === "success") {
      return toast.success(message, {
        position: "top-right",
        autoClose: 3000,
      });
    }
    if (type === "error") {
      return toast.error(message, {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const addPokemon = (pokemon: PokemonEntity) => {
    const newPokemon = {
      ...pokemon,
      value: 70,
    };
    setPokemons((prevState: any) => [...prevState, newPokemon]);
    localStorage.setItem(
      "@pokemons",
      JSON.stringify([...pokemons, newPokemon])
    );
    showToast(`${pokemon.name} adicionado com sucesso!`, "success");
    setSelectPokemon(null);
  };

  useEffect(() => {
    return;
  }, []);

  useEffect(() => {
    const pokemonsStorage = localStorage?.getItem("@pokemons");
    if (pokemonsStorage) {
      const pokemonsArr = JSON.parse(pokemonsStorage);
      setPokemons(pokemonsArr);
    }
  }, []);

  const removePokemon = (pokemon: PokemonEntity) => {
    const filter = pokemons.filter((item: any) => item.name !== pokemon.name);
    localStorage.setItem("@pokemons", JSON.stringify(filter));
    setPokemons(filter);
    showToast(`${pokemon.name} removido com sucesso!`, "success");
  };

  useEffect(() => {
    if (listPokemon?.results) {
      setListPokemons((prevList: any) => [...prevList, ...listPokemon.results]);
    }
  }, [listPokemon]);

  useEffect(() => {
    const fetchPokemons = async () => {
      if (offset === 20 || offset === listPokemon.count) return;
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
        );
        const data = await response.json();
        setListPokemons((prevPokemons: []) => [
          ...prevPokemons,
          ...data.results,
        ]);
      } catch (error) {
        console.error("Error fetching pokémons:", error);
      }
    };

    fetchPokemons();
  }, [offset]);

  const handleScroll = (event: any) => {
    if (offset >= listPokemon.count) return;
    const { target } = event;

    if (target.scrollHeight - target.scrollTop === target.clientHeight) {
      setOffset((prevOffset) => prevOffset + 20);
    }
  };

  const toggle = () => {
    setOpenModal(!openModal);
    setSelectPokemon(null);
  };
  const toggleCheckout = () => {
    setOpenCheckoutModal(!openCheckoutModal);
  };

  const clearForm = () => {
    localStorage.clear();
    setPokemons([]);
    reset();
  };

  const onCloseCheckout = () => {
    setOpenCheckoutModal(false);
    clearForm();
    window.location.reload();
  };

  useEffect(() => {
    pokemonList();
  }, []);

  const pokemonList = () => {
    if (listPokemon?.results) {
      const list = listPokemon?.results.map((pokemon) => {
        return { ...pokemon, value: 70 };
      });
      return setListPokemons(list);
    }
  };
  const horaConsulta = watch("horaAtendimento");
  const onSubmit = (data: any) => {
    if (pokemons.length === 0) {
      showToast("Adicione pelo menos 01 pokémon na consulta.", "error");
    } else {
      setData(data);
      if (horaConsulta === "14:30:00") {
        setSuccessScheduling(false);
      } else {
        setSuccessScheduling(true);
      }
      toggleCheckout();
    }
  };

  return (
    <Container>
      <Head>
        <title>Agendar consulta | Centro Pokémon</title>
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
              <Label error={errors.nome}>
                Nome
                <Input
                  error={errors.nome}
                  {...register("nome")}
                  placeholder="Digite seu nome"
                />
                {errors?.nome && (
                  <ErrorMessage>{errors.nome?.message}</ErrorMessage>
                )}
              </Label>
              <Label error={errors.sobrenome}>
                Sobrenome
                <Input
                  error={errors.sobrenome}
                  {...register("sobrenome")}
                  placeholder="Digite seu sobrenome"
                />
                {errors?.sobrenome && (
                  <ErrorMessage>{errors.sobrenome?.message}</ErrorMessage>
                )}
              </Label>
            </Row>

            <Row>
              <Label error={errors.regiao}>
                Região:
                <Controller
                  control={control}
                  name="regiao"
                  render={({ field }) => (
                    <Select {...field} width={265} error={errors.regiao}>
                      <option value="" disabled selected hidden>
                        Selecione
                      </option>
                      <option value="regiao1">Kanto</option>
                    </Select>
                  )}
                />
                {errors?.regiao && (
                  <ErrorMessage>{errors.regiao?.message}</ErrorMessage>
                )}
              </Label>

              <Label error={errors.cidade}>
                Cidade:
                <Controller
                  control={control}
                  name="cidade"
                  render={({ field }) => (
                    <Select {...field} width={265} error={errors.cidade}>
                      <option value="" disabled selected hidden>
                        Selecione
                      </option>
                      <option value="pewterCity">Pewter City</option>
                      <option value="Pallet Town">Pallet Town</option>
                      <option value="veridianCity">Veridian City</option>
                    </Select>
                  )}
                />
                {errors?.cidade && (
                  <ErrorMessage>{errors.cidade?.message}</ErrorMessage>
                )}
              </Label>
            </Row>
            <Column>
              <Span style={{ marginTop: 50 }}>Cadastre seu time</Span>
              <SubSpan style={{ marginBottom: 30 }}>
                Atendemos até 06 pokémons por vez
              </SubSpan>
            </Column>
            <Column>
              {pokemons.map((item: any, index: any) => (
                <>
                  <Row key={index}>
                    <Span>Pokémon {index + 1}</Span>

                    <PokemonContainer style={{ marginRight: 13 }}>
                      <CloseButton
                        onClick={() => removePokemon(item)}
                        style={{ marginLeft: "95%" }}
                      >
                        X
                      </CloseButton>
                      <PokemonName>{item.name}</PokemonName>
                    </PokemonContainer>
                  </Row>
                </>
              ))}
            </Column>
            <Row>
              <NovoPokemonButton
                onClick={() =>
                  pokemons.length === 6
                    ? showToast("Máximo de 06 pokémons por consulta.", "error")
                    : toggle()
                }
              >
                Adicionar novo pokémon ao time +
              </NovoPokemonButton>
            </Row>
            <Row>
              <Label error={errors.dataAtendimento}>
                Data para Atendimento:
                <Controller
                  control={control}
                  name="dataAtendimento"
                  render={({ field }) => (
                    <Select
                      {...field}
                      width={265}
                      error={errors.dataAtendimento}
                    >
                      <option value="" disabled selected hidden>
                        Selecione uma data
                      </option>
                      {dateSchedulingList?.map((date) => (
                        <>
                          <option value={date} key={date}>
                            {date}
                          </option>
                        </>
                      ))}
                    </Select>
                  )}
                />
                {errors?.dataAtendimento && (
                  <ErrorMessage>{errors.dataAtendimento?.message}</ErrorMessage>
                )}
              </Label>

              <Label error={errors.horaAtendimento}>
                Horário de Atendimento:
                <Controller
                  control={control}
                  name="horaAtendimento"
                  render={({ field }) => (
                    <Select
                      error={errors.horaAtendimento}
                      {...field}
                      width={265}
                      disabled={!dateSelected}
                    >
                      <option value="" disabled selected hidden>
                        Selecione um horário
                      </option>
                      {timeSchedulingData?.map((time) => (
                        <>
                          <option value={time} key={time}>
                            {time}
                          </option>
                        </>
                      ))}
                    </Select>
                  )}
                />
                {errors?.horaAtendimento && (
                  <ErrorMessage>{errors.horaAtendimento?.message}</ErrorMessage>
                )}
              </Label>
            </Row>
            <Divider />
            <Row>
              <Info>Número de pokémons a serem atendidos:</Info>
              <Info>{`0${pokemons.length}`}</Info>
            </Row>
            <Row>
              <Info>Atendimento unitário por pokémon: </Info>
              <Info>R$ 70,00</Info>
            </Row>
            <Row>
              <Info>Subtotal:</Info>
              <Info>{formatToBrl(total)}</Info>
            </Row>
            <Row>
              <Info>Taxa geracional*: </Info>
              <Info>R$ 0,00</Info>
            </Row>
            <Row>
              <SubInfo>
                *adicionamos uma taxa de 3%, multiplicado pelo número da geração
                mais alta do time, com limite de até 30%
              </SubInfo>
            </Row>
            <Row>
              <Total>Valor Total: {formatToBrl(total)}</Total>
              <Button type="submit">Concluir agendamento</Button>
            </Row>
          </form>
        </FormContainer>
      </MainContainer>
      <Modal isOpen={openModal} onClose={toggle} title="Adicione seu pokemon">
        <SelectPokemon onScroll={handleScroll} style={{ marginRight: 13 }}>
          <option value="" disabled selected hidden>
            Selecione
          </option>
          {listPokemons.map((pokemon: any) => (
            <>
              <StyledOption
                selected={
                  pokemons.some((item: any) => item.name === pokemon.name) ||
                  (selectPokemon && selectPokemon?.name === pokemon.name)
                }
                key={pokemon.name}
                onClick={() => {
                  pokemons.some((item: any) => item.name === pokemon.name)
                    ? {}
                    : setSelectPokemon(pokemon);
                }}
              >
                {pokemon.name}
              </StyledOption>
            </>
          ))}
        </SelectPokemon>
        <Button
          onClick={() => {
            pokemons.length === 6
              ? showToast("Máximo de 06 pokémons por consulta.", "error")
              : selectPokemon === null
              ? {}
              : addPokemon(selectPokemon);
          }}
        >
          Adicionar
        </Button>
      </Modal>
      {successScheduling ? (
        <CheckoutModal
          title="Consulta Agendada"
          icon="/images/success.svg"
          message={`Seu agendamento para o dia ${data.dataAtendimento}, às ${data.horaAtendimento} para 0${pokemons.length}x pokémons foi realizado com sucesso!`}
          onClose={onCloseCheckout}
          isOpen={openCheckoutModal}
        />
      ) : (
        <CheckoutModal
          title="Houve um problema no agendamento"
          icon="/images/error.svg"
          message={`Horário para consulta indiponível no momento.`}
          onClose={toggleCheckout}
          isOpen={openCheckoutModal}
        />
      )}

      <Footer />
    </Container>
  );
}

export default AgendarConsulta;

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  try {
    const pokemonService = new ApiServicePokemon();
    const pokemonData = await pokemonService.getPokemon();
    await queryClient.prefetchQuery("pokemonList", () => pokemonData);

    const dateSchedulingService = new ApiServiceDateScheduling();
    const dateSchedulingData = await dateSchedulingService.fetch();
    await queryClient.prefetchQuery("dateScheduling", () => dateSchedulingData);

    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        pokemonList: pokemonData,
        dateSchedulingList: dateSchedulingData,
      },
    };
  } catch (error) {
    console.error("Error fetching data on server:", error);
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
        pokemonList: { results: [] },
        dateSchedulingList: [],
      },
    };
  }
}
