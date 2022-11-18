import express from 'express';

import { getArticles, createArticle, getArticle, updateArticle, deleteArticle} from '../controllers/articles.js';

const router = express.Router();

// Request handlers
router.get('/', getArticles);
router.post('/', createArticle);
router.get('/:id', getArticle);
router.patch('/:id', updateArticle);
router.delete('/:id', deleteArticle);

export default router;  