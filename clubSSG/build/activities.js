let eventsTitles = ["Event Title", "Location and Date", "Time"];
let pastEventsTitles = ["Event Title", "Location", "Date"];
let nonClubTitles = ["Link", "Event Title", "Location", "Date"];

let events = [{ "title": "&#x1F62D No Upcoming Events &#x1F62D", "location": "No Location", "date": "No Date", "time": "No Time Given" }];

let pastEvents = [{ "title": "No Past Events Yet...", "location": "No Location", "date": "No Date" }];

let nonClubEvents = [{
    "imageLink": "<a href=\"https://www.intergem.com/events/upcoming-shows/san-mateo-ca-july-9-11-2021\"><img class=\"tiny center\" src=\"images/IntergemShow.png\" alt=\"Intergem Show Logo\"></a>",
    "title": "Intergem Show",
    "location": "San Mateo, CA",
    "date": "July 9-11, 2021"
}, {
    "imageLink": "<a href=\"https://www.rockandmineralshows.com/Search/ListingDetails/vallejo-gem-mineral-society/384/false/false\"><img class=\"tiny center\" src=\"images/RockandMineralShows.jpg\" alt=\"Rock and Mineral Shows Logo\"></a>",
    "title": "Vallejo Gem & Mineral Society",
    "location": "Vallejo , CA",
    "date": "February 27-28, 2021"
}, {
    "imageLink": "<a href=\"https://www.tradeindia.com/tradeshows/92078/the-fall-contra-costa-crystal-fair-2021.html\"><img class=\"tiny center\" src=\"images/CrystalFair.jpg\"alt=\"Crystal Fair Logo\"></a>",
    "title": "The Fall Contra Costa Crystal Fair",
    "location": "Walnut Creek, CA",
    "date": "April 17-18, 2021"
}];

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

let navActive = document.querySelector("nav ul #activities");
navActive.className = 'active';