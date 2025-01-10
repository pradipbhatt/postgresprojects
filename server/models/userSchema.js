// models/userSchema.js
import { DataTypes } from 'sequelize';

const createUserModel = (sequelize) => {
    return sequelize.define('User', {
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
        designation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        empID: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};

export default createUserModel;
