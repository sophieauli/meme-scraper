import fs from 'node:fs';

import { load } from 'cheerio';
import fetch from 'node-fetch';

const url = 'https://memegen-link-examples-upleveled.netlify.app/'

const response = await fetch(url);
const body = await response.text();

let y = load(body);

const imagesUrls = [];
    for (let count = 0; count < 10; count++) {
        // imagesUrls.push(y('div > a > img')[i].attribs.src);
        const storeURls = y('div > a > img')[count].attribs.src;
        console.log(storeURls);
        const response = await fetch(storeURls);
        const imageData = await response.arrayBuffer();
        console.log(imageData);
        const buffer = Buffer.from(imageData);        
        fs.mkdir("memes", () => {});
        fs.writeFile(`memes/meme0${count + 1}.jpg`, buffer, () => {});}
  
    // console.log(Object.keys(imagesUrls[1]));
    // console.log(imagesUrls);
    // left to do: make sure that the files start at 1 and end at 10; create one single folder for all files