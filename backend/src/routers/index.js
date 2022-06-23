const { providers } = require('./providers');
const { receipts } = require('./receipts');

const { Router } = require('express');

const api = Router();

api.use('/providers', providers);
api.use('/receipts', receipts);

module.exports = {
    api
};
