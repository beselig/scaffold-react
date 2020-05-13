import { Reducer } from "redux";
import { isSetCellValueAction, SetValueActionPayload, CellId } from "../actions/cells";

/**
 * Reducer
 */

const initialState: CellsState = {};

export const cells: Reducer = (
    state: CellsState = initialState,
    action,
): typeof state => {
    if (isSetCellValueAction(action)) {
        return setCellValue(state, action.payload);
    }

    return state;
};

const setCellValue = (state: CellsState, { id, value }: SetValueActionPayload) => {
    state = {
        ...state,
        [id]: {
            ...state[id],
            value,
        },
    };
    return state;
};

/**
 * Types
 */

export type CellsState = {
    [id in CellId]: CellState;
};

export type CellState = {
    id: string;
    value: string;
    invalid?: boolean;
    selected?: boolean;
    pencilmarks?: string[];
};
