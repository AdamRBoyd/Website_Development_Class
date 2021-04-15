# Homework #9 Solution

**Adam Boyd**

**NetID: xv3543**

## Question 1

### (a)

### (b)

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        {% block metaStuff %}{% endblock %}
        <link href="club.css" rel="stylesheet">
    </head>

<body>
    <nav>
        <ul>
            <li id="index"><a href="/">Home</a></li>
            <li id="login"><a href="login">Member Login</a></li>
            <li id="activities"><a href="activities">Club Activities</a></li>
            <li id="signup"><a href="membership">Sign Up</a></li>
        </ul>
    </nav>
    <header>
        {% block header %}{% endblock %}
    </header>
    <main>
        {% block main %}{% endblock %}
    </main>
    <footer>
        &copy; 2021 Adam Boyd
    </footer>
    <script src="{{scriptFile}}"></script>
</body>
</html>
```

### (c)

![Screenshot for 1c](images/HW91c.JPG)

### (d)

```html
{% extends "clubBase.njk" %}

{% block metaStuff %}
    <title>Login</title>
    <meta name="author" content="Adam Boyd">
    <meta name="description" content="This is the members login page for the East Bay Jewelry Makers Club">
{% endblock %}

{% block header %}
    <h1>Login</h1>
{% endblock %}

{% block main %}
    <section class="gridContainer bordered">
        <form action="" method="get" class="form-login">
            <label for="email">Email: </label>
            <input type="email" name="email" id="email" minlength="4" maxlength="32" required>
            <label for="password">Password: </label>
            <input type="password" name="password" id="password" minlength="8" maxlength="32" required>
            <input type="button" value="Login" id="click">
        </form>
    </section>
    <br>
    <section id="clickMessage" class="bordered hide"></section>
{% endblock %}
```

### (e)

### (f)

```html
<nav>
    <ul>
        <li id="index"><a href="/">Home</a></li>
        <li id="login"><a href="login">Member Login</a></li>
        <li id="activities"><a href="activities">Club Activities</a></li>
        <li id="signup"><a href="membership">Sign Up</a></li>
    </ul>
</nav>
```

## Question 2

### (a)

### (b)

```html
{% extends "clubBase.njk" %}

{% block metaStuff %}
    <title>Club Activities</title>
    <meta name="author" content="Adam Boyd">
    <meta name="description" content="The club activites for the East Bay Jewelry Makers Club">
{% endblock %}

{% block header %}
    <h1>Club Activities</h1>
{% endblock %}

{% block main %}
    <h2>Future Events:</h2>
        <table id="events">
            <thead>
                <tr>
                    <th> Event Title </th>
                    <th> Location </th>
                    <th> Date </th>
                    <th> Time </th>
                </tr>
            </thead>
            <tbody>
                {%for event in events.futureEvents%}
                    <tr>
                        <td>{{event.title}}</td>
                        <td>{{event.location}}</td>
                        <td>{{event.date}}</td>
                        <td>{{event.time}}</td>
                    </tr>
                {%endfor%}
            </tbody>
        </table>


        <br>
        <br>
        <hr>
        <br>

        <h2>Past Events:</h2>
        <table id="past">
            <thead>
                <tr>
                    <th> Event Title </th>
                    <th> Location </th>
                    <th> Date </th>
                </tr>
            </thead>
            <tbody>
                {%for event in events.pastEvents%}
                    <tr>
                        <td>{{event.title}}</td>
                        <td>{{event.location}}</td>
                        <td>{{event.date}}</td>
                    </tr>
                {%endfor%}
            </tbody>
        </table>

        <br>
        <br>
        <hr>
        <br>

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
                {%for event in events.nonClubEvents%}
                    <tr>
                        <td>{{event.title}}</td>
                        <td>{{event.location}}</td>
                        <td>{{event.date}}</td>
                    </tr>
                {%endfor%}
            </tbody>
        </table>
{% endblock %}

```

### (c)

![Screenshot for 2c](images/HW92c.JPG)

## Question 3

### (a)

![Screenshot for 3a](images/HW93a.JPG)

### (b)

![Screenshot for 3b](images/HW93b.JPG)

### (c)

![Screenshot for 3c](images/HW93c.JPG)

```javascript
app.post('/membershipSignup', urlencodedParser, function(req, res) {
    console.log(req.body);
    delete req.body["password"];
    console.log(`\n New Membership: \n`);
    console.log(req.body);
    memberApplications.push(req.body);
    console.log(`\n Current Member list: \n`);
    console.log(memberApplications);
    res.render('thanks.njk', { info: req.body });
});
```

## Question 4

### (a)

![Screenshot for 4a](images/HW94a.JPG)

### (b)