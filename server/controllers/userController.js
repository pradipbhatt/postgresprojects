import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import createUserModel from '../models/userSchema.js';
import { sequelize } from '../postgres/postgres.js';

const User = createUserModel(sequelize);

export const createUser = async (req, res) => {
    try {
        const { name, email, designation, empID, password } = req.body;

        // Check for missing fields
        if (!name || !email || !designation || !empID || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if email or empID is already in use
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use' });
        }

        const existingEmpID = await User.findOne({ where: { empID } });
        if (existingEmpID) {
            return res.status(400).json({ message: 'Employee ID already in use' });
        }

        // Create a new user
        const newUser = await User.create({ name, email, designation, empID, password });

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};


export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Check if both email and password are provided
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        // Find user by email
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        console.log('User found:', user); // Log the user object for debugging

        // Check if the password is correct
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        console.log('Password match successful'); // Log password match success

        // Generate JWT token using a hardcoded secret key
        const token = jwt.sign(
            { userId: user.id, email: user.email },
            'your-hardcoded-secret-key', // Use your custom hardcoded secret key
            { expiresIn: '1h' }
        );

        console.log('JWT Token generated:', token); // Log the generated token

        // Send token as a cookie (secure flag set based on environment)
        res.cookie('token', token, {
            httpOnly: true,
            secure: false, // Disable secure cookies for development
            sameSite: 'Strict',
            maxAge: 3600000, // 1 hour
        });

        // Return the token and its payload in the response
        res.status(200).json({
            message: 'Login successful',
            token: token,  // Send the JWT token itself
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                designation: user.designation,
                empID: user.empID,
            },
            tokenPayload: jwt.decode(token),  // Decode the token to get its payload
        });
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
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
            const { name, email, designation, empID, password } = req.body;

            if (!name || !email || !designation || !empID || !password) {
                return res.status(400).json({ message: 'All fields are required' });
            }

            // Hash the password before updating
            const hashedPassword = await bcrypt.hash(password, 10);

            await user.update({ name, email, designation, empID, password: hashedPassword });

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
