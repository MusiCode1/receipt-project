const { sequelize, DataTypes } = require('./sequelize');

const Receipts = sequelize.define('receipts', {

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    providers_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    file_path: {
        type: DataTypes.STRING,
        allowNull: false
    },

    amount: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
});

module.exports = {
    Receipts
};