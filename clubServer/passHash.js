const fs = require('fs');
const bcrypt = require('bcryptjs');
const users = require('./clubUsers2.json');
let nRounds = 13;
let hashedUsers = [];
let start = new Date(); // timing code
console.log(`Starting password hashing with nRounds = ${nRounds}, ${start}`);

// My code to process the passwords
let salt = bcrypt.genSaltSync(nRounds);
users.forEach(element => {
    let newuser = {
        "firstName": element.firstName,
        "lastName": element.lastName,
        "email": element.email,
        "password": bcrypt.hashSync(element.password, salt),
        "role": element.role
    };
    hashedUsers.push(newuser);
});

let elapsed = new Date() - start; // timing code
console.log(`Finished password hashing, ${elapsed/1000} seconds.`);
fs.writeFileSync("clubUsersHash.json", JSON.stringify(hashedUsers, null, 2));