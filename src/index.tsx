import React from "react";
import ReactDOM from "react-dom";
import { Sudoku } from "./components/Sudoku";
import { Provider } from "react-redux";
import { store } from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <Sudoku />
  </Provider>,
  document.getElementById("app"),
);
