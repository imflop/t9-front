import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./components/app/App";

test("renders logo with link", () => {
  render(<App />);
  const linkElement = screen.getByDisplayValue("t9:pm");
  expect(linkElement).toBeInTheDocument();
});
