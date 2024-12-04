const express = require('express');
const router = express.Router();



// http://localhost:3000/note

// GET a note
router
.route("/")
  .get((req, res, next) => { 
    Note.find({})
      .then(notes => {
        res.send(notes); 
        console.log(notes); 
      })
      .catch(error => {
        console.error(error); 
        res.status(500).send("Error fetching notes"); 
        next(error)
      });
  })

  // POST create a note
  .post(async (req, res) => {
      const newNote = {
          comment: req.body.comment
      };
      Note.create(newNote).then(note => {
          note = newNote;
          res.status(201).send(note);
      })
   .catch(error => console.error(error));
    });



module.exports = router;