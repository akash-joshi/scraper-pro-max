# scraper-pro-max

Scrape a list of web-pages into a single HTML output.

## Technologies Used

- fetch
- jsdom
- @mozilla/readability

## How this works

0. Procure a list of links that you want to scrape. Either manually, or some simple `document.querySelectorAll` work.
1. Paste the list of `Array<string>` into `links.json`.
2. Once you run the program via `node .`, the code will:
  - visit each of the links in `links.json`
  - fetch their HTML data
  - parse it through JSDOM and Mozilla's readability library to get the relevant HTML
  - Append it to `output.html` to get a single summarized file.
3. You can do whatever you want with the output. Either bookmark it, rehost it, or send it to your Kindle via something like [Reabble](https://send.reabble.com).

I use this tool to generate summaries of any list of tools or blogposts that I like.
