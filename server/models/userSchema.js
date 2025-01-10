// models/userSchema.js
import { DataTypes } from 'sequelize';
import bcrypt from 'bcryptjs';

const createUserModel = (sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        designation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        empID: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });

    // Hook to hash the password before saving it to the database
    User.beforeCreate(async (user) => {
        if (user.password) {
            user.password = await bcrypt.hash(user.password, 10); // Hashing the password
        }
    });

    return User;
};

export default createUserModel;
