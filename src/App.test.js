import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders text", () => {
  const { getByText } = render(<App />);
  const text = getByText(/Hello, Interviewers!/i);
  expect(text).toBeInTheDocument();
});

test("should format properly with 6 numbers", () => {
  const { getByTestId, debug } = render(<App />);
  const phoneNumber = getByTestId("phoneNumber");
  fireEvent.change(phoneNumber, { target: { value: "123456" } });
  expect(phoneNumber.value).toEqual('(123) 456');
});

test("should format properly with full numbers", () => {
  const { getByTestId, debug } = render(<App />);
  const phoneNumber = getByTestId("phoneNumber");
  fireEvent.change(phoneNumber, { target: { value: "1234567890" } });
  expect(phoneNumber.value).toEqual('(123) 456-7890');
});
