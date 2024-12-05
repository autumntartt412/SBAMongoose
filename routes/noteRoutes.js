import  express from 'express'
const router = express.Router();
import db from "../db/conn.mjs"



// http://localhost:3000/note
  
  // GET a note
  router
  .route("/")
    .get(async (req, res, next) => { 
      const collection = await db.collection("notes")
      let result  = await collection.find({}).toArray() 
      console.log(result);
      res.send(result )

    })
  
    // POST a note
    .post(async (req, res) => {
      const collection = await db.collection("notes")
        const newNote = {
            comment: req.body.comment,  
        };

        let result  = await collection.insertOne(newNote)
      res.send(result).status(204);
     next(error)
      });



    export default router;