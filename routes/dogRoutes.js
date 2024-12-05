import  express from 'express'
const router = express.Router();
import db from "../db/conn.mjs"
  
  // http://localhost:3000/dog
  
  // GET a dog
  router
  .route("/")
    .get(async (req, res, next) => { 
      const collection = await db.collection("dogs")
      let result  = await collection.find({}).toArray() 
      console.log(result);
      res.send(result )
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

        let result  = await collection.insertOne(newDog)
      res.send(result).status(204);
     next(error)
      });
  


  // http://localhost:3000/dog/674f63eed8a6334a0f8c1546
  
  // GET a dog by its ID.
  // router
  // .route("/:id") 
  // .get(async (req, res, next) => {
  //   l
  //   const id = req.params.id;
  
  //   try {
  //     const dog = await Dog.findById(id); 
  //     if (!dog) {
  //       return res.status(404).send({ message: "Dog not found" });
  //     }
  //     res.status(200).send(dog);
  //   } catch (error) {
  //     next(error);  
  //   }
  // })
  //   // PUT update a dog by its ID
  //   .put(async (req, res, next) => {
  //     try {
  //       const updateDog = await Dog.findByIdAndUpdate(req.params.id, {
  //         name: req.body.name,
  //         breed: req.body.breed,
  //         color: req.body.color,
  //         gender: req.body.gender,
  //         age: req.body.age,
  //         isAvailable: req.body.available, 
  //       }, { new: true });
    
  //       if (!updateDog) {
  //         return res.status(404).send({ message: "Dog not found" });
  //       }
    
  //       res.status(200).send({ message: "Dog updated", dog: updateDog });
  //     } catch (error) {
  //       console.error(error);
  //       next(error);  
  //     }
  //   })
  
  // //DELETE a dog by its ID
  //   .delete(async (req, res) => {
  //     const id = req.params.id;
  
  //     try {
  //       const result = await Dog.findByIdAndDelete(id); 
  //       if (!result) {
  //         return res.status(404).send({ message: "Dog not found" });
  //       }
  //       res.status(200).send({ message: "Dog deleted" });
  //     } catch (error) {
  //      next(error)
  //     }
  //   });
export default router


