import React from "react";
import ReactDOM, { unmountComponentAtNode } from "react-dom";
import App from './App';
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


it("Nav active : true", () => {
  let app = ReactDOM.render(<App />, container);
  app.state.width = 0;
  app.state.height = 0;
  app.navActive(true);
  expect(app.state.margin.marginTop).toBe('0');
  app.state.width = 370;
  app.state.height = 650;
  app.navActive(true);
  expect(app.state.margin.marginTop).toBe('0');
  ReactDOM.unmountComponentAtNode(container);
});
it("Nav active : false", () => {
  let app = ReactDOM.render(<App />, container);
  app.state.width = 0;
  app.state.height = 0;
  app.navActive(false);
  expect(app.state.margin.marginTop).toBe(0);
  app.state.width = 370;
  app.state.height = 650;
  app.navActive(false);
  expect(app.state.margin.marginTop).toBe('10em');
  ReactDOM.unmountComponentAtNode(container);
});