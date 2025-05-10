const Article = require('../models/Articals.model');

exports.createArticle = async (req, res) => {
    const article = new Article({ ...req.body, author: req.user.id });
    await article.save();
    res.status(201).json(article);
};

exports.getAllArticles = async (req, res) => {
    const articles = await Article.find().populate('author', 'username');
    res.json(articles);
};

exports.getMyArticles = async (req, res) => {
    const articles = await Article.find({ author: req.user.id });
    res.json(articles);
};

exports.deleteArticle = async (req, res) => {
    await Article.findByIdAndDelete(req.params.id);
    res.json({ message: 'Article deleted' });
};