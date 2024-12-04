const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const bodyParser = require('body-parser');
const PORT = 3000;
const Dog = require("./models/Dog"); 
const Note = require("./models/Note"); 
const User = require("./models/User"); 
const dogRoutes = require('./routes/dogRoutes');
const noteRoutes = require('./routes/noteRoutes');
const userRoutes = require('./routes/userRoutes');
// const data = require('./utilities/data');


const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to Mongoose.
// You must specify the database you want to connect to in /conn strg.
// This defaults to the "test" database.

mongoose.connect(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error(err));




app.use('/dog', dogRoutes);
app.use('/note', noteRoutes);
app.use('/user', userRoutes);
// app.use('./dogData', data);
// app.use("/utilities/data", dogData);



// *********************** ROUTES *************************************

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