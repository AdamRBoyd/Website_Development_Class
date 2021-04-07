const fetch = require('node-fetch');

let site1 = 'https://www.disney.com';
let site2 = 'http://www.etsy.com';
let site3 = 'http://www.bbc.com';

let start = new Date();
let p1 = fetch(site1).then(res => {
    let time = (new Date() - start) / 1000;
    return console.log(`Disney status: ${res.statusCode}, time: ${time}`);
});

let p2 = fetch(site2).then(res => {
    let time = (new Date() - start) / 1000;
    return console.log(`Etsy status: ${res.statusCode}, time: ${time}`);
});

let p3 = fetch(site3).then(res => {
    let time = (new Date() - start) / 1000;
    return console.log(`BBC status: ${res.statusCode}, time: ${time}`);
});

console.log("Starting my web requests:");
Promise.all([p1, p2, p3]).then(x => {
    console.log("All Finished");
});