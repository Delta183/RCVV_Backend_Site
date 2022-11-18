import mongoose from 'mongoose';

// The schema resembles a class in its attributes and objects
const volunteerSchema = mongoose.Schema({
    name: String,
    gender: String,
    age: String,
    jobs: [String],
})

// Presumably this is the encapsulation of the model given a title and scheme which is promptly exported
var volunteerModel = mongoose.model('volunteerModel', volunteerSchema);

export default volunteerModel;