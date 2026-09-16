function parseArgs() {
  const args = process.argv.slice(2);
  const result: Record<string, string> = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('-') && i + 1 < args.length && !args[i + 1].startsWith('-')) {
      result[args[i]] = args[i + 1];
      i++;
    }
  }
  return result;
}

const args = parseArgs();

export default {
  ORIGIN_DIR: args['-o'] || 'code',
  OUTPUT_DIR: args['-p'] || 'dist',
}
