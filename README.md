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

### (c)

## Question 3

### (a)

### (b)

### (c)

## Question 4

### (a)

### (b)

### (c)

