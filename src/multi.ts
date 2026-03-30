import { fork } from 'child_process';
import path from 'path';
import { cpus } from 'os';
import { getAllFilesSync } from './util';
import env from './env';

const files = getAllFilesSync(env.ORIGIN_DIR);
const total = files.length;
const MAX_CONCURRENT = cpus().length;
let processedCount = 0;

console.log(`共有 ${total} 个文件，最大并发数: ${MAX_CONCURRENT}`);

function runNext() {
  if (files.length === 0) return;
  const file = files.shift();  // 取出一个文件

  // 启动子进程
  const child = fork(path.join(__dirname, 'worker.ts'), [file]);

  child.on('message', file => {
    processedCount++;
    console.log(`[${processedCount}:${total}] 加密完成：${file}`);
    if (processedCount === total) {
      console.log('所有文件处理完成！！！');
      return;
    }
    runNext(); // 当前进程结束，立即启动下一个
  });

  child.on('exit', (code) => {
    if (code !== 0) {
      console.error(`进程异常退出: ${file}`);
      runNext();
    }
  });
}

// 初始化启动 MAX_CONCURRENT 个进程
for (let i = 0; i < Math.min(MAX_CONCURRENT, files.length); i++) {
  runNext();
}