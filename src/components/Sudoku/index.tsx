import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Cell } from "../Cell";
import { ApplicationState } from "../../store";
import "./component.scss";
import { Box } from "./../Box/index";
import { selectCellsValues, CellValues } from "../../store/selectors";

export type SudokuProps = {
    values: CellValues;
};

const make = ({ values }: SudokuProps): JSX.Element => {
    const [cells, setCells] = useState([]);

    useEffect(() => {
        setCells(prepareBoxes(values));
    }, []);

    return <div className="board">{cells.map((item) => item)}</div>;
};

const prepareBoxes = (values: CellValues) => {
    const boxes: Array<JSX.Element> = [];

    for (let i = 0; i < 9; i++) {
        const cellIds: Array<string> = [];

        for (let j = 0; j < 9; j++) {
            cellIds.push(createCellId({ row: i + 1, col: j + 1 }));
        }

        boxes.push(
            <Box id={`box-${i}`}>
                {cellIds.map((cellId) => (
                    <Cell key={cellId} id={cellId} value={values[cellId]} />
                ))}
            </Box>,
        );
    }

    return boxes;
};

/**
 * creates ID with format `r<row>c<col>`
 */
const createCellId = ({ row, col }: { row: number; col: number }) => `r${row}c${col}`;

const mapStateToProps = (state: ApplicationState) => ({
    values: selectCellsValues(state),
});

export const Sudoku = connect(mapStateToProps)(make);
