var express = require('express');
var app = express();

let visits = 0;

app.get('/netID', function(req, res) {
    visits++;
    let myName = 'Adam Boyd';
    let myID = 'xv3543';
    res.send(`Name: ${myName}, NetID: ${myID}, Number of visits: ${visits}`);
});

port = 5555;
host = '127.0.0.2';

app.listen(port, host, function() {
    console.log(`Example app listening on IPv4: ${host}:${port}`);
});