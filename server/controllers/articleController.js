import { articleModel, userModel } from '../postgres/postgres.js';

// Create a new article
export const createArticle = async (req, res) => {
    const { title, content, authorId } = req.body;

    if (!title || !content || !authorId) {
        return res.status(400).json({ message: 'Title, content, and authorId are required' });
    }

    try {
        const article = await articleModel.create({ title, content, authorId });
        res.status(201).json({ message: 'Article created successfully', article });
    } catch (error) {
        console.error('Error creating article:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// Get all articles
export const getAllArticles = async (req, res) => {
    try {
        const articles = await articleModel.findAll({
            include: [{ model: userModel, attributes: ['name', 'email'] }],
        });
        res.status(200).json({ articles });
    } catch (error) {
        console.error('Error fetching articles:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// Get a single article by ID
export const getArticleById = async (req, res) => {
    const { id } = req.params;

    try {
        const article = await articleModel.findByPk(id, {
            include: [{ model: userModel, attributes: ['name', 'email'] }],
        });

        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }

        res.status(200).json({ article });
    } catch (error) {
        console.error('Error fetching article:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// Update an article
export const updateArticle = async (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    try {
        const article = await articleModel.findByPk(id);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }

        article.title = title || article.title;
        article.content = content || article.content;
        await article.save();

        res.status(200).json({ message: 'Article updated successfully', article });
    } catch (error) {
        console.error('Error updating article:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};

// Delete an article
export const deleteArticle = async (req, res) => {
    const { id } = req.params;

    try {
        const article = await articleModel.findByPk(id);
        if (!article) {
            return res.status(404).json({ message: 'Article not found' });
        }

        await article.destroy();
        res.status(200).json({ message: 'Article deleted successfully' });
    } catch (error) {
        console.error('Error deleting article:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
};
