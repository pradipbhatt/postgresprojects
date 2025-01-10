import { Sequelize } from "sequelize";
import createUserModel from "../model/userSchema.js";

// Initialize Sequelize connection
const sequelize = new Sequelize('pradip', 'pradip', 'pradip', {
    host: 'localhost',
    dialect: 'postgres',
});

let userModel = null;

// Function to grant permissions for the user
const grantPermissions = async () => {
    try {
        // Grant CREATE and USAGE permissions on the public schema
        await sequelize.query('GRANT CREATE ON SCHEMA public TO pradip');
        await sequelize.query('GRANT USAGE ON SCHEMA public TO pradip');
        console.log('Permissions granted successfully!');
    } catch (error) {
        console.error('Error granting permissions:', error);
    }
};

// Function to connect to the database and sync the models
const connectToDatabase = async () => {
    try {
        // Authenticate the connection to the DB
        await sequelize.authenticate();
        console.log('Connected to PostgreSQL database successfully!');
        
        // Grant necessary permissions
        await grantPermissions();
        
        // Create the User model
        userModel = createUserModel(sequelize);
        
        // Synchronize the model with the database
        await sequelize.sync();
        console.log('All models were synchronized successfully.');
    } catch (error) {
        console.error('Failed to connect to the database:', error);
    }
};

export default connectToDatabase;
