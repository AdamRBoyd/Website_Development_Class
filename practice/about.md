---
title: About the East Bay Jewelry Makers Club
author: Adam Boyd
description: This is the About Us page for the East Bay Jewelry Makers Club
---

# East Bay Jewelry Makers Club

## An East Bay Club

Some information about us goes here... Something about being a club based in the California Bay Area, and where most of our members are from... Stuff and things.

## Jewelry Making

This should be a section of what we do and why... yup...

## Join the Club

Looking to join? Click on the Sign Up link above!!

###### *~~~ This Site Under Construction ~~~*  
***  
## Past Events:
   
<br>
<hr>
<br>
<table id="events">
    <thead>
        <tr>
            <th> Event Title </th>
            <th> Location </th>
            <th> Date </th>
            <th> Time </th>
        </tr>
    </thead>
</table>
<br>
<hr>
<br>

## Future Events:
   
<table id="events">
    <thead>
        <tr>
            <th> Event Title </th>
            <th> Location </th>
            <th> Date </th>
            <th> Time </th>
        </tr>
    </thead>
</table>
<br>
<br>
<hr>
<br>

## Past Events:
   
<table id="past">
    <thead>
        <tr>
            <th> Event Title </th>
            <th> Location </th>
            <th> Date </th>
        </tr>
    </thead>
</table>
<br>
<br>
<hr>
<br>
</main>
<footer>
        &copy; 2021 Adam Boyd
</footer>
<script>
    function createEvents() {
        var table = document.getElementById("events");
        events.forEach(element => {
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = element.title;
            cell2.innerHTML = element.location;
            cell3.innerHTML = element.date;
            cell4.innerHTML = element.time;
        });
    }
    function createPast() {
        var table = document.getElementById("past");
        pastEvents.forEach(element => {
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = element.title;
            cell2.innerHTML = element.location;
            cell3.innerHTML = element.date;
        });
    }
    function createNonClub() {
        var table = document.getElementById("nonClub");
        nonClubEvents.forEach(element => {
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            cell1.innerHTML = element.imageLink;
            cell2.innerHTML = element.title;
            cell3.innerHTML = element.location;
            cell4.innerHTML = element.date;
        });
    }
    createEvents();
    createPast();
    createNonClub();
</script>
