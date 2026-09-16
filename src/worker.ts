import { encrypt } from "./util";

const filePath = process.argv[process.argv.length - 1];

encrypt(filePath)
  .then(res => {
    if (typeof process.send === 'function') process.send(res);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });