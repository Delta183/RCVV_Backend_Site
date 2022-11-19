import express from 'express';
import mongoose from 'mongoose';
// CURRENTLY VERY SIMILAR TO THE ARTICLES CONTROLLER

// The controllers are connected to the models
import vendorModel from '../models/vendorModel.js';

const router = express.Router();

// Asynchronous function such that they can return a promise
export const getItems = async (request, result) => { 
    try {
        const vendorItemModels = await vendorModel.find();
        // HTTP status codes for success and error respectively
        result.status(200).json(vendorItemModels);
    } catch (error) {
        result.status(404).json({ message: error.message });
    }
};

// req and res are request and result respectively. 
export const createItem = async (request, result) => {
    const { title, price, description, selectedFile, amount } = request.body;

    const newVendorItem= new vendorModel({ title, price, description, selectedFile, amount })

    try {
        await newVendorItem.save();

        result.status(201).json(newVendorItem);
    } catch (error) {
        result.status(409).json({ message: error.message });
    }
};

export const getItem = async (request, result) => { 
    const { id } = request.params;

    try {
        const vendorItem = await vendorModel.findById(id);
        
        result.status(200).json(vendorItem);
    } catch (error) {
        result.status(404).json({ message: error.message });
    }
}

export const updateItem = async (request, result) => {
    const { id } = request.params;
    const { title, price, description, selectedFile, amount} = request.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return result.status(404).send(`No item with id: ${id}`);

    const updatedVendorItem = {title, price, description, selectedFile, amount, _id: id };

    await vendorModel.findByIdAndUpdate(id, updatedVendorItem, { new: true });

    result.json(updatedVendorItem);
}


export const deleteItem = async (request, result) => {
    const { id } = request.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return result.status(404).send(`No item with id: ${id}`);

    await vendorModel.findByIdAndRemove(id);

    result.json({ message: "Item deleted successfully." });
}


export default router;