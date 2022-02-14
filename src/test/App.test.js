import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import App from '../components/App.js';

let containerTest = null;
beforeEach(() => {
  // configurar un elemento del DOM como objetivo del renderizado
  containerTest = document.createElement("div");
  document.body.appendChild(containerTest);
});

afterEach(() => {
  // limpieza al salir
  unmountComponentAtNode(containerTest);
  containerTest.remove();
  containerTest = null;
});

it("renderizado de texto", () => {
  act(() => {
    render(<App />, containerTest);
  });
  // expect(containerTest.textContent).toBe("Edit src/App.js and save to reload");
  expect(containerTest.querySelector("a").textContent).toBe("Learn React");
});