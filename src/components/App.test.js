import React from "react";
import ReactDOM from "react-dom";
import renderer from "react-test-renderer";
import App from "./App";
import { add } from "./App";

const myApp = new App();

it("renders a snapshot", () => {
  const tree = renderer.create(<App />).toJSON();
  expect(tree).toMatchSnapshot();
});

it("sum two numbers", () => {
  const component = renderer.create(<App />).getInstance();
  const tree = component.add(2, 3);
  expect(tree).toBe(5);
});

it("subtract two numbers", () => {
  const component = renderer.create(<App />).getInstance();
  const tree = component.subtract(5, 2);
  expect(tree).toBe(3);
});


it("multiply two numbers", () => {
  const component = renderer.create(<App />).getInstance();
  const tree = component.multiply(2, 4);
  expect(tree).toBe(8);
});

it("divide two numbers", () => {
  const component = renderer.create(<App />).getInstance();
  const tree = component.divide(8, 4);
  expect(tree).toBe(2);
});
