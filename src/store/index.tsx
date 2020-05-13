import { createStore, combineReducers } from "redux";
import { givens, GivensState } from "./reducers/givens";
import { cells, CellsState } from "./reducers/cells";

export type ApplicationState = {
    cells: CellsState;
    givens: GivensState;
};

export const store = createStore(
    combineReducers({
        cells,
        givens,
    }),
);

export { selectCellValue } from './selectors'