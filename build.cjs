const { build } = require("esbuild")

const options = {
  bundle: true,
  entryPoints: ["src/index.ts"],
  outdir: "dist",
  platform: "neutral",
  packages: "external",
}

build(options).catch(() => process.exit(1))
