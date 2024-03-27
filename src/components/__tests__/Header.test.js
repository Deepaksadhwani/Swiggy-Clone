import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

test("should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "login" });
  // const loginButton = screen.getByText("login");
  expect(loginButton).toBeInTheDocument();
});

test("should render Header component with cart item 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("Cart-(0items)");
  // const loginButton = screen.getByText("login");
  expect(cartItems).toBeInTheDocument();
});

test("should render Header component with cart item ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItems = screen.getByText(/Cart/);
    // const loginButton = screen.getByText("login");
    expect(cartItems).toBeInTheDocument();
  });


test("should change login button to logout on click", () => {
render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header />
    </Provider>
    </BrowserRouter>
);

const loginButton = screen.getByRole("button", { name: "login" });

fireEvent.click(loginButton);

const logoutButton = screen.getByRole("button", { name: "logout" });

expect(logoutButton).toBeInTheDocument();
});