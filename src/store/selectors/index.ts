import { ApplicationState } from "..";
import { CellId } from "../actions/cells";
import { CellsState } from "../reducers/cells";
import { GivensState } from "../reducers/givens";

const selectGivens = (state: ApplicationState): GivensState => state.givens;
const selectCells = (state: ApplicationState): CellsState => state.cells;

export const selectCellValue = (id: CellId) => (
    state: ApplicationState,
): string | undefined => {
    const cells = selectCells(state);
    const givens = selectGivens(state);

    return givens[id] || cells[id]?.value;
};

export const selectCellsValues = (state: ApplicationState) => {
    const cells = selectCells(state);
    const givens = selectGivens(state);

	const givenIds = Object.keys(givens)
	
	givenIds.forEach((id) => (cells[id].value = givens[id]));

	return cells;
};
