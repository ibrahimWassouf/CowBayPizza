import { createReadStream } from "fs";
import { writeFile } from "node:fs/promises";
import { parse } from "csv-parse";

const filePath = process.argv[2];

//grabbed from the csv.js.org docs
async function processFile() {
  const records = [];
  const parser = createReadStream(filePath).pipe(parse());
  for await (const record of parser) {
    records.push(record);
  }
  return records;
}

(async () => {
  const menu2DArray = await processFile();
  const objectMan = {};

  menu2DArray.forEach((array) => {
    const key = array[0];
    const value = {
      title: array[1],
      small: array[2],
      medium: array[3],
      large: array[4],
      xLarge: array[5],
    };
    objectMan[key] = value;
  });
  const recordsJSON = JSON.stringify(objectMan);
  await writeFile("menu.json", recordsJSON);
  console.log(recordsJSON);
})();
