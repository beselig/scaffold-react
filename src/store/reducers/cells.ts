import { Reducer } from "redux";
import { isSetCellValueAction, SetValueActionPayload, CellId } from "../actions/cells";

/**
 * Reducer
 */

const initialState: CellsState = {
    r1c1: {
		id: "r1c1",
        value: "1",
        given: true,
    },
    r9c2: {
		id: "r9c2",
        value: "9",
        given: true,
    },
};

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
    if (!state[id].given) {
        state = {
            ...state,
            [id]: {
                ...state[id],
                value,
            },
        };
	}

    return state;
};

/**
 * Types
 */

export type CellsState = {
    [id in CellId]: CellState;
};

export type CellState = {
    id: CellId;
    value: string;
    invalid?: boolean;
    selected?: boolean;
    pencilmarks?: string[];
    given?: boolean;
};
