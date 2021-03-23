const fs = require('fs');
const nunjucks = require('nunjucks');
const matter = require('gray-matter');
let commonmark = require('commonmark');

let reader = new commonmark.Parser();
let writer = new commonmark.HtmlRenderer();

let srcPrefix = __dirname + "/src";
let bldPrefix = __dirname + "/build";
let allFiles = fs.readdirSync(srcPrefix);

nunjucks.configure('views', { autoescape: true });

console.log("Processing the src directory: ");
allFiles.forEach(function(srcName) {
    console.log('Reading ' + srcName);
    let fname = srcPrefix + '/' + srcName; // full name of the file to be read
    let fdata = fs.readFileSync(fname, 'utf8');

    let readFile = matter(fdata);

    let parsed = reader.parse(readFile.content);
    let result = writer.render(parsed);

    let outString = nunjucks.render('base.njk', { mainContent: result, title: readFile.data.title, author: readFile.data.author, description: readFile.data.description, header: readFile.data.header, scriptFile: readFile.data.scriptFile });

    // create the full name of the file to be written change extension to .html
    let outName = (bldPrefix + '/' + srcName).replace(".md", ".html");
    fs.writeFileSync(outName, outString);
    console.log(`Wrote file: ${outName}`);
});