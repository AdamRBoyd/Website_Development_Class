# Homework #11 Solution

**Adam Boyd**

**NetID: xv3543**

## Question 1

### (a)

![Screenshot for Question 1a](/images/HW111a.JPG)

### (b)

```javascript
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
```

![Screenshot for Question 1b](/images/HW111b.JPG)

## Question 2

### (a)

The protection would be tested by attempting to type in the correct url for the page without going through a menu link, also an attempt with the ger form data. Thus attempting to go around the missing link and going directly to the page.

![Screenshot for Question 2a part a](/images/HW112aa.JPG)

![Screenshot for Question 2a part b](/images/HW112ab.JPG)

### (b)

<https://www.drbsclasses.org/student2/node/>

## Question 3

### (a)

npm init --yes

### (b)

```json
{
  "name": "clubReact",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2"
  }
}
```

### (c)

### (d)

### (e)

![Screenshot for Question 3e part a](/images/HW113ea.JPG)

![Screenshot for Question 3e part b](/images/HW113eb.JPG)

## Question 4

### (a)

### (b)

**Filename:** menu.js

![Screenshot for Question 4b](/images/HW114b.JPG)

### (c)

**Filename:** home.js

![Screenshot for Question 4c](/images/HW114c.JPG)

## Question 5

### (a)

```javascript
import React from 'react';


function Activities(props) {
    let eventList = props.events.events.map(function (e){
        return <tr key={e.title}><td>{e.title}</td><td>{e.location}</td><td>{e.dateTime}</td></tr>;
    });

    let nonClubEventList = props.events.nonClubEvents.map(function (e){
        return <tr key={e.title}><td>{e.title}</td><td>{e.location}</td><td>{e.date}</td></tr>;
    });

    return <React.Fragment>
        <header>
            <h1>Club Activities</h1>
        </header>
        <main>
            <h2>Future Events:</h2>
            <table id="events">
                <thead>
                    <tr>
                        <th> Event Title </th>
                        <th> Location </th>
                        <th> Date / Time </th>
                    </tr>
                </thead>
                <tbody>
                    {eventList}
                </tbody>
            </table>
            <h2>Non-Club Events:</h2>
            <table id="nonClub">
                <thead>
                    <tr>
                        <th> Event Title </th>
                        <th> Location </th>
                        <th> Date </th>
                    </tr>
                </thead>
                <tbody>
                    {nonClubEventList}
                </tbody>
            </table>
        </main>
        <footer>
                &copy; 2021 Adam Boyd
        </footer>
    </React.Fragment>;
}

export default Activities;
```

![Screenshot for Question 5a](/images/HW115a.JPG)

### (b)

**Filename:** membership.js

![Screenshot for Question 5b](/images/HW115b.JPG)