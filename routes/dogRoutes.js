const express = require('express');
const router = express.Router();


  
  // http://localhost:3000/dog
  
  // GET a dog
  router
  .route("/")
    .get((req, res, next) => { 
      Dog.find({})
        .then(dogs => {
          res.send(dogs);  
          console.log(dogs);  
        })
        .catch(error => {
          console.error(error); 
          res.status(500).send({ message: "Error fetching dogs." }); 
          next(error)
        });
    })
  
    // POST a dog
    .post(async (req, res) => {
        const newDog = {
            name: req.body.name,
            breed: req.body.breed,
            color: req.body.color,
            gender: req.body.gender,
            age: req.body.age,
            isAvailable: req.body.avalable,   
        };
        Dog.create(newDog).then(dog => {
            dog = newDog;
            res.status(201).send(dog);
        })
     .catch(error => console.error(error));
     next(error)
      });
  
  // http://localhost:3000/dog/674f63eed8a6334a0f8c1546
  
  // GET a dog by its ID.
  router
  .route("/:id") 
  .get(async (req, res, next) => {
    const id = req.params.id;
  
    try {
      const dog = await Dog.findById(id); 
      if (!dog) {
        return res.status(404).send({ message: "Dog not found" });
      }
      res.status(200).send(dog);
    } catch (error) {
      next(error);  
    }
  })
    // PUT update a dog by its ID
    .put(async (req, res, next) => {
      try {
        const updateDog = await Dog.findByIdAndUpdate(req.params.id, {
          name: req.body.name,
          breed: req.body.breed,
          color: req.body.color,
          gender: req.body.gender,
          age: req.body.age,
          isAvailable: req.body.available, 
        }, { new: true });
    
        if (!updateDog) {
          return res.status(404).send({ message: "Dog not found" });
        }
    
        res.status(200).send({ message: "Dog updated", dog: updateDog });
      } catch (error) {
        console.error(error);
        next(error);  
      }
    })
  
  //DELETE a dog by its ID
    .delete(async (req, res) => {
      const id = req.params.id;
  
      try {
        const result = await Dog.findByIdAndDelete(id); 
        if (!result) {
          return res.status(404).send({ message: "Dog not found" });
        }
        res.status(200).send({ message: "Dog deleted" });
      } catch (error) {
       next(error)
      }
    });

module.exports = router;


