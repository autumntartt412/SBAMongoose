import 'dotenv/config.js'
import express from 'express'
import mongoose from 'mongoose'
import routerDog from './routes/dogRoutes.js';
import routerNote from './routes/noteRoutes.js';
import routerUser from './routes/userRoutes.js';
// const data = require('./utilities/data');


const app = express();
const PORT = 3000;


//genersl middle ware 

app.use(express.json());
//app.use(express.urlencoded({ extended: true })); 


// Connect to Mongoose.
// You must specify the database you want to connect to in /conn strg.
// This defaults to the "test" database.

mongoose.connect(process.env.ATLAS_URI);


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


  // Start the Express server
  app.listen(PORT, () => {
      console.log(`Server is running on port: http://localhost:${PORT}`);
    });