# Homework #3 Solution

**Adam Boyd**

**NetID: xv3543**

## Question 1

### (a)

Images placed on the index.html page.

![Image for question 1a](/images/hw31a.JPG)

### (b)

Emojis used:

&#x1F6A7 (Construction Barricade) on Homepage.

&#x1F62D (Crying emoji) on Activities page

![Image for question 1b](/images/hw31b.JPG)

### (c)

```css
nav ul {
    background-color: #c5d5cb;
    max-width: 8em;
    border-style: groove;
    margin-top: 2em;
    margin-left: 2em;
    padding: 1em;
    padding-left: 2em;
    padding-right: 2em;
    list-style-type: none;
    text-decoration: none;
}
```

## Question 2

### (a)

### (b)

```HTML
<table>
	<thead>
        <tr>
            <th> Link </th>
            <th> Event Title </th>
            <th> Location </th>
            <th>Date</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <a href="https://www.intergem.com/events/upcoming-shows/san-mateo-ca-july-9-11-2021"><img class="tiny center" src="images/IntergemShow.png" alt="Intergem Show Logo"></a>
            </td>
            <td>Intergem Show</td>
            <td>San Mateo, CA </td>
            <td>July 9-11, 2021</td>
        </tr>
        <tr>
            <td>
                <a href="https://www.rockandmineralshows.com/Search/ListingDetails/vallejo-gem-mineral-society/384/false/false"><img class="tiny center" src="images/RockandMineralShows.jpg" alt="Rock and Mineral Shows Logo"></a>
            </td>
            <td>Vallejo Gem & Mineral Society</td>
            <td>Vallejo , CA</td>
            <td>February 27-28, 2021</td>
        </tr>
        <tr>
            <td>
                <a href="https://www.tradeindia.com/tradeshows/92078/the-fall-contra-costa-crystal-fair-2021.html"><img class="tiny center" src="images/CrystalFair.jpg" alt="Crystal Fair Logo"></a>
            </td>
            <td>The Fall Contra Costa Crystal Fair</td>
            <td>Walnut Creek, CA</td>
            <td>April 17-18, 2021</td>
        </tr>
    </tbody>
</table>
```

### (c)

![Image for question 2c](/images/hw32c.JPG)

```css
table,
td {
    border: 2px groove #333;
    border-collapse: collapse;
    padding: 1em;
    font-weight: bolder;
    font-size: 20px;
    background-color: #e3e0cf;
}

thead {
    width: 90%;
    background-color: #c5d5cb;
    color: black;
    text-align: center;
}
```

## Question 3

### (a)

![Image for question 3a](/images/hw33a.JPG)

### (b)

<http://csweb01.csueastbay.edu/~xv3543/clubProjectHW3/index.html>

## Question 4

### (a)

```javascript
sentence = "A long, long, time ago in a galaxy"; // A string
myArray = sentence.split(' '); // (i) what does this do?
console.log("The number of words is: " + myArray.length);
myArray.push("far"); // (ii) what do each of these calls do?
myArray.push("far");
myArray.push("away");
console.log("The number of words is: " + myArray.length);
console.log(myArray.join('_')); // (iii) what does join do?
tempIndex = myArray.indexOf('galaxy'); // (iv) What does this do?
myArray[tempIndex] = "college"; // (v) did I change an element?
console.log(myArray.join(' '));
myArray.pop(); // (vi) what does this do?
console.log("The number of words is: " + myArray.length);
```
**(i)**

This creates an array where the individual elements are the words in the sentence, they are divided by looking for the whitespace.

**(ii)**

This adds a word to the end of the array.

**(iii)**

This creates ands returns a new string of the concatonated elements in the array, adding a space between them.

**(iv)**

This locates the word "galaxy" and creates an indexable value of its location.

**(v)**

You changed the word at the temporary index from "galaxy" to "college".

**(vi)**

This removes the last element of the array and returns it (though you didn't use it).

![Image for question 4a](/images/hw34a.JPG)

### (b)

```javascript
sentence2 = "Whereas recognition of the inherent dignity and of the equal and inalienable rights of all members of the human family is the foundation of freedom, justice and peace in the world";
myArray2 = sentence2.split(" ");

function upper(xString) { // (i) What does this function do?
  return xString.toUpperCase();
}

myArray3 = myArray2.map(upper); //(ii) What does map do?

function noCaseSort(x, y) {
  if (x.toLowerCase() < y.toLowerCase()) { // (iii) why would I do this?
    return -1;
  } else {
    return 1;
  }
  return 0;
}

myArray2.sort(noCaseSort);
// (iv) what is the purpose of passing this function here?
```

**(i)**

This returns an uppercase version of the inputted string.

**(ii)**

This returns a new array containing the results of calling a function for every element in the original array.

**(iii)**

This is used to compare two strings without having to take case sensitivity into account (Adam vs adam).

**(iv)**

This will allow you to sort the array without worrying about letters being upper vs lower case as Z > a in ascii.

### (c)

![Image for question 4c](/images/hw34c.JPG)