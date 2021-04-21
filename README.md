# Homework #10 Solution

**Adam Boyd**

**NetID: xv3543**

## Question 1

### (a)

```javascript
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
```

```JSON
{
    "firstName": "Melia",
    "lastName": "Barker",
    "email": "tirrivees1820@outlook.com",
    "password": "$2a$10$JD/249HuW.AjYeQ5adElzebSqQDVpaxTGdBSsWh/dQgT2PTr8SONi",
    "role": "admin"
  },
  {
    "firstName": "Demetrice",
    "lastName": "Parker",
    "email": "chihuahua1899@gmail.com",
    "password": "$2a$10$JD/249HuW.AjYeQ5adElzebSqQDVpaxTGdBSsWh/dQgT2PTr8SONi",
    "role": "member"
  },
```

### (b)

![Screenshot for Question 1b](/images/HW101b.JPG)

### (c)

## Question 2

### (a)

### (b)

### (c)

### (d)

## Question 3

### (a)

### (b)

## Question 4

### (a)

### (b)

### (c)

## Question 5

### (a)

### (b)

### (c)

### (d)
