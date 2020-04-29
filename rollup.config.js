import pkg from "./package.json";

export default {
  input: "src/index.ts",
  // plugins:
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
