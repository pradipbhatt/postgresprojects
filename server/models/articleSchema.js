import { DataTypes } from 'sequelize';

const createArticleModel = (sequelize) => {
    const Article = sequelize.define('Article', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        category: {
            type: DataTypes.STRING,
            allowNull: false, // Ensure this matches your database schema
            defaultValue: 'General', // Optional: set a default value if applicable
        },
        authorId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    });

    return Article;
};

export default createArticleModel;
