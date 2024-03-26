import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

test("should load contact us page component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

test("should load button contact  page component", () => {
  render(<Contact />);

  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("should load imput name in contact  page component", () => {
  render(<Contact />);

  const inputName = screen.getByPlaceholderText("name");
  expect(inputName).toBeInTheDocument();
});

test("should load 2 input boxes  in contact  page component", () => {
  render(<Contact />);
    //querying
    //whenever multiple elemet use getAll
  const inputBox = screen.getAllByRole("textbox");
  console.log(inputBox);
//   expect(inputBox.length).not.toBe(2);
    expect(inputBox.length).toBe(3);
});
