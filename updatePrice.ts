import { createReadStream, createWriteStream } from "fs";
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
  const records = await processFile();
  const recordsJSON = JSON.stringify(records);
  await writeFile("menu.json", recordsJSON);
  console.log(recordsJSON);
})();
