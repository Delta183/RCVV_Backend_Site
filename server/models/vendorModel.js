import mongoose from 'mongoose';

// The schema resembles a class in its attributes and objects
const vendorSchema = mongoose.Schema({
    name: String,
    price: String,
    description: String,
    selectedFile: String,
    amount: Number,
})

// Presumably this is the encapsulation of the model given a title and scheme which is promptly exported
var vendorModel = mongoose.model('vendorModel', vendorSchema);

export default vendorModel;