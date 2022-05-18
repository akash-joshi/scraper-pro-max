const { JSDOM } = require("jsdom")
const { Readability } = require("@mozilla/readability")
const axios = require("axios")
const fs = require('fs')

const links = require("./links.json")

const main = async () => {
  for (const link of links) {
    try {
      console.log(`Processing ${link}`);

      const linkHtml = (await axios.get(link)).data;

      const doc = new JSDOM(linkHtml, {
        url: link,
      });

      const reader = new Readability(doc.window.document);
      const article = reader.parse().content;

      fs.appendFileSync('./output.html', article);

      console.log(`Processed ${link}`)
    } catch (error) {
      console.error(error);
      console.log(`Error at ${link}`)
    }
  }
}

main();