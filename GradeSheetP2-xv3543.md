# Code Review CS351 Fall 2020

**Adam Boyd**, NetId: xv3543

## Part 2: HW9 Working Server, Templates, and Form Processing

Due date: 04/14/2021    Last commit: 4/14/2021

Total: 33 out of 35 possible

1. Setup/Directories/Menu 5 pts C
    1. Correct `package.json`
    1. Directories: `templates`, `public` or equivalent
    1. All menu items work

2. Membership Signup Form 10 pts C
    1. HTML form that uses a POST method and sends the data to the `/membershipSignup` path.
    2. Style/Formatting of HTML/NJK file

3. Signup Handler on Server 10 pts C
    1. Server runs
    2. Style/Formatting of `clubServer.js` file
    3. handler on the to listen for the POST form on the `/membershipSignup` path. You should create a global `memberApplications` variable initialized to an empty array. Get the membership information and add it to the array.

4. Supply Feedback to Subscriber 5 pts C
    1. Create a simple template to provide a *customized* thanks to your new member.
    2. Supply it with the applicants information you just received to render a custom message.
    3. Style/Formatting of HTML/NJK file

5. JSON Information Interface 5 points -2 pts.
    1. Properly returns JSON! X -2 pts