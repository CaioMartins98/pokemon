import { render } from "@testing-library/react";
import Home from "../src/pages/home/index.page";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));
describe("Home Component", () => {
  it("renders without crashing", () => {
    render(<Home />);
  });

  it("renders the description correctly", () => {
    const { getByText } = render(<Home />);
    const descriptionElement = getByText(
      "Cuidamos bem do seu pokémon, para ele cuidar bem de você"
    );
    expect(descriptionElement).toBeInTheDocument();
  });
});
