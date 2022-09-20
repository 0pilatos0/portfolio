import { render, screen } from "@testing-library/react";
import App from "../App";

test("rendering homepage", () => {
  render(<App />);
  const linkElement = screen.getByText(/Paul van der Lei/i);
  expect(linkElement).toBeInTheDocument();
});
