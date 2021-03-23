function createEvents() {
    let table = document.getElementById("events");
    events.forEach(function(element) {
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
    var table = document.getElementById("nonClub");
    nonClubEvents.forEach(function(element) {
        let tr = document.createElement("tr");
        tr.innerHTML = `<td>${element.imageLink}</td><td>${element.title}</td><td>${element.location}</td><td>${element.date}</td>`;
        table.appendChild(tr);
    });
}

createEvents();
createPast();
createNonClub();

let navActive = document.querySelector("nav ul #activities");
navActive.className = 'active';