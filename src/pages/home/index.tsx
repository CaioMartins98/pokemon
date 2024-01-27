import Header from "../../components/Header/header.component";
import Head from "next/head";
import { Container, Description } from "./styles";
import Footer from "../../components/Footer/footer.component";

export default function Home() {
  return (
    <>
      <Head>
        <title>Início</title>
      </Head>
      <Header />
      <Container>
        <Description>
          Cuidamos bem do seu pokémon, para ele cuidar bem de você
        </Description>
      </Container>
      <Footer/>
    </>
  );
}
