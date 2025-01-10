import express from 'express';
import {
    createArticle,
    getAllArticles,
    getArticleById,
    updateArticle,
    deleteArticle,
} from '../controllers/articleController.js';

const router = express.Router();

// Create a new article
router.post('/articles', createArticle);

// Get all articles
router.get('/articles', getAllArticles);

// Get a single article by ID
router.get('/articles/:id', getArticleById);

// Update an article
router.put('/articles/:id', updateArticle);

// Delete an article
router.delete('/articles/:id', deleteArticle);

export default router;
