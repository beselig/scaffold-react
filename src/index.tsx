import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./store/index";
import { Sudoku } from "./components/Sudoku";
import "./reset.scss"

ReactDOM.render(
  <Provider store={store}>
    <Sudoku />
  </Provider>,
  document.getElementById("app"),
);
