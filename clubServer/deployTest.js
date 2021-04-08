// deployTest.js
const express = require('express');
const app = express();
app.use(express.static('public'))

const nunjucks = require('nunjucks');
nunjucks.configure('templates', { autoescape: true, express: app });

let host = 'localhost';
let port = 3001;

let count = 0; // Visit count
let serverStart = new Date(); // Server start Date time
let yourName = "Adam Boyd";
let netId = "xv3543";


app.get('/', function(req, res) {
    count++;
    let data = { name: yourName, id: netId, visits: count };
    res.render('index.njk', data);
});

app.get('/uptime', function(req, res) {
    let curDate = new Date();
    let data = { startDate: serverStart, currentDate: curDate };
    res.render('uptime.njk', data);
})

app.listen(port, host, function() {
    console.log(`deployTest.js app listening on IPv4: ${host}:${port}`);
});