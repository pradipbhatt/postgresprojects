import { sequelize } from '../postgres/postgres.js';  // Correctly import the sequelize instance
import createUserModel from '../models/userSchema.js'; // Import the function to create the model

// Generate the User model using the sequelize instance
const User = createUserModel(sequelize);

// Create a new user
export const createUser = async (req, res) => {
    try {
        const { name, email, designation, empID } = req.body;

        // Check if all required fields are provided
        if (!name || !email || !designation || !empID) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Create a new user in the database
        const newUser = await User.create({ name, email, designation, empID });

        // Return the created user as the response
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();

        if (users.length === 0) {
            return res.status(404).json({ message: 'No users found' });
        }

        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};

// Get a single user by ID
export const getUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);

        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching user by ID:', error);
        res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
};

// Update a user by ID
export const updateUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);

        if (user) {
            const { name, email, designation, empID } = req.body;

            // Check if all required fields are provided
            if (!name || !email || !designation || !empID) {
                return res.status(400).json({ message: 'All fields are required' });
            }

            // Update the user in the database
            await user.update({ name, email, designation, empID });

            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error updating user:', error);
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
};

// Delete a user by ID
export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);

        if (user) {
            await user.destroy();
            res.status(200).json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};
