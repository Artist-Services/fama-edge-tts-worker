import { defineConfig } from "cf/config";

export default defineConfig({
  worker: {
    name: "fama-edge-tts-worker",
    compatibilityDate: "2026-04-10",
    entrypoint: "src/index.ts",
    workersDev: true,
  },
});
