import { ApplicationState } from "..";
import { CellId } from "../actions/cells";
import { CellsState } from "../reducers/cells";

const selectCells = (state: ApplicationState): CellsState => state.cells;

export const selectCellValue = (id: CellId) => (
    state: ApplicationState,
): string | undefined => {
    const cells = selectCells(state);

    return cells[id]?.value;
};

export const selectCellsValues = (state: ApplicationState): CellValues => {
    const cells = selectCells(state);

    return Object.keys(cells).reduce((acc, id) => ({ ...acc, [id]: cells[id].value }), {});
};

export type CellValues = { [id in CellId]: string };
