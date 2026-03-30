import env from "./env";
import { encrypt, getAllFilesSync } from "./util";

const files = getAllFilesSync(env.ORIGIN_DIR);

const promises = files.map(async file => {
  await encrypt(file);
  console.log(`Encrypt success: ${file}`);
  return;
});
Promise.all(promises).then(() => {
  console.log('All files processed successfully.');
})