const fs = require('fs');
const readline = require('readline');
const matter = require('gray-matter');
const nunjucks = require('nunjucks');

nunjucks.configure('views', { autoescape: true });

let commonmark = require('commonmark');
let reader = new commonmark.Parser();
let writer = new commonmark.HtmlRenderer();

const inFile = fs.readFileSync('about.md', 'utf8');
let readFile = matter(inFile);
console.log(readFile.data);

let parsed = reader.parse(readFile.content);
let result = writer.render(parsed);

let outString = nunjucks.render('base.njk', { mainContent: result, title: readFile.data.title, author: readFile.data.author, description: readFile.data.description });
fs.writeFileSync('./output/about.html', outString);
console.log("Wrote file");