import  express from 'express'
const router = express.Router();
import db from "../db/conn.mjs"



// http://localhost:3000/user

// GET a user
router
.route("/")
  .get(async (req, res, next) => { 
    const collection = await db.collection("users")
    let result  = await collection.find({}).toArray() 
    console.log(result);
    res.send(result)

  })

  // POST a user
  .post(async (req, res) => {
    const collection = await db.collection("users")
      const newUser = {
          comment: req.body.comment,  
          
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            contactNumber: req.body.contactNumber,
            email: req.body.email,   
      };

      let result  = await collection.insertOne(newUser)
    res.send(result).status(204);
   next(error)
    });


export default router;
