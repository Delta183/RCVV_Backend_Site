import express from 'express';

import { getItems, createItem, getItem, updateItem, deleteItem} from '../controllers/vendorItems.js';
import auth from "../middleware/auth.js";

const router = express.Router();

// Request handlers
router.get('/', getItems);
router.post('/', auth, createItem);
router.get('/:id', auth, getItem);
router.patch('/:id', auth, updateItem);
router.delete('/:id', auth, deleteItem);

export default router;  