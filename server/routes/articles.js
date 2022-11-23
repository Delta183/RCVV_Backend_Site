import express from 'express';

import { getArticles, createArticle, getArticle, updateArticle, deleteArticle} from '../controllers/articles.js';
import auth from "../middleware/auth.js";

const router = express.Router();

// Request handlers
router.get('/', getArticles);
router.post('/', auth, createArticle);
router.get('/:id', auth, getArticle);
router.patch('/:id', auth,  updateArticle);
router.delete('/:id', auth, deleteArticle);

export default router;  