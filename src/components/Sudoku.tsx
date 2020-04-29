import React, { useState, useEffect } from "react";
import { Cell } from './Cell';

type Givens = { [id: string]: string };

const initialGivens: Givens = {
  r1c1: "1",
  r9c2: "9",
};

export const Sudoku = () => {
  const [givens] = useState(initialGivens);
  const [cells, setCells] = useState([]);

  useEffect(() => {
    setCells(prepareCells(givens));
  }, [givens]);

  return <div>{cells.map((item) => item)}</div>;
};

const prepareCells = (givens: Givens) => {
  const elements: Array<JSX.Element> = [];
  let cellcount = 0;
  let row = 1;
  let col = 1;

  while (cellcount < 81) { // gives 81 Cells
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
