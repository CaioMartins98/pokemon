/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo, useState } from "react";

import Header from "../../components/Header/header.component";
import Head from "next/head";
import SectionPage from "../../components/SectionPage/section-page.component";
import Styled from "./styles";
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
  } = useForm({
    resolver: yupResolver(agendarConsultaFormSchema),
  });

  const horaConsulta = watch("horaAtendimento");
  const dateSelected = watch("dataAtendimento");
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

  const setPokemonLocalStorage = () => {
    const pokemonsStorage = localStorage?.getItem("@pokemons");
    if (pokemonsStorage) {
      const pokemonsArr = JSON.parse(pokemonsStorage);
      setPokemons(pokemonsArr);
    }
  };

  const removePokemon = (pokemon: PokemonEntity) => {
    const filter = pokemons.filter((item: any) => item.name !== pokemon.name);
    localStorage.setItem("@pokemons", JSON.stringify(filter));
    setPokemons(filter);
    showToast(`${pokemon.name} removido com sucesso!`, "success");
  };

  useEffect(() => {
    pokemonList();
    setPokemonLocalStorage();
  }, []);

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

  const pokemonList = () => {
    if (listPokemon?.results) {
      const list = listPokemon?.results.map((pokemon) => {
        return { ...pokemon, value: 70 };
      });
      return setListPokemons(list);
    }
  };

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
    <Styled.Container>
      <Head>
        <title>Agendar consulta | Centro Pokémon</title>
      </Head>
      <Header />
      <SectionPage
        fromPage="Home"
        currentPage="Agendar consulta"
        title="Agendar consulta"
        subTitle="Recupere seus pokémons em 5 segundos"
      />
      <Styled.MainContainer>
        <Styled.Title>
          Preencha o formulário abaixo para agendar sua consulta
        </Styled.Title>
        <Styled.FormContainer>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Styled.Row>
              <Styled.Label error={errors.nome}>
                Nome
                <Styled.Input
                  error={errors.nome}
                  {...register("nome")}
                  placeholder="Digite seu nome"
                />
                {errors?.nome && (
                  <Styled.ErrorMessage>
                    {errors.nome?.message}
                  </Styled.ErrorMessage>
                )}
              </Styled.Label>
              <Styled.Label error={errors.sobrenome}>
                Sobrenome
                <Styled.Input
                  error={errors.sobrenome}
                  {...register("sobrenome")}
                  placeholder="Digite seu sobrenome"
                />
                {errors?.sobrenome && (
                  <Styled.ErrorMessage>
                    {errors.sobrenome?.message}
                  </Styled.ErrorMessage>
                )}
              </Styled.Label>
            </Styled.Row>

            <Styled.Row>
              <Styled.Label error={errors.regiao}>
                Região:
                <Controller
                  control={control}
                  name="regiao"
                  render={({ field }) => (
                    <Styled.Select {...field} width={265} error={errors.regiao}>
                      <option value="" disabled selected hidden>
                        Selecione
                      </option>
                      <option value="regiao1">Kanto</option>
                    </Styled.Select>
                  )}
                />
                {errors?.regiao && (
                  <Styled.ErrorMessage>
                    {errors.regiao?.message}
                  </Styled.ErrorMessage>
                )}
              </Styled.Label>

              <Styled.Label error={errors.cidade}>
                Cidade:
                <Controller
                  control={control}
                  name="cidade"
                  render={({ field }) => (
                    <Styled.Select {...field} width={265} error={errors.cidade}>
                      <option value="" disabled selected hidden>
                        Selecione
                      </option>
                      <option value="pewterCity">Pewter City</option>
                      <option value="Pallet Town">Pallet Town</option>
                      <option value="veridianCity">Veridian City</option>
                    </Styled.Select>
                  )}
                />
                {errors?.cidade && (
                  <Styled.ErrorMessage>
                    {errors.cidade?.message}
                  </Styled.ErrorMessage>
                )}
              </Styled.Label>
            </Styled.Row>
            <Styled.Column>
              <Styled.Span style={{ marginTop: 50 }}>
                Cadastre seu time
              </Styled.Span>
              <Styled.SubSpan style={{ marginBottom: 30 }}>
                Atendemos até 06 pokémons por vez
              </Styled.SubSpan>
            </Styled.Column>
            <Styled.Column>
              {pokemons.map((item: any, index: any) => (
                <>
                  <Styled.Row key={index}>
                    <Styled.Span>Pokémon {index + 1}</Styled.Span>

                    <Styled.PokemonContainer style={{ marginRight: 13 }}>
                      <Styled.CloseButton
                        onClick={() => removePokemon(item)}
                        style={{ marginLeft: "95%" }}
                      >
                        X
                      </Styled.CloseButton>
                      <Styled.PokemonName>{item.name}</Styled.PokemonName>
                    </Styled.PokemonContainer>
                  </Styled.Row>
                </>
              ))}
            </Styled.Column>
            <Styled.Row>
              <Styled.NovoPokemonButton
                onClick={() =>
                  pokemons.length === 6
                    ? showToast("Máximo de 06 pokémons por consulta.", "error")
                    : toggle()
                }
              >
                Adicionar novo pokémon ao time +
              </Styled.NovoPokemonButton>
            </Styled.Row>
            <Styled.Row>
              <Styled.Label error={errors.dataAtendimento}>
                Data para Atendimento:
                <Controller
                  control={control}
                  name="dataAtendimento"
                  render={({ field }) => (
                    <Styled.Select
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
                    </Styled.Select>
                  )}
                />
                {errors?.dataAtendimento && (
                  <Styled.ErrorMessage>
                    {errors.dataAtendimento?.message}
                  </Styled.ErrorMessage>
                )}
              </Styled.Label>

              <Styled.Label error={errors.horaAtendimento}>
                Horário de Atendimento:
                <Controller
                  control={control}
                  name="horaAtendimento"
                  render={({ field }) => (
                    <Styled.Select
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
                    </Styled.Select>
                  )}
                />
                {errors?.horaAtendimento && (
                  <Styled.ErrorMessage>
                    {errors.horaAtendimento?.message}
                  </Styled.ErrorMessage>
                )}
              </Styled.Label>
            </Styled.Row>
            <Styled.Divider />
            <Styled.Row>
              <Styled.Info>Número de pokémons a serem atendidos:</Styled.Info>
              <Styled.Info>{`0${pokemons.length}`}</Styled.Info>
            </Styled.Row>
            <Styled.Row>
              <Styled.Info>Atendimento unitário por pokémon: </Styled.Info>
              <Styled.Info>R$ 70,00</Styled.Info>
            </Styled.Row>
            <Styled.Row>
              <Styled.Info>Subtotal:</Styled.Info>
              <Styled.Info>{formatToBrl(total)}</Styled.Info>
            </Styled.Row>
            <Styled.Row>
              <Styled.Info>Taxa geracional*: </Styled.Info>
              <Styled.Info>R$ 0,00</Styled.Info>
            </Styled.Row>
            <Styled.Row>
              <Styled.SubInfo>
                *adicionamos uma taxa de 3%, multiplicado pelo número da geração
                mais alta do time, com limite de até 30%
              </Styled.SubInfo>
            </Styled.Row>
            <Styled.Row>
              <Styled.Total>Valor Total: {formatToBrl(total)}</Styled.Total>
              <Styled.Button type="submit">Concluir agendamento</Styled.Button>
            </Styled.Row>
          </form>
        </Styled.FormContainer>
      </Styled.MainContainer>
      <Modal isOpen={openModal} onClose={toggle} title="Adicione seu pokemon">
        <Styled.SelectPokemon
          onScroll={handleScroll}
          style={{ marginRight: 13 }}
        >
          <option value="" disabled selected hidden>
            Selecione
          </option>
          {listPokemons.map((pokemon: any) => (
            <>
              <Styled.StyledOption
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
              </Styled.StyledOption>
            </>
          ))}
        </Styled.SelectPokemon>
        <Styled.Button
          onClick={() => {
            pokemons.length === 6
              ? showToast("Máximo de 06 pokémons por consulta.", "error")
              : selectPokemon === null
              ? {}
              : addPokemon(selectPokemon);
          }}
        >
          Adicionar
        </Styled.Button>
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
    </Styled.Container>
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
