---
title: Sign Up
author: Adam Boyd
description: This is membership sign up page for the East Bay Jewelry Makers Club
header: Sign Up
scriptFile: signup.js
---
   
<section class="gridContainer bordered">
    <form action="" method="get">
        <label for="name">Name: </label>
        <input type="text" name="name" id="name" minlength="1" maxlength="50" required>
        <label for="email">Email: </label>
        <input type="email" name="email" id="email" minlength="4" maxlength="32" required>
        <label for="password">Password: </label>
        <input type="password" name="password" id="password" minlength="8" maxlength="32" required>
        <label for="how">How did you hear about us?: </label>
        <select name="how" id="how">
            <option value="google">Google</option>
            <option value="friend">Friend</option>
            <option value="site">Other Website</option>
        </select>
        <input type="button" value="Signup" id="click">
    </form>
</section>
<br>
<section id="ThanksDialog" class="hide bordered"></section>