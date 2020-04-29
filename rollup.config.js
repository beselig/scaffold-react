import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";

import pkg from "./package.json";

const extensions = [".ts, .tsx"];
const plugins = [
  resolve(),
  commonjs(),
  babel({
    exclude: "node_modules/**",
    extensions,
  }),
  typescript(),
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
