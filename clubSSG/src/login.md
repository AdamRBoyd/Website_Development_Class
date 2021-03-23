---
title: Login
author: Adam Boyd
description: This is the members login page for the East Bay Jewelry Makers Club
header: Login
scriptFile: login.js
---

   
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