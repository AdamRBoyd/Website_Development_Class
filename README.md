# Homework #4 Solution

**Adam Boyd**

**NetID: xv3543**

## Question 1

### (a)

```javascript
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
```

### (b)

### (c)

```javascript
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
```

![Image for question 1c](/images/hw41c.JPG)

## Question 2

### (a)

![Image for question 2a(/images/hw42aJPG)

### (b)

```HTML
<nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="login.html">Member Login</a></li>
        <li><a href="activities.html">Club Activities</a></li>
        <li class="active"><a href="signup.html">Sign Up</a></li>
    </ul>
</nav>
```

## Question 3

### (a)

```HTML
<form action="" method="get" class="form-login">
    <div class="form-login">
        <label for="email">Email: </label>
        <input type="email" name="email" id="email" required>

        <label for="password">Password: </label>
        <input type="text" name="password" id="password" required>

        <input type="button" value="Login" id="click">
    </div>
</form>
```

### (b)

```HTML
<main>
    <p id="clickMessage"></p>

    <form action="" method="get" class="form-login">
        <div class="form-login">
            <label for="email">Email: </label>
            <input type="email" name="email" id="email" required>

            <label for="password">Password: </label>
            <input type="text" name="password" id="password" required>

            <input type="button" value="Login" id="click">
        </div>
    </form>
    <p>This is where you login to the private section of the site.</p>
</main>
```
```javascript
    <script>
        let cl1 = document.getElementById("click");
        let cl2 = document.getElementById("clickMessage");

        function clickHandler() {
            cl2.classList.add("bordered");
            cl2.innerHTML = "<h3><strong>Welcome " + document.getElementById("email").value + "</strong></h3><h6>This site is currently under construction!</h6>";
        }

        cl1.addEventListener("click", clickHandler);
    </script>
```

![Image for question 3b](/images/hw43b.JPG)

## Question 4

### (a)

### (b)

### (c)

## Question 5

