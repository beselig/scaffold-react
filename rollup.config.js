import React from "react";
import ReactDOM from "react-dom";
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import replace from "@rollup/plugin-replace";
import serve from "rollup-plugin-serve";

import pkg from "./package.json";

const extensions = [".ts, .tsx"];
const plugins = [
  resolve(),
  commonjs({
    namedExports: {
      react: Object.keys(React),
      "react-dom": Object.keys(ReactDOM),
    },
  }),
  babel({
    exclude: "node_modules/**",
    extensions,
  }),
  typescript(),
  serve("public"),
  replace({
    "process.env.NODE_ENV": process.env.NODE_ENV,
  }),
];

export default {
  input: "src/index.tsx",
  plugins,
  output: [
    {
      file: pkg.main,
      format: "cjs",
      name: "ReactApp",
      exports: "named",
      sourcemap: true,
    },
  ],
};
