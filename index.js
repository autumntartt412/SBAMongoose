import 'dotenv/config.js';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import routerDog  from './routes/dogRoutes.js';
import routerNote  from './routes/noteRoutes.js';
import routerUser  from './routes/userRoutes.js';
// const data = require('./utilities/data');


const app = express();
const PORT = 3000;

//general middle ware 
app.use(cors());
app.use(express.json());  
//app.use(express.urlencoded({ extended: true })); 

// Connect to Mongoose.
// You must specify the database you want to connect to in /conn strg.
// This defaults to the "test" database.
await mongoose.connect(process.env.ATLAS_URI);

 // importing routes 

app.use('/dog', routerDog);
app.use('/note', routerNote);
app.use('/user', routerUser);
// app.use('./dogData', data);
// app.use("/utilities/data", dogData);

app.get("/", (req, res) => {
  res.send("Welcome to the Dog API.");
});




// Seeding 
// app.get('/seed', async (req, res) => {
//   await Dog.deleteMany({});
//   await Dog.insertMany(dogData);
//   res.send('done!');
// });
 



// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Seems like we messed up somewhere...");
});
  
  // Start the Express server
  app.listen(PORT, () => {
      console.log(`Server is running on port: http://localhost:${PORT}`);
    });