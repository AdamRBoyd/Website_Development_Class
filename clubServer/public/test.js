const data = require('./events.json');
let e = data.events;
let x = data.nonClubEvents;

console.log(e.title);

x.forEach(element => {
    console.log(element.title);
});