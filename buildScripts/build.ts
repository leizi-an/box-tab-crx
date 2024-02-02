import * as fs from "fs";
import * as path from "path";
import { CRX_SERVICE_WORKER_OUTDIR, CRX_OUTDIR } from "./build.config";

// 拷贝目录文件
const copyDirectory = (srcDir, destDir) => {
  // 判断目标目录是否存在，不存在则创建
  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
  }

  fs.readdirSync(srcDir).forEach((file) => {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);

    if (fs.lstatSync(srcPath).isDirectory()) {
      // 递归复制子目录
      copyDirectory(srcPath, destPath);
    } else {
      // 复制文件
      fs.copyFileSync(srcPath, destPath);
    }
  });
};

// 删除目录及文件
const deleteDirectory = (dir) => {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach((file) => {
      const curPath = path.join(dir, file);
      if (fs.lstatSync(curPath).isDirectory()) {
        // 递归删除子目录
        deleteDirectory(curPath);
      } else {
        // 删除文件
        fs.unlinkSync(curPath);
      }
    });
    // 删除空目录
    fs.rmdirSync(dir);
  }
};

const serviceWorkerOutDir = path.resolve(
  process.cwd(),
  CRX_SERVICE_WORKER_OUTDIR
);
const outDir = path.resolve(process.cwd(), CRX_OUTDIR);
// 将复制源目录内的文件和目录全部复制到目标目录中
copyDirectory(serviceWorkerOutDir, outDir);
deleteDirectory(CRX_SERVICE_WORKER_OUTDIR);
