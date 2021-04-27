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

