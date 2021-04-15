const express = require('express');
const app = express();
app.use(express.static('public'))
let urlencodedParser = express.urlencoded({ extended: true });

const nunjucks = require('nunjucks');
nunjucks.configure('templates', { autoescape: true, express: app });

const events = require('./events.json');
const serverID = require("./severID.json");

let host = 'localhost';
let port = 3002;

let serverStart = new Date(); // Server start Date time
let memberApplications = [];

app.get('/', function(req, res) {
    res.render('index.njk', { scriptFile: "index.js" });
});

app.get('/login', function(req, res) {
    res.render('login.njk', { scriptFile: "login.js" });
});

app.get('/membership', function(req, res) {
    res.render('membership.njk', { scriptFile: "signup.js" });
});

app.post('/membershipSignup', urlencodedParser, function(req, res) {
    console.log(req.body);
    delete req.body["password"];
    console.log(`\n New Membership: \n`);
    console.log(req.body);
    memberApplications.push(req.body);
    console.log(`\n Current Member list: \n`);
    console.log(memberApplications);
    res.render('thanks.njk', { info: req.body });
});

app.get('/activities', function(req, res) {
    var info = { scriptFile: "activities.js", events: events };
    res.render('activities.njk', info);
});

app.get('/uptime', function(req, res) {
    let curDate = new Date();
    let data = { startDate: serverStart, currentDate: curDate };
    res.render('uptime.njk', data);
});

app.get('/serverId', function(req, res) {
    console.log(serverID);
    res.send(`studentName: "${serverID.studentName}" <br/> netId: "${serverID.netId}" <br/> message: "${serverID.message}"`);
});

app.listen(port, host, function() {
    console.log(`deployTest.js app listening on IPv4: ${host}:${port}`);
});