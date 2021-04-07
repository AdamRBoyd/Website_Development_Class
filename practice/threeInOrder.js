const fetch = require('node-fetch');

let site1 = 'https://www.disney.com';
let site2 = 'http://www.etsy.com';
let site3 = 'http://www.bbc.com';

let start = new Date();
let myPromise = fetch(site1).then(res => {
    let time = (new Date() - start) / 1000;
    console.log(`Disney status: ${res.statusCode}, time: ${time}`);
    return fetch(site2);
}).then(res => {
    let time = (new Date() - start) / 1000;
    console.log(`Etsy status: ${res.statusCode}, time: ${time}`);
    return fetch(site3);
}).then(res => {
    let time = (new Date() - start) / 1000;
    console.log(`BBC status: ${res.statusCode}, time: ${time}`);
})
console.log("Starting my web requests:");