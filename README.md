# Homework #6 Solution

**Adam Boyd**

**NetID: xv3543**

## Question 1

### (a)

### (b)

### (c)

**clubSSG/build/*.html**

### (d)

### (e)

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>{{title}}</title>
        <meta name="author" content="{{author}}">
        <meta name="description" content="{{description}}">
        <link href="club.css" rel="stylesheet">
    </head>

<body>
    <nav>
        {% include "navMenu.html" %}
    </nav>
    <header>
        <h1>{{header}}</h1>
    </header>
    <main>
        {{mainContent | safe}}
    </main>
    <footer>
        &copy; 2021 Adam Boyd
    </footer>
    <script src="{{scriptFile}}"></script>
</body>
</html>
```

### (f)

```javascript
const fs = require('fs');
const nunjucks = require('nunjucks');
const matter = require('gray-matter');
let commonmark = require('commonmark');

let reader = new commonmark.Parser();
let writer = new commonmark.HtmlRenderer();

let srcPrefix = __dirname + "/src";
let bldPrefix = __dirname + "/build";
let allFiles = fs.readdirSync(srcPrefix);

nunjucks.configure('views', { autoescape: true });

console.log("Processing the src directory: ");
allFiles.forEach(function(srcName) {
    console.log('Reading ' + srcName);
    let fname = srcPrefix + '/' + srcName; // full name of the file to be read
    let fdata = fs.readFileSync(fname, 'utf8');

    let readFile = matter(fdata);

    let parsed = reader.parse(readFile.content);
    let result = writer.render(parsed);

    let outString = nunjucks.render('base.njk', { mainContent: result, title: readFile.data.title, author: readFile.data.author, description: readFile.data.description, header: readFile.data.header, scriptFile: readFile.data.scriptFile });

    // create the full name of the file to be written change extension to .html
    let outName = (bldPrefix + '/' + srcName).replace(".md", ".html");
    fs.writeFileSync(outName, outString);
    console.log(`Wrote file: ${outName}`);
});
```

### (g)
<http://csweb01.csueastbay.edu/~xv3543/clubProjectHW7/>

## Question 2

### (a)

**IPv4 =** 192.168.126.1

**Ethernet =** 10.0.0.42

### (b)

We use IP for the worldwide internet because it is more information dense, and allows for more addresses as opposed to the local ethernet, which typically doesn't need more than a few hundered addresses as much fewer devices are connected to it.

### (c)

We transmit files larger that the maximum packet size by breaking the file into smaller bits that will fit into packets, transmitting those, then reassembling them at the destination. This is handled in the Transport layer.

### (d)

The difference between UDP and TCP is handshakes. UDP is a connectionless protocol and therefore does not guarantee delivery. We typically use TCP because of this fact, we want to guarantee that the data is recieved and is at the correct address.

## Question 3

### (a)