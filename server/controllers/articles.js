import express from 'express';
import mongoose from 'mongoose';

// The controllers are connected to the models
import ArticleMessage from '../models/articleMessage.js';

// IMPORTANT - this particular line uses the same router in server/routes/articles.js
const router = express.Router();

// Asynchronous function such that they can return a promise
export const getArticles = async (request, result) => { 
    try {
        const articleMessages = await ArticleMessage.find();
        // HTTP status codes for success and error respectively
        result.status(200).json(articleMessages);
    } catch (error) {
        result.status(404).json({ message: error.message });
    }
};

// req and res are request and result respectively. 
export const createArticle = async (request, result) => {
    const { title, content, creator, selectedFile} = request.body;

    const newArticleMessage = new ArticleMessage({ title, content, creator, selectedFile })

    try {
        await newArticleMessage.save();

        result.status(201).json(newArticleMessage );
    } catch (error) {
        result.status(409).json({ message: error.message });
    }
};

export const getArticle = async (request, result) => { 
    const { id } = request.params;

    try {
        const article = await ArticleMessage.findById(id);
        
        result.status(200).json(article);
    } catch (error) {
        result.status(404).json({ message: error.message });
    }
}

export const updateArticle = async (request, result) => {
    const { id } = request.params;
    const { title, creator, content, selectedFile } = request.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return result.status(404).send(`No article with id: ${id}`);

    const updatedArticle = {title, creator, content, selectedFile, _id: id };

    await ArticleMessage.findByIdAndUpdate(id, updatedArticle, { new: true });

    result.json(updatedArticle);
}


export const deleteArticle = async (request, result) => {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return result.status(404).send(`No article with id: ${id}`);

    await ArticleMessage.findByIdAndRemove(id);

    result.json({ message: "Article deleted successfully." });
}


export default router;