//OLD CODE

/*var events;

var future;
var pastEvents;
var nonClubEvents;

fetch('./events.json')
    .then(results => results.json())
    .then(data => {
        future = data.events;
        pastEvents = data.pastEvents;
        nonClubEvents = data.nonClubEvents;
    });


function createEvents() {
    let table = document.getElementById("events");
    future.forEach(function(element) {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${element.title}</td><td>${element.location}</td><td>${element.date}</td><td>${element.time}</td>`;
        table.appendChild(tr);
    });
}

function createPast() {
    let table = document.getElementById("past");
    pastEvents.forEach(function(element) {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${element.title}</td><td>${element.location}</td><td>${element.date}</td>`;
        table.appendChild(tr);
    });
}

function createNonClub() {
    let table = document.getElementById("nonClub");
    nonClubEvents.forEach(function(element) {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${element.imageLink}</td><td>${element.title}</td><td>${element.location}</td><td>${element.date}</td>`;
        table.appendChild(tr);
    });
}

createEvents();
createPast();
createNonClub();

*/

let navActive = document.querySelector("nav ul #activities");
navActive.className = 'active';