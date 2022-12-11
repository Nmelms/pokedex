import { render, screen } from "@testing-library/react";
import Pokemon from "./Pokemon";

test("renders a backButton", async () => {
  render(<Pokemon />);
  const backArrow = await screen.findByRole("button", { name: /back/i });
  expect(backArrow).toBeInTheDocument();
});

test("renders a hamburgerMenu", async () => {
  render(<Pokemon />);
  const menu = screen.queryByRole("button", { name: /menu/i });
  expect(menu).toBeInTheDocument();
});

test("renders bulbasuar", async () => {
  render(<Pokemon />);
  const menu = await screen.findByText("bulbasuar");
  expect(menu).toBeInTheDocument();
});
