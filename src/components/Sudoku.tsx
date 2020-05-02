import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Cell } from "./Cell";
import { ApplicationState } from "../store";
import { Givens } from "../store/reducers/givens";

const make = ({ givens }: SudokuProps) => {
  const [cells, setCells] = useState([]);

  useEffect(() => {
    setCells(prepareCells(givens));
  });

  return <div>{cells.map((item) => item)}</div>;
};

const prepareCells = (givens: Givens) => {
  const elements: Array<JSX.Element> = [];
  let cellcount = 0;
  let row = 1;
  let col = 1;

  while (cellcount < 81) {
    // gives 81 Cells
    const id = `r${row}c${col++}`;

    elements.push(<Cell key={id} id={id} value={givens[id] || "empty"} />);

    if (col === 9) {
      ++row;
      col = 1;
    }

    ++cellcount;
  }

  return elements;
};

const mapStateToProps = ({ givens }: ApplicationState) => ({
  givens,
});

export const Sudoku = connect(mapStateToProps)(make);
export type SudokuProps = {
  givens: Givens;
};
