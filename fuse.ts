import { fusebox, sparky } from "fuse-box";

const bundlePath = 'dist/app.js'

class Context {
  runServer?: boolean;
  sourceMap?: boolean;
  getConfig = () =>
    fusebox({
      target: "browser",
      entry: "src/index.tsx",
      cache: false,
      devServer: this.runServer,
      webIndex: {
        template: "src/index.html",
      },
      sourceMap: this.sourceMap
    });
}

const { task } = sparky<Context>(Context);

task("default", async (ctx) => {
  ctx.runServer = true;
  ctx.sourceMap = true;
  const fuse = ctx.getConfig();
  await fuse.runDev({
    uglify: false,
    bundles: { distRoot: "public", app: bundlePath, vendor: "dist/vendor.js" },
  });
});

task("preview", async (ctx) => {
  ctx.runServer = true;
  ctx.sourceMap = true;
  const fuse = ctx.getConfig();
  await fuse.runProd({
    uglify: false,
    bundles: { distRoot: "public", app: bundlePath, vendor: "dist/vendor.js" },
  });
});

task("dist", async (ctx) => {
  ctx.runServer = false;
  const fuse = ctx.getConfig();
  await fuse.runProd({
    uglify: true,
    bundles: { distRoot: "public", app: bundlePath, vendor: "dist/vendor.js" },
  });
});
