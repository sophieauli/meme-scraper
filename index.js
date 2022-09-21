import fs from 'node:fs';
import { load } from 'cheerio';
import fetch from 'node-fetch';

const url = 'https://memegen-link-examples-upleveled.netlify.app/';

const response = await fetch(url);
const body = await response.text();

const data = load(body);

for (let count = 0; count < 10; count++) {
  const storeURls = data('div > a > img')[count].attribs.src;
  const response2 = await fetch(storeURls);
  const imageData = await response2.arrayBuffer();
  console.log(imageData);
  const buffer = Buffer.from(imageData);
  fs.mkdir('memes', () => {});
  fs.writeFile(`memes/0${count + 1}.jpg`, buffer, () => {});
}
