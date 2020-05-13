import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Cell } from "../Cell";
import { ApplicationState } from "../../store";
import { GivensState } from "../../store/reducers/givens";
import "./component.scss";
import { Box } from "./../Box/index";

const make = ({ givens }: SudokuProps) => {
	const [cells, setCells] = useState([]);

    useEffect(() => {
        setCells(prepareBoxes(givens));
	}, []);

    return <div className="board">{cells.map((item) => item)}</div>;
};

const prepareBoxes = (givens: GivensState) => {
    const boxes: Array<JSX.Element> = [];

    for (let i = 0; i < 9; i++) {
        const cellIds: Array<string> = [];

        for (let j = 0; j < 9; j++) {
            cellIds.push(createCellId({ row: i + 1, col: j + 1 }));
        }

        boxes.push(
            <Box id={`box-${i}`}>
                {cellIds.map((cellId) => (
                    <Cell
                        key={cellId}
                        id={cellId}
                        value={givens[cellId]}
                    />
                ))}
            </Box>,
        );
    }

    return boxes;
};

/**
 * creates ID with format `r<row>c<col>`
 */
const createCellId = ({ row, col }: { row: number; col: number }) =>
    `r${row}c${col}`;

const mapStateToProps = ({ givens }: ApplicationState) => ({
    givens,
});

export const Sudoku = connect(mapStateToProps)(make);
export type SudokuProps = {
    givens: GivensState;
};
