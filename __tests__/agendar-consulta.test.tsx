import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import AgendarConsulta from "../src/pages/agendar-consulta";
import { QueryClient, QueryClientProvider } from "react-query";
import "next/router";

const queryClient = new QueryClient();
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "",
      query: "",
      asPath: "",
    };
  },
}));

describe("AgendarConsulta Component", () => {
  it("renders the component", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AgendarConsulta
          pokemonList={{
            count: 20,
            next: "",
            previous: "",
            results: [
              {
                name: "Bulbasaur",
              },
            ],
          }}
          dateSchedulingList={[]}
        />
      </QueryClientProvider>
    );
    expect(
      screen.getByText("Preencha o formulário abaixo para agendar sua consulta")
    ).toBeInTheDocument();
  });

  it("adds a pokemon to the team", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <AgendarConsulta
          pokemonList={{
            count: 20,
            next: "",
            previous: "",
            results: [
              {
                name: "Bulbasaur",
              },
            ],
          }}
          dateSchedulingList={[]}
        />
      </QueryClientProvider>
    );

    fireEvent.input(screen.getByPlaceholderText("Digite seu nome"), {
      target: { value: "John" },
    });

    fireEvent.input(screen.getByPlaceholderText("Digite seu sobrenome"), {
      target: { value: "Doe" },
    });

    fireEvent.change(screen.getByLabelText("Região:"), {
      target: { value: "Kanto" },
    });
    fireEvent.change(screen.getByLabelText("Cidade:"), {
      target: { value: "Pewter City" },
    });

    fireEvent.click(screen.getByText("Adicionar novo pokémon ao time +"));

    await waitFor(() => {
      expect(screen.getByText("Adicione seu pokemon")).toBeInTheDocument();
    });

    await waitFor(() => {
      const bulbasaurElements = screen.queryAllByText("Bulbasaur");
      expect(bulbasaurElements.length).toBeGreaterThan(0);
    });

    fireEvent.click(screen.getByText("Adicionar"));

    await waitFor(() => {
      const bulbasaurElements = screen.queryAllByText("Bulbasaur");
      expect(bulbasaurElements.length).toBeGreaterThan(0);
    });
  });
});
