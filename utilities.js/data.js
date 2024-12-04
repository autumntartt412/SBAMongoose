const express = require('express');
const router = express.Router();

// Creating documents follows a syntax similar to classes.
const dogData = [
    {
        name: "Polo",
        breed: "Bully",
        color: "blue",
        gender: "male",
        age: 3,
        avalable: true,
    },
    {
        name: "Moet",
        breed: "Bully",
        color: "white",
        gender: "male",
        age: 3,
        avalable: true,
    },
    {
        name: "Butches",
        breed: "Bully",
        color: "brown",
        gender: "male",
        age: 3,
        avalable: true,
    }    
];


module.exports = router;




