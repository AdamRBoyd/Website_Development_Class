# Homework #6 Solution

**Adam Boyd**

**NetID: xv3543**

## Question 1

### (a)

Node.js v14.16.0

### (b)

```Markdown
# East Bay Jewelry Makers Club

## An East Bay Club

Some information about us goes here... Something about being a club based in the California Bay Area, and where most of our members are from... Stuff and things.

## Jewelry Making

This should be a section of what we do and why... yup...

## Join the Club

Looking to join? CLick on the Sign Up link above!!

###### *~~~ This Site Under Construction ~~~*
```

### (c)

```javascript
const fs = require('fs');
const readline = require('readline');

let file = 'about.md';
let lines = 0;
let rl = readline.createInterface({
    input: fs.createReadStream(file),
    output: process.stdout,
    terminal: false
});
rl.on('line', function(line) {
    lines++;
});
rl.on('close', function() {
    console.log(`The number of lines in about.md is ${lines}`);
});
```
**Screenshot:**

![Image for question 1c](/images/hw61c.JPG)

### (d)

JSON is more restrictive as JavaScript has single quoted, double quoted, and back tick strings, while JSON only has double quoted strings.

```JSON
{
    "nonClubEvents": [{
        "link": "https://www.intergem.com/events/upcoming-shows/san-mateo-ca-july-9-11-2021",
        "image": "images/IntergemShow.png",
        "imageAlt": "Intergem Show Logo",
        "title": "Intergem Show",
        "location": "San Mateo, CA",
        "date": "July 9-11, 2021"
    }, {
        "link": "https://www.rockandmineralshows.com/Search/ListingDetails/vallejo-gem-mineral-society/384/false/false",
        "image": "images/RockandMineralShows.jpg",
        "imageAlt": "Rock and Mineral Shows Logo",
        "title": "Vallejo Gem & Mineral Society",
        "location": "Vallejo , CA",
        "date": "February 27-28, 2021"
    }, {
        "link": "https://www.tradeindia.com/tradeshows/92078/the-fall-contra-costa-crystal-fair-2021.html",
        "image": "images/CrystalFair.jpg",
        "imageAlt": "Crystal Fair Logo",
        "title": "The Fall Contra Costa Crystal Fair",
        "location": "Walnut Creek, CA",
        "date": "April 17-18, 2021"
    }]
}
```

### (e)

```javascript
let events = require('./eventData.json');
console.log("Data from eventData.json:");
events.nonClubEvents.forEach(element => {
    console.log(`${element.title}:\n ${element.date} - ${element.location}\n`);
});
```

**Screenshot:**

![Image for question 1e](/images/hw61e.JPG)

## Question 2

### (a)

I used the ***npm init --yes*** method.

### (b)

```JSON
{
  "name": "practice",
  "version": "1.0.0",
  "description": "",
  "main": "processIt.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "commonmark": "^0.29.3"
  }
}
```