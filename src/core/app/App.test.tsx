import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";

import App from "./App";

test("renders learn react link", () => {
  const a = 1;
  const b = 1;
  const r = a + b;
  expect(r).toBe(2);
});
