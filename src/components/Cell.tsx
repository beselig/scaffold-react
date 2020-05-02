import React from "react";

type CellProps = {
  id: string;
  value: string;
  invalid?: boolean;
  selected?: boolean;
  pencilmarks?: string[];
};

export const Cell = ({ id, value, ...props }: CellProps): JSX.Element => (
  <div id={id} style={{ height: "50px", width: "50px", border: "1px solid black" }}>
    {value}
  </div>
);
