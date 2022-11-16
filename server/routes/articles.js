import express from 'express';

import { getArticles, createArticle } from '../controllers/articles.js';

const router = express.Router();

router.get('/', (req, res) => {
    // res.send('This works.')
});
router.post('/', createArticle);

export default router;  