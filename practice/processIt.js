const fs = require('fs');
const readline = require('readline');

let file = 'about.md';
let lines = 0;
let rl = readline.createInterface({
    input: fs.createReadStream(file),
    output: process.stdout,
    terminal: false
});
rl.on('line', function(line) {
    lines++;
});
rl.on('close', function() {
    console.log(`The number of lines in about.md is ${lines}`);
});

let events = require('./eventData.json');
console.log("Data from eventData.json:");
events.nonClubEvents.forEach(element => {
    console.log(`${element.title}:\n ${element.date} - ${element.location}\n`);
});