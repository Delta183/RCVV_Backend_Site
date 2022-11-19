import express from 'express';

import { getItems, createItem, getItem, updateItem, deleteItem} from '../controllers/vendorItems.js';

const router = express.Router();

// Request handlers
router.get('/', getItems);
router.post('/', createItem);
router.get('/:id', getItem);
router.patch('/:id', updateItem);
router.delete('/:id', deleteItem);

export default router;  