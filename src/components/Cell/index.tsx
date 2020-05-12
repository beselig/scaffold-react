import React from "react";
import "./component.css";

type CellProps = {
  id: string;
  value: string;
  invalid?: boolean;
  selected?: boolean;
  pencilmarks?: string[];
};

export const Cell = ({ id, value, ...props }: CellProps): JSX.Element => (
  <div className="cell" id={id}>
    {value}
  </div>
);
