const axios = require("axios");
const fs = require("fs");

const [, , ...args] = process.argv;
let path = [, , ...args][2];
let URLS_DATA = [];
let data;

try {
  data = fs.readFileSync(path, "utf8", (err, data) => {
    if (err) {
      process.exit(1);
    } else {
      return data;
    }
  });
} catch (error) {
  console.log("Cannot read the original file!");
  return;
}

URLS_DATA = data.split("\n");
let axios_data = [];

async function loadURLS() {
  for (let i = 0; i < URLS_DATA.length; i++) {
    try {
      axios_data.push([
        await axios.all([axios.get(URLS_DATA[i])]),
        URLS_DATA[i],
      ]);
    } catch (error) {
      axios_data.push(["Error", URLS_DATA[i]]);
    }
  }

  axios_data.forEach((ele) => {
    if (ele[0] === "Error") {
      console.log(`Couldn't download ${ele[1]}`);
    } else {
      store_name = ele[1].split("/");
      storeFileData(ele[0][0].data, store_name[2]);
    }
  });
}

function storeFileData(data, storePath) {
  fs.appendFile(`./download-files/${storePath}`, data, "utf8", (err) => {
    if (err) {
      process.exit(1);
    } else {
      console.log(`Wrote to ${storePath}`);
    }
  });
}

loadURLS();
