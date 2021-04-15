const express = require('express');
const app = express();
app.use(express.static('public'))

const nunjucks = require('nunjucks');
nunjucks.configure('templates', { autoescape: true, express: app });

let host = 'localhost';
let port = 3002;

let serverStart = new Date(); // Server start Date time
let yourName = "Adam Boyd";
let netId = "xv3543";


app.get('/', function(req, res) {
    res.render('index.njk', { scriptFile: "index.js" });
});

app.get('/login', function(req, res) {
    res.render('login.njk', { scriptFile: "login.js" });
});

app.get('/membership', function(req, res) {
    res.render('membership.njk', { scriptFile: "signup.js" });
});

app.get('/activities', function(req, res) {
    res.render('activities.njk', { scriptFile: "activities.js" });
});

app.get('/uptime', function(req, res) {
    let curDate = new Date();
    let data = { startDate: serverStart, currentDate: curDate };
    res.render('uptime.njk', data);
})

app.listen(port, host, function() {
    console.log(`deployTest.js app listening on IPv4: ${host}:${port}`);
});