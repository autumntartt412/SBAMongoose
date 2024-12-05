const mongoose = require('mongoose');
import Note from "./models/Note.js";  


const noteSchema = new mongoose.Schema({
    comment: { type: String, required: false },
});


let Note = mongoose.model('Note', noteSchema);
module.exports = Note;

