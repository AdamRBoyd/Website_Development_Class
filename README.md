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

### (c)

```javascript
const fs = require('fs');
const readline = require('readline');

const fileStream = fs.createReadStream('about.md');

let commonmark = require('commonmark');
let reader = new commonmark.Parser();
let writer = new commonmark.HtmlRenderer();

let lines = 0;
let rl = readline.createInterface({
    input: fileStream
});
rl.on('line', (line) => {
    lines++;
    let parsed = reader.parse(line);
    let result = writer.render(parsed);

    fs.appendFile('about.html', result, function(err) {
        if (err) throw err;
    });
});
rl.on('close', () => {
    console.log(`The number of lines in about.md is ${lines}`);
});

let events = require('./eventData.json');
const { Console } = require('console');
console.log("Data from eventData.json:");
events.nonClubEvents.forEach(element => {
    console.log(`${element.title}:\n ${element.date} - ${element.location}\n`);
});
```

**HTML File:**

```HTML
<h1>East Bay Jewelry Makers Club</h1>
<h2>An East Bay Club</h2>
<p>This should be a section of what we do and why... yup...</p>
<h2>Jewelry Making</h2>
<p>Some information about us goes here... Something about being a club based in the California Bay Area, and where most of our members are from... Stuff and things.</p>
<p>Looking to join? CLick on the Sign Up link above!!</p>
<h2>Join the Club</h2>
<h6><em>~~~ This Site Under Construction ~~~</em></h6>
```

## Question 3

### (a)

### (b)

![Image for question 3b](/images/hw63b.JPG)

## Question 4

### (a)

### (b)

**base.njk:**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>East Bay Jewelry Makers Club</title>
        <meta name="author" content="{{author}}">
        <meta name="description" content="{{description}}">
        <link href="club.css" rel="stylesheet">
    </head>
    <body>
    <nav>
    </nav>
    <main>
        {{mainContent | safe}}
    </main>
    </body>
</html>
```

### (c)

**processIt.js:**

```javascript
const fs = require('fs');
const readline = require('readline');
const matter = require('gray-matter');
const nunjucks = require('nunjucks');

nunjucks.configure('views', { autoescape: true });

let commonmark = require('commonmark');
let reader = new commonmark.Parser();
let writer = new commonmark.HtmlRenderer();

const inFile = fs.readFileSync('about.md', 'utf8');
let readFile = matter(inFile);
console.log(readFile.data);

let parsed = reader.parse(readFile.content);
let result = writer.render(parsed);

let outString = nunjucks.render('base.njk', { mainContent: result, title: readFile.data.title, author: readFile.data.author, description: readFile.data.description });
fs.writeFileSync('./output/about.html', outString);
console.log("Wrote file");
```

**about.html:**

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>About the East Bay Jewelry Makers Club</title>
        <meta name="author" content="Adam Boyd">
        <meta name="description" content="This is the About Us page for the East Bay Jewelry Makers Club">
        <link href="club.css" rel="stylesheet">
        
    </head>
    <body>
    <nav>
        
    </nav>
    <main>
        <h1>East Bay Jewelry Makers Club</h1>
<h2>An East Bay Club</h2>
<p>Some information about us goes here... Something about being a club based in the California Bay Area, and where most of our members are from... Stuff and things.</p>
<h2>Jewelry Making</h2>
<p>This should be a section of what we do and why... yup...</p>
<h2>Join the Club</h2>
<p>Looking to join? Click on the Sign Up link above!!</p>
<h6><em>~~~ This Site Under Construction ~~~</em></h6>

    </main>
    </body>
</html>
```