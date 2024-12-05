const mongoose = require('mongoose');
// import Dog from "./models/Dog"; 


const dogSchema = new mongoose.Schema ({
    name: { type: String, required: true },
    breed: { type: String, required: true },
    color: { type: String, required: true },
    gender: { type: String, required: true },
    age: { type: Number, required: false },
//  age: { type: Number, message: "The puppy must be older than 6 weeks.", required: false },
isAvailable: { type: Boolean, default: true },
});


// Compile the schema into a model and export it.
// Models are used much like classes to create instances
// of the objects that the schema describes.


let Dog = mongoose.model('Dog', dogSchema);
module.exports = Dog;








