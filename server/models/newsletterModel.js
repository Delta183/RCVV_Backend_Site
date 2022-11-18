import mongoose from 'mongoose';

// The schema resembles a class in its attributes and objects
const newsletterSchema = mongoose.Schema({
    title: String,
    creator: String,
    content: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

// Presumably this is the encapsulation of the model given a title and scheme which is promptly exported
var newsletterModel = mongoose.model('newsletterModel', newsletterSchema);

export default newsletterModel;