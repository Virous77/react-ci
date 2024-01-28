import App from "../src/App";
import { render } from "@testing-library/react";
import React from "react";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
  });

  it("renders App", () => {
    const { getByText } = render(<App />);
    expect(getByText("Hello AWS!")).toBeInTheDocument();
  });
});
