import { readdirSync, writeFileSync, mkdirSync, readFileSync, copyFileSync, existsSync } from 'fs'
import { readFile } from 'fs/promises'
import path, { extname, join, relative } from 'path'
import JavaScriptObfuscator from 'javascript-obfuscator'
import env from './env'

/**
 * 递归获取目录下所有文件的绝对路径（同步）
 * @param dir - 起始目录路径
 */
export function getAllFilesSync(dir: string): string[] {
	const results: string[] = []
	const entries = readdirSync(dir, { withFileTypes: true })
	for (const entry of entries) {
		const fullPath = path.resolve(dir, entry.name)
		if (entry.isDirectory()) {
			results.push(...getAllFilesSync(fullPath))
		} else if (entry.isFile()) {
			results.push(fullPath)
		}
	}
	return results
}

/**
 * 同步写入文件，若目标目录不存在则递归创建目录
 * @param filePath - 目标文件路径
 * @param data - 要写入的内容
 * @param options - 写入选项（可选）
 */
export function writeFileEnsureSync(filePath: string, data: string | Buffer, options?: import('fs').WriteFileOptions): void {
	const dir = path.dirname(filePath);
	if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true })
	}
	writeFileSync(filePath, data, options)
}

/**
 * 同步复制文件，若目标目录不存在则递归创建目录
 * @param src 
 * @param dest 
 */
export function copyFileEnsureSync(src: string, dest: string): void {
  const dir = path.dirname(dest);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true })
  }
  copyFileSync(src, dest)
}

/**
 * 得到 Promise 返回类型
 */
export type PromiseType<T> = T extends Promise<infer K> ? K : T
// type Pt = PromiseType<Promise<string>>


enum FileHandleType {
  ENCRYPT = 'Encrypt',
  COPY    = 'Copy'
}
/**
 * 加密文件
 * @param file 
 * @returns 
 */
export function encrypt(file: string) {
  return new Promise<{ type: FileHandleType; input: string; output: string }>(resolve => {
    const relativePath = relative(env.ORIGIN_DIR, file);
    const outputPath = join(__dirname, '..', env.OUTPUT_DIR, relativePath);
  
    const ext = extname(file);
    if (ext === '.js') {
      readFile(file, 'utf-8').then(code => {
        const result = JavaScriptObfuscator.obfuscate(
          code,
          {
            vmObfuscation: true,
            compact: true,
            controlFlowFlattening: true,
            controlFlowFlatteningThreshold: 1,
            numbersToExpressions: true,
            simplify: true,
            stringArrayShuffle: true,
            splitStrings: true,
            stringArrayThreshold: 1
          }
        );
        const obfuscatedCode = result.getObfuscatedCode();
        writeFileEnsureSync(outputPath, obfuscatedCode);
        resolve({ type: FileHandleType.ENCRYPT, input: file, output: outputPath });
      })
      return;
    }

    copyFileEnsureSync(file, outputPath);
    resolve({ type: FileHandleType.COPY, input: file, output: outputPath });
  })
}