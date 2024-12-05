import express from 'express'
const router = express.Router();
import db from "../db/conn.mjs"
import { ObjectId } from "mongodb";


// http://localhost:3000/dog

// GET a dog
router
  .route("/")
  .get(async (req, res, next) => {
    let collection = await db.collection("dogs")
    let result = await collection.find({}).toArray()
    console.log(result);
    res.send(result).status(200);
  })

  // POST a dog
  .post(async (req, res) => {
    const collection = await db.collection("dogs")
    const newDog = {
      name: req.body.name,
      breed: req.body.breed,
      color: req.body.color,
      gender: req.body.gender,
      age: req.body.age,
      isAvailable: req.body.available,
    };

    let result = await collection.insertOne(newDog)
    res.send(result).status(201);
   
  });



// http://localhost:3000/dog/674f63eed8a6334a0f8c1546

// GET a dog by its ID.

router
  .route("/:id")
  .get(async (req, res, next) => {
    let collection = await db.collection("dogs")
    let query = { _id: new ObjectId(req.params.id) }

    let result = await collection.findOne(query)

    console.log(result);
    if (!result) res.send("Dog not found").status(404);
    else res.send(result).status(200);
  })
 // UPDATE a dog by its ID
  .put(async (req, res) => {
    const collection = await db.collection('dogs');
    let filter = { _id: new ObjectId(req.params.id) }
    let updatedDog = { 
      $set: {
            name: req.body.name,
            breed: req.body.breed,
            color: req.body.color,
            gender: req.body.gender,
            age: req.body.age,
            isAvailable: req.body.available,
      },
  };
    let result = await collection.updateOne(filter, updatedDog)

    console.log(result);
    if (!result) res.send("Dog not found").status(404);
    else res.send(result).status(200)
  
    res.send(result).status(200).json;
  })

    // DELETE a dog by its ID
  .delete(async (req, res) => {

    let collection = await db.collection("dogs");
    let query = { _id: new ObjectId(req.params.id) }

    let result = await collection.deleteOne(query)
   
    if (!result) res.send("Dog not found").status(404);
    else res.send(result).status(200);
  });
  


 


export default router


