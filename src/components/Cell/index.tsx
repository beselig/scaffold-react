import React from "react";
import "./component.scss";
import { CellState } from "../../store/reducers/cells";

type CellProps = CellState;

export const Cell = ({ id, value, pencilmarks }: CellProps): JSX.Element => (
    <div className="cell" id={id}>
        {value ? (
            <p className="value">{value}</p>
        ) : pencilmarks ? (
            <div className="pencilmarks">
                {pencilmarks.map((str) => (
                    <span>
                        <p>{str}</p>
                    </span>
                ))}
            </div>
        ) : null}
    </div>
);
