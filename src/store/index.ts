import { createStore, combineReducers } from "redux";
import { cells, CellsState } from "./reducers/cells";

export type ApplicationState = {
    cells: CellsState;
};

export const store = createStore(
    combineReducers({
        cells,
    }),
);

export { selectCellValue } from './selectors'