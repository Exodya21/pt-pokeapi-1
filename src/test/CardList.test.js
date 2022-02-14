import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import CardList from '../components/CardList.js';

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

it("Renderizado del Titulo :", () => {
  act(() => {
    render(<CardList />, containerTest);
  });
  // expect(containerTest.textContent).toBe("Edit src/App.js and save to reload");
  expect(containerTest.querySelector("h1").textContent).toBe("Pokimon");
});