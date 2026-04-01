import { encrypt } from "./util";

const filePath = process.argv[2];

try {
  encrypt(filePath).then(res => {
    process.send(res);
    process.exit(0);
  })
} catch (err) {
  console.error(err);
  process.exit(1);
}