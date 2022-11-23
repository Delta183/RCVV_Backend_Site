import express from 'express';

import { getNewsletters, createNewsletter, getNewsletter, updateNewsletter, deleteNewsletter} from '../controllers/newsletters.js';
import auth from "../middleware/auth.js";

const router = express.Router();

// Request handlers
router.get('/', getNewsletters);
router.post('/', auth, createNewsletter);
router.get('/:id', auth, getNewsletter);
router.patch('/:id', auth, updateNewsletter);
router.delete('/:id', auth, deleteNewsletter);

export default router;  