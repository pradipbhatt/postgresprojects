import { DataTypes } from "sequelize";

// Function to create the User model
const createUserModel = (sequelize) => {
    const User = sequelize.define('User', {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            isLowercase: true,
            unique: true
        },
        designation: {
            type: DataTypes.STRING,
            allowNull: false
        },
        empID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    });

    return User;
};

// Export the function to create the User model
export default createUserModel;
