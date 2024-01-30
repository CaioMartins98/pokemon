import React from "react";
import { render, screen } from "@testing-library/react";
import QuemSomos from "../src/pages/quem-somos";
import 'next/router';

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
describe("QuemSomos Component", () => {
  it("renders without crashing", () => {
    render(<QuemSomos />);
    expect(screen.getByTestId("quem-somos-container")).toBeInTheDocument();
  });

  it("renders the correct title", () => {
    render(<QuemSomos />);
    const titleElements = screen.getAllByText("Quem Somos");
    expect(titleElements.length).toBeGreaterThan(0);
  });

  it("renders the correct subtitle", () => {
    render(<QuemSomos />);
    expect(
      screen.getByText("A maior rede de tratamento pokémon.")
    ).toBeInTheDocument();
  });

  it("renders description sections", () => {
    render(<QuemSomos />);
    expect(
      screen.getByText("Como funciona a cura de um pokémon?")
    ).toBeInTheDocument();
    expect(
      screen.getByText("Uma tradição de mais de 20 anos")
    ).toBeInTheDocument();
    expect(screen.getByText("O melhor para seu pokémon")).toBeInTheDocument();
    expect(screen.getByText("Alta Tecnologia")).toBeInTheDocument();
  });
});
