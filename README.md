# Homework #5 Solution

**Adam Boyd**

**NetID: xv3543**

## Question 1

### (a)

```javascript
let leastSec = document.querySelector("#LeastPop ol");
states.sort(function(a, b) {
    return b.population_rank - a.population_rank;
});
let leastPop = states.slice(0, 5);
leastPop.forEach(element => {
    let li = document.createElement("li");
    li.innerHTML = `${element.state}, Code: ${element.code}, Population: ${element.population}, Capital: ${element.capital_city}`;
    leastSec.appendChild(li);
});
```

### (b)

```javascript
let gameSec = document.querySelector("#AbbrGame div");
states.forEach(element => {
    let arti = document.createElement("article");
    arti.innerHTML = `<p>${element.state}</p><input id="${element.code}" type="text"><p><small title="${element.code}">Hint</small></p>`
    gameSec.appendChild(arti);
});
```

### (c)

## Question 2

### (a)

### (b)

```HTML
<nav>
    <ul>
        <li class="active"><a href="index.html">Home</a></li>
        <li><a href="login.html">Member Login</a></li>
        <li><a href="activities.html">Club Activities</a></li>
        <li><a href="signup.html">Sign Up</a></li>
    </ul>
</nav>
```

```CSS
nav {
    background-color: #c5d5cb;
    border-style: solid;
    border-color: #9fa8a3;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
}

nav ul {
    list-style-type: none;
    text-decoration: none;
    display: flex;
    justify-content: space-around;
}
```

## Question 3

### (a)

If you want a specific number of characters per line you would want to use either em or rem, which would restrict the section from scaling with window width. Typically I use % to scale the width of the section to the viewers window, but this can lead to weird text wrapping.

### (b)

```CSS
main {
    background-color: #9fa8a3;
    display: flex;
    flex-direction: column;
    width: 60%;
    margin: auto;
    padding-left: 3em;
    padding-right: 3em;
    padding-top: 2em;
    padding-bottom: 2em;
    border-style: outset;
}

header {
    padding-top: 3em;
    display: flex;
    justify-content: space-around;
}

footer {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 5em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-style: italic;
}
```

## Question 4

### (a)

### (b)

### (c)

