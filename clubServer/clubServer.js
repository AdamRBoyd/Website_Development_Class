const express = require('express');
const app = express();
app.use(express.static('public'))
let urlencodedParser = express.urlencoded({ extended: true });
const session = require('express-session');
const cookieName = "clubsid";

app.use(session({
    secret: 'east bay jewelry makers',
    resave: false,
    saveUninitialized: false,
    name: cookieName // Sets the name of the cookie used by the session middleware
}));

const nunjucks = require('nunjucks');
nunjucks.configure('templates', { autoescape: true, express: app });

const bcrypt = require('bcryptjs');
let nRounds = 13;

const eventsData = require('./events.json');
const serverID = require("./severID.json");
const users = require('./clubUsersHash.json');

let host = 'localhost';
let port = 3002;
let serverStart = new Date(); // Server start Date time
let memberApplications = [];
let events = eventsData;

const setUpSessionMiddleware = function(req, res, next) {
    console.log(`session object: ${JSON.stringify(req.session)}`);
    console.log(`session id: ${req.session.id}`);
    if (!req.session.user) {
        req.session.user = {
            loggedin: false
        };
    }
    next();
};

app.use(setUpSessionMiddleware);

const checkLoggedInMiddleware = function(req, res, next) {
    if (!req.session.user.loggedin) {
        res.render("Forbidden.njk");
    } else {
        next();
    }
};


app.get('/', function(req, res) {
    res.render('index.njk', { scriptFile: "index.js", user: req.session.user });
});

app.get('/index', function(req, res) {
    res.render('index.njk', { scriptFile: "index.js", user: req.session.user });
});

app.get('/login', function(req, res) {
    res.render('login.njk', { scriptFile: "login.js", user: req.session.user });
});

app.post('/memberLogin', urlencodedParser, function(req, res) {
    console.log(`\nUser Login: ${req.body.email}`);
    let email = req.body.email;
    let password = req.body.password;
    let currUser = users.find(function(user) {
        return user.email === email
    });
    if (!currUser) { // Not found
        res.render("invalid.njk");
        return;
    }

    let page = res; //compare overwrites original res, so store the original for later
    bcrypt.compare(password, currUser.password, function(err, res) {
        if (err) {
            console.log('ERROR!!');
        }
        if (res) {
            console.log('Valid Login');
            let oldInfo = req.session.user;
            req.session.regenerate(function(err) {
                if (err) {
                    console.log(err);
                }
                req.session.user = Object.assign(oldInfo, currUser, {
                    loggedin: true
                });
                page.render('validLogin.njk', { info: currUser, user: req.session.user });
            });
        } else {
            console.log('Invalid Login');
            page.render('invalid.njk');
        }
    });
});

app.get('/logout', function(req, res) {
    let options = req.session.cookie;
    req.session.destroy(function(err) {
        if (err) {
            console.log(err);
        }
        res.clearCookie(cookieName, options);
        res.render("goodbye.njk");
    })
});


app.get('/membership', function(req, res) {
    res.render('membership.njk', { scriptFile: "signup.js" });
});

app.post('/membershipSignup', urlencodedParser, function(req, res) {
    let salt = bcrypt.genSaltSync(nRounds);
    let newuser = {
        "name": req.body.name,
        "email": req.body.email,
        "password": bcrypt.hashSync(req.body.password, salt),
        "how": req.body.how,
        "comments": req.body.comments
    };

    console.log(`\n New Membership: \n`);
    console.log(newuser);
    memberApplications.push(newuser);

    res.render('thanks.njk', { info: newuser });
});

app.get('/activities', function(req, res) {
    var info = { scriptFile: "activities.js", events: events, user: req.session.user };
    res.render('activities.njk', info);
});

app.get('/addActivity', function(req, res) {
    var info = { scriptFile: "addActivity.js", user: req.session.user };
    res.render('addActivity.njk', info);
});

app.get('/activityAdded', function(req, res) {
    var dt = new Date(req.query.dateTime).toLocaleString(); //convert date/time to formatted local
    let event = {
        "title": req.query.title,
        "location": req.query.location,
        "dateTime": dt
    };
    if (events.futureEvents[0].title === "No Title") { //remove placeholder info
        events.futureEvents.shift();
    }
    if (events.length > 100) { // only keep the last 100 activities added
        events.futureEvents.shift(); // removes the first item
        console.log('Future Events List More Than 100 Entries, Removing First');
    }
    events.futureEvents.push(event);
    console.log('\nNew Event Added:');
    console.log(event);
    var info = { scriptFile: "activities.js", events: events };
    res.redirect('/activities');
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