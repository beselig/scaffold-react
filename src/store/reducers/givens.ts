import { Reducer } from "redux";

export type Givens = { [id: string]: string };

const initialState: Givens = {
  r1c1: "1",
  r9c2: "9",
};

export const givens: Reducer = (state: Givens = initialState /*, action*/): typeof state => {
  return state;
};
