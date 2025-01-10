import { Sequelize } from 'sequelize';
import createUserModel from '../models/userSchema.js';
import createArticleModel from '../models/articleSchema.js'; // Import the article model

const sequelize = new Sequelize('pradip', 'pradip', 'pradip', {
    host: 'localhost',
    dialect: 'postgres',
});

let userModel = null;
let articleModel = null; // Declare the article model

const grantPermissions = async () => {
    try {
        await sequelize.query('GRANT CREATE ON SCHEMA public TO pradip');
        await sequelize.query('GRANT USAGE ON SCHEMA public TO pradip');
        console.log('Permissions granted successfully!');
    } catch (error) {
        console.error('Error granting permissions:', error);
    }
};

const connectToDatabase = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected to PostgreSQL database successfully!');
        
        await grantPermissions();
        
        // Initialize models
        userModel = createUserModel(sequelize);
        articleModel = createArticleModel(sequelize);

        // Define associations if any (example)
        userModel.hasMany(articleModel, { foreignKey: 'authorId' });
        articleModel.belongsTo(userModel, { foreignKey: 'authorId' });

        // Sync all models
        await sequelize.sync();
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
};

export { sequelize, userModel, articleModel }; // Export models
export default connectToDatabase;
