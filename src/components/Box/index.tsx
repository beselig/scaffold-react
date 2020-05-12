import React from "react";
import "./component.css";

type BoxProps = {
    id: string;
    children: Array<JSX.Element>;
};

export const Box = ({ id, children }: BoxProps): JSX.Element => {
    return (
        <div id={id} className="box">
            {children.map((childNode) => childNode)}
        </div>
    );
};
