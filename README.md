# Homework #10 Solution

**Adam Boyd**

**NetID: xv3543**

## Question 1

### (a)

```javascript
let salt = bcrypt.genSaltSync(nRounds);
users.forEach(element => {
    let newuser = {
        "firstName": element.firstName,
        "lastName": element.lastName,
        "email": element.email,
        "password": bcrypt.hashSync(element.password, salt),
        "role": element.role
    };
    hashedUsers.push(newuser);
});
```

```JSON
{
    "firstName": "Melia",
    "lastName": "Barker",
    "email": "tirrivees1820@outlook.com",
    "password": "$2a$10$JD/249HuW.AjYeQ5adElzebSqQDVpaxTGdBSsWh/dQgT2PTr8SONi",
    "role": "admin"
  },
  {
    "firstName": "Demetrice",
    "lastName": "Parker",
    "email": "chihuahua1899@gmail.com",
    "password": "$2a$10$JD/249HuW.AjYeQ5adElzebSqQDVpaxTGdBSsWh/dQgT2PTr8SONi",
    "role": "member"
  },
```

### (b)

![Screenshot for Question 1b](/images/HW101b.JPG)

### (c)

```javascript
const bcrypt = require('bcryptjs');
let nRounds = 13;

app.post('/membershipSignup', urlencodedParser, function(req, res) {
    let salt = bcrypt.genSaltSync(nRounds);
    let newuser = {
        "name": req.body.name,
        "email": req.body.email,
        "password": bcrypt.hashSync(req.body.password, salt),
        "how": req.body.how,
        "comments": req.body.comments
    };

    console.log(`\n New Membership: \n`);
    console.log(newuser);
    memberApplications.push(newuser);

    res.render('thanks.njk', { info: newuser });
});
```

## Question 2

### (a)

```HTML
<form action="memberLogin" method="post" class="form-login">
    <label for="email">Email: </label>
    <input type="email" name="email" id="email" minlength="4" maxlength="32" required>
    <label for="password">Password: </label>
    <input type="password" name="password" id="password" minlength="8" maxlength="32" required>
    <button type="submit">Sign in</button>
</form>
```

### (b)

```javascript
app.post('/memberLogin', urlencodedParser, function(req, res) {
    let userNum = users.findIndex((element => element == req.body.email)) + 1;
    console.log(`\nUser Login: ${req.body.email}`);
    let page = res; //compare overwrites original res, so store the original for later
    bcrypt.compare(req.body.password, users[userNum].password, function(err, res) {
        if (err) {
            console.log('ERROR!!');
        }
        if (res) {
            console.log('Valid Login');
            let validUser = users[userNum];
            delete validUser.password;
            page.render('validLogin.njk', { info: validUser });
        } else {
            console.log('Invalid Login');
            page.render('invalid.njk');
        }
    });
});
```

### (c)

![Screenshot for question 2c](/images/HW102c.JPG)

### (d)

![Screenshot for question 2d](/images/HW102d.JPG)

## Question 3

### (a)

![Screenshot for question 3a](/images/HW103a.JPG)

### (b)

```javascript
app.get('/activityAdded', function(req, res) {
    var dt = new Date(req.query.dateTime).toLocaleString(); //convert date/time to formatted local
    let event = {
        "title": req.query.title,
        "location": req.query.location,
        "dateTime": dt
    };
    if (events.futureEvents[0].title === "No Title") { //remove placeholder info
        events.futureEvents.shift();
    }
    if (events.length > 100) { // only keep the last 100 activities added
        events.futureEvents.shift(); // removes the first item
        console.log('Future Events List More Than 100 Entries, Removing First');
    }
    events.futureEvents.push(event);
    console.log('\nNew Event Added:');
    console.log(event);
    var info = { scriptFile: "activities.js", events: events };
    res.redirect('/activities');
});
```

## Question 4

### (a)

```javascript
app.post('/logon', express.urlencoded({ extended: true }), function(req, res) {
    console.log(req.body);
    let email = req.body.email;
    let password = req.body.password;
    // Find user
    let auser = users.find(function(user) {
        return user.email === email
    });
    if (!auser) { // Not found
        res.render("loginError.njk");
        return;
    }
    let verified = bcrypt.compareSync(password, auser.passHash);
    if (verified) {
        // Upgrade in priveledge, should generate new session id
        // Save old session information if any, create a new session
        let oldInfo = req.session.user;
        req.session.regenerate(function(err) {
            if (err) {
                console.log(err);
            }
            req.session.user = Object.assign(oldInfo, auser, {
                loggedin: true
            });
            res.render("welcome.njk", { user: auser });
        });
    } else {
        res.render("loginError.njk");
        return response.status(400).send('bad request');
    }
});
```

### (b)

```javascript
app.get('/logout', function(req, res) {
    let options = req.session.cookie;
    req.session.destroy(function(err) {
        if (err) {
            console.log(err);
        }
        res.clearCookie(cookieName, options);
        res.render("goodbye.njk");
    })
});
```

### (c)

![Screenshot for question 4c part a](/images/HW104ca.JPG)

![Screenshot for question 4c part b](/images/HW104cb.JPG)

## Question 5

### (a)

![Screenshot for question 5a](/images/HW105a.JPG)

### (b)

![Screenshot for question 5b](/images/HW105b.JPG)

### (c)

![Screenshot for question 5c](/images/HW105c.JPG)

### (d)

<https://www.drbsclasses.org/student2/node/>