import { build } from "esbuild";

(async () => {
    await build({
        entryPoints: ["src/index.ts"],
        outfile: "build/index.js",
        bundle: true,
        format: "iife",
    });
})();
