import { defineConfig } from "vite";
import path from "path";
import { CRX_SERVICE_WORKER_OUTDIR } from "../buildScripts/build.config";

export default defineConfig({
  build: {
    // 输出目录
    outDir: CRX_SERVICE_WORKER_OUTDIR,
    lib: {
      entry: [path.resolve(process.cwd(), "src/serviceWorker/index.ts")],
      // background script不支持ES6，因此不用使用es模式，需要改为cjs模式
      formats: ["cjs"],
      // 设置生成文件的文件名
      fileName: () => {
        // 将文件后缀名强制定为js，否则会生成cjs的后缀名
        return "service_worker.js";
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
    },
  },
  plugins: [],
});
