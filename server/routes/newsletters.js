import express from 'express';

import { getNewsletters, createNewsletter, getNewsletter, updateNewsletter, deleteNewsletter} from '../controllers/newsletters.js';

const router = express.Router();

// Request handlers
router.get('/', getNewsletters);
router.post('/', createNewsletter);
router.get('/:id', getNewsletter);
router.patch('/:id', updateNewsletter);
router.delete('/:id', deleteNewsletter);

export default router;  