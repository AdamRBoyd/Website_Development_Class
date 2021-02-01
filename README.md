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
