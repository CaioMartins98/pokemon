import Header from "../../components/Header/header.component";
import Head from "next/head";
import Styled from "./styles";
import Footer from "../../components/Footer/footer.component";
import React from 'react'
export default function Home() {
  return (
    <>
      <Head>
        <title>Início | Centro Pokémon</title>
      </Head>
      <Header />
      <Styled.Container>
        <Styled.Description>
          Cuidamos bem do seu pokémon, para ele cuidar bem de você
        </Styled.Description>
      </Styled.Container>
      <Footer/>
    </>
  );
}
