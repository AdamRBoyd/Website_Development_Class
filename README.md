# Homework #2 Solution

**Adam Boyd**

**NetID: xv3543**

## Question 1

### (a)

### (b)

**(i)** *Should you put site wide navigation into the ```<main>``` element?:* 

* No, its is not unique to that page.

**(ii)** *Should you put common banners (e.g., site logo) in the ```<main>``` element?:*

* No, its is not unique to that page.

**(iii)** *Should you put copyright notices in the ```<main>``` element?:*  

* No, its is not uniquie to that page.

##### *"The main content area of a document includes content that is unique to that document and excludes content that is repeated across a set of documents such as site navigation links, copyright information, site logos and banners and search forms (unless the document or application’s main function is that of a search form)."* #####

**Filenames:**
* index.html
* login.html
* activities.html

### (c)

![The Initial Unstlyed Home Page](/images/hw21c.JPG)

### (d)

![The Initial Unstlyed Login Page](/images/hw21d.JPG)

### (e)

![The Initial Unstlyed Activities Page](/images/hw21e.JPG)

## Question 2

### (a) 

*Should we put this inside or outside the ```<main>``` element according to the specification?*

* The header should be outside the main element and scoped by body, it is introductory content for main.

### (b)

*Is it okay to put the ```<footer>``` in ```<main>```?*

* The footer should be placed outside and after the main (within the body), but there are cases where it is ok to place it within.

*What about as the last item in the ```<body>```?*

* Yes, it should be the last item in the body as it is typically at the bottom of the page.

*Would you prefer one over the other? Why?*

* I prefer placing the footer after the main, as it is typically a place for things like copyright that need not be in the middle of the page.

### (c)

![The Unstlyed Home Page with Nav](/images/hw22c.JPG)

### (d)

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <title>East Bay Jewelry Makers Club</title>
</head>

<body>
    <nav>
        <ul>
            <li class="active"><a href="index.html">Home</a></li>
            <li><a href="login.html">Member Login</a></li>
            <li><a href="activities.html">Club Activities</a></li>
        </ul>
    </nav>
    <header>
        <p>Welcome to the</p>
        <h1>East Bay Jewelry Makers Club</h1>
    </header>
    <main>
        <br>
        <h2>An East Bay Club</h2>
        <p>Describe the location of the club</p>

        <br>
        <h2>Jewelry Making</h2>
        <p>Describe what we are about.</p>

        <br>
        <br>
        <p>Eventually there will be some information here... yeah...</p>
        <!-- Add Stuff Here -->
    </main>
    <footer>
        &copy; 2021 Adam Boyd
    </footer>
</body>

</html>
```

## Question 3

### (a)

![Q3a Screenshot](/images/hw23a.JPG)

```javascript
	parseInt('hello'); // (i) Why? and What is a NaN?
	parseInt('12hello'); // (ii)
	parseInt('1010', 2);  // (iii) What does this do?
	parseInt('hi5'); // (iv) Is this the same as (ii)

	parseFloat('3.145YourNameHere'); // Put in your name!
	parseFloat('YourNameHere2112'); // Put in your name!
```

**(i)** NaN means Not a Number, which 'hello' is not a numerical value.

**(ii)** parseInt converts the string to numbers, but if it hits a character it ignores it and returns the int found before that character.

**(iii)** The number after the comma is the base of the number being parsed, in this case base 2 or binary, 1010 in binary is 10 in dec.

**(iv)** Yes and no, (ii) started with the number then parseInt stopped when it hit the 'h', whereas in (iv) the parseInthit the 'h' before any number, and therefore determined the string was NaN, reguardless if there was a number at the end.


### (b)

![Q3b Screenshot](/images/hw23b.JPG)

```javascript
	pi = Math.PI;
	h = 6.62607004e-34;
	mpg = 343/11.8;
	mpg.toString(); // Example, gives full "precision"
	// (i) Use toFixed to get a string of the first 5 digits of pi
	// (ii) Use toPrecision to get h (planck's constant) to 3 sig figs
	// (iii) Use toFixed to get the mpg to a tenth of a gallon
```

**(i)** toFixed must be set at 4, as the number corresponds to the number of digits after the decimal, where as 0 or leaving it blank rounds to the nearest whole number.

**(ii)** toPrecision is set to 3, as the number corresponds to the total number of digits shown. Setting this to 0 results in no numbers shown, so must be atleast a value of 1.

**(iii)** The same as (i), toFixed must be set to 4 as this is the quantity of numbers after the decimal we need to show as there is already a 3 before the decimal and we want 5 numbers total.

### (c)

![Q3c Screenshot](/images/hw23c.JPG)

```javascript
	a = "Your Name Here"; // double quote string
	b = 'Your Name Here'; // single quote string
	console.log(a === b); // Check if these are equal
	// Why bother with two string delimiters?
	test = "It's a pain to always escape quotes"; // (i) does this work
	console.log(test);
	// test = 'It's a pain to always escape quotes'; // (ii) why not this?
	// console.log(test2);
	test3 = 'It\'s a pain to always escape quotes'; // (iii) What is going on here
	console.log(test3);
```

**(i)** It works because the string was initialized with " and is looking for that as a closer for the string, thus ' is ignored.

**(ii)** The string was initialized with a ' so when it reaches the ' in it's it assumes theat is the closer, thus thowing an error.

**(iii)** the forward slash \ designates the ' as a character in the string and not a closer for the string.

### (d)

![Q3d Screenshot](/images/hw23d.JPG)

```javascript
	name = "Your Full Name here"
	uname = name.toUpperCase(); // (i) What?
	console.log(uname);
	lname = name.toLowerCase(); // (ii) What?
	console.log(lname);
	// Explain what the following two lines do and show a screenshot
	// of the results.
	console.log("Your name includes an 'a': " + uname.includes('A'));
	console.log("Your name includes an 'i': " + lname.includes('i'));
```

**(i)** This converts all the characters in the string to the upper case version of the character.

**(ii)** This converts all the characters in the string to the lower case version of the character.

**Last Two Lines:** These two lines include a .includes() which searches the string for the specified character and returns true/false.

### (e)

![Q3e Screenshot](/images/hw23e.JPG)

## Question 4

### (a)

### (b)

### (c)

### (d)

