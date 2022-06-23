const { sequelize, DataTypes } = require('./sequelize');

const Providers = sequelize.define('providers', {
	id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},

	address: {
		type: DataTypes.STRING,
		allowNull: false
	}
});

module.exports = {
	Providers
};

