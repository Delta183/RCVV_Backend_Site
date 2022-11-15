import mongoose from 'mongoose';

// The schema resembles a class in its attributes and objects
const articleSchema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    selectedFile: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

// Presumably this is the encapsulation of the model given a title and scheme which is promptly exported
var articleMessage = mongoose.model('articleMessage', articleSchema);

export default articleMessage;