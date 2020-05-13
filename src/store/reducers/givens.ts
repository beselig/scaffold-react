import { Reducer } from "redux";
import { CellId } from "../actions/cells";

export type GivensState = { [id in CellId]: string };

const initialState: GivensState = {
  r1c1: "1",
  r9c2: "9",
};

export const givens: Reducer = (state: GivensState = initialState /*, action*/): typeof state => {
  return state;
};
