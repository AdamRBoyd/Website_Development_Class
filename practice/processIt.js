const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream('about.md');

let commonmark = require('commonmark');
let reader = new commonmark.Parser();
let writer = new commonmark.HtmlRenderer();

let lines = 0;
let rl = readline.createInterface({
    input: fileStream
});
rl.on('line', (line) => {
    lines++;
    let parsed = reader.parse(line);
    let result = writer.render(parsed);

    fs.appendFile('about.html', result, function(err) {
        if (err) throw err;
    });
});
rl.on('close', () => {
    console.log(`The number of lines in about.md is ${lines}`);
});

let events = require('./eventData.json');
const { Console } = require('console');
console.log("Data from eventData.json:");
events.nonClubEvents.forEach(element => {
    console.log(`${element.title}:\n ${element.date} - ${element.location}\n`);
});