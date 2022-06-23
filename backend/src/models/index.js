const { sequelize, Sequelize } = require('./sequelize');
const { Providers } = require('./providers');
const { Receipts } = require('./receipts');

Receipts.belongsTo(Providers, { foreignKey: 'providers_id' });
Providers.hasMany(Receipts, { foreignKey: 'providers_id' });

module.exports = {
    sequelize,
    Sequelize,
    models: {
        Receipts,
        Providers
    }
};
