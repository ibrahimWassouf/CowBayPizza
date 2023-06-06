import * as Mustache from "mustache";
import { writeFile, readFile } from "node:fs/promises";

async function renderHTML() {
  const data = await readFile("menu.json", { encoding: "utf8" });
  const jsonData = JSON.parse(data);
  console.log(jsonData);
  const template = await readFile("HTMLTemplate.mustache", {
    encoding: "utf8",
  });
  const rendered = Mustache.render(template, jsonData);
  await writeFile("renderedHTML.html", rendered);
  console.log(rendered);
}

(async () => {
  await renderHTML();
})();
