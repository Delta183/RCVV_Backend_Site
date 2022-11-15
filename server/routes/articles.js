import express from 'express';

import { getArticles } from '../controllers/articles.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('This works.')
});

export default router;