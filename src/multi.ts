import { fork } from 'child_process';
import path from 'path';
import { cpus } from 'os';
import { getAllFilesSync } from './util';
import env from './env';
import type { encrypt, PromiseType } from './util';

const files = getAllFilesSync(env.ORIGIN_DIR);
const total = files.length;
const MAX_CONCURRENT = cpus().length;
let processedCount = 0;

console.log(`共 ${total} 个文件，最大并发数: ${MAX_CONCURRENT}`);

function runNext() {
  if (files.length === 0) return;
  const file = files.shift();  // 取出一个文件

  // 启动子进程
  const child = fork(path.join(__dirname, 'worker.ts'), [file]);

  child.on('message', (res: PromiseType<ReturnType<typeof encrypt>>) => {
    processedCount++;
      console.log(`[${processedCount}:${total}] ${res.type}: ${res.input}`);
    if (processedCount === total) {
      console.log('All done!');
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