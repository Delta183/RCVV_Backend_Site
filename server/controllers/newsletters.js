import express from 'express';
import mongoose from 'mongoose';

// The controllers are connected to the models
import newsletterModel from '../models/newsletterModel.js';

// IMPORTANT - this particular line uses the same router in server/routes/articles.js
const router = express.Router();

// Asynchronous function such that they can return a promise
export const getNewsletters = async (request, result) => { 
    try {
        const newsletterModels = await newsletterModel.find();
        // HTTP status codes for success and error respectively
        result.status(200).json(newsletterModels);
    } catch (error) {
        result.status(404).json({ message: error.message });
    }
};

// req and res are request and result respectively. 
export const createNewsletter = async (request, result) => {
    const { title, content, creator, selectedFile} = request.body;

    const newNewsletter = new newsletterModel({ title, content, creator, selectedFile })

    try {
        await newNewsletter.save();

        result.status(201).json(newNewsletter );
    } catch (error) {
        result.status(409).json({ message: error.message });
    }
};

export const getNewsletter = async (req, res) => { 
    const { id } = req.params;

    try {
        const article = await newsletterModel.findById(id);
        
        res.status(200).json(article);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const updateNewsletter = async (req, res) => {
    const { id } = req.params;
    const { title, creator, content, selectedFile } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No newsletter with id: ${id}`);

    const updatedNewsletter = {title, creator, content, selectedFile, _id: id };

    await newsletterModel.findByIdAndUpdate(id, updatedNewsletter, { new: true });

    res.json(updatedNewsletter);
}


export const deleteNewsletter = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No newsletter with id: ${id}`);

    await newsletterModel.findByIdAndRemove(id);

    res.json({ message: "Newsletter deleted successfully." });
}


export default router;