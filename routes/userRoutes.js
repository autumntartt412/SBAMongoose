const express = require('express');
const router = express.Router();



// http://localhost:3000/user

// GET a user
router
.route("/")
  .get((req, res, next) => { 
    User.find({})
      .then(users => {
        res.send(users); 
        console.log(users); 
      })
      .catch(error => {
        console.error(error); 
        res.status(500).send("Error fetching users"); 
        next(error)
      });
  })

// POST create a new user
 .post(async (req, res) => {
 
  const newUser = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    contactNumber: req.body.contactNumber,
    email: req.body.email
  };

  try {
  
    const user = await User.create(newUser); 
    res.status(201).send(user);  
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating user");
  }
});

module.exports = router;
