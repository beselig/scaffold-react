import { Action } from "redux";

const SET_CELL_VALUE = "cell/value/set";

/**
 * Action creators
 */

export const setValue = ({ id, value }: SetValueActionConfig): SetValueAction => ({
    type: SET_CELL_VALUE,
    payload: { id, value },
});

/**
 * types
 */
export type CellId = string;

type SetValueAction = {
    type: typeof SET_CELL_VALUE;
    payload: SetValueActionPayload;
};
export type SetValueActionPayload = { id: CellId; value: string };
type SetValueActionConfig = SetValueActionPayload;


/**
 * Type guards
 */
export const isSetCellValueAction = (action: Action): action is SetValueAction =>
    action.type === SET_CELL_VALUE;
