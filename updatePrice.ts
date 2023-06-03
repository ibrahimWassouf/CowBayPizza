import { createReadStream } from "fs";
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
  console.log(records);
})();
