const express = require('express');
const router = express.Router();
const { createArticle, getAllArticles, getMyArticles, deleteArticle } = require('../controller/article.controller');
const { auth, adminOnly } = require('../middlewares/authMiddleware');

router.post('/', auth, createArticle);
router.get('/', auth, getAllArticles);
router.get('/mine', auth, getMyArticles);
router.delete('/:id', auth, adminOnly, deleteArticle);

module.exports = router;