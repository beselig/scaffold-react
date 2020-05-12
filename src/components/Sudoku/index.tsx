import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Cell } from "../Cell";
import { ApplicationState } from "../../store";
import { Givens } from "../../store/reducers/givens";
import "./component.css";
import { Box } from "./../Box/index";

const make = ({ givens }: SudokuProps) => {
    const [cells, setCells] = useState([]);

    useEffect(() => {
        setCells(prepareBoxes(givens));
    }, []);

    // return <div className="Sudoku">{prepareBoxes()}</div>;

    return (
        <div className="Sudoku">
            <div className="board">{cells.map((item) => item)}</div>
        </div>
    );
};

const prepareBoxes = (givens: Givens) => {
    const boxes: Array<JSX.Element> = [];
    let cellcount = 0;

    for (let i = 0; i < 9; ++i) {
        const cellIds = [];

        for (let j = 0; j < 9; ++j) {
            cellIds.push(`r${i + 1}c${j + 1}`);
        }

        boxes.push(
            <Box id={`box-${i}`}>
                {cellIds.map((cellId) => (
                    <Cell
                        key={cellId}
                        id={cellId}
                        value={`box-${i}--${givens[cellId] || "FOO"}`}
                    />
                ))}
            </Box>,
        );
    }

    return boxes;
};

const mapStateToProps = ({ givens }: ApplicationState) => ({
    givens,
});

export const Sudoku = connect(mapStateToProps)(make);
export type SudokuProps = {
    givens: Givens;
};
