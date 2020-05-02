import { createStore, combineReducers } from "redux";
import { givens, Givens } from "./reducers/givens";

export type ApplicationState = {
	givens: Givens
}

export const store = createStore(combineReducers({givens}));
