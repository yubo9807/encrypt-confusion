# JS 代码混淆加密工具

- 异步加密 `npm run async`
- 多线程加密 `npm run multi`

## 相关配置

入口文件、输出文件 `src/env.ts`
 
## 运行参数说明

- 可通过命令行参数覆盖默认目录，参数格式为短选项及其值（在 `npm run` 后加 `--` 传递）：

- `-o <dir>`: 源代码目录，默认 `code`
- `-p <dir>`: 输出目录，默认 `dist`

示例：

```bash
# 使用默认配置
npm run multi

# 指定源目录和输出目录
npm run multi -- -o code -p dist
```
