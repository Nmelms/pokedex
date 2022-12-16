import { render, screen } from "@testing-library/react";
import PokemonList from "./PokemonList";

test("renders a backButton", async () => {
  render(<PokemonList />);
  const backArrow = await screen.findByRole("button", { name: /back/i });
  expect(backArrow).toBeInTheDocument();
});

test("renders a hamburgerMenu", async () => {
  render(<PokemonList />);
  const menu = screen.queryByRole("button", { name: /menu/i });
  expect(menu).toBeInTheDocument();
});

test("renders bulbasuar", async () => {
  render(<PokemonList />);
  const menu = await screen.findByText("Bulbsaur");
  expect(menu).toBeInTheDocument();
});
