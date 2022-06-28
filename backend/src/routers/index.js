const { providers } = require('./providers');
const { receipts } = require('./receipts');

const { Router } = require('express');

const api = Router();

api.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    next();
});

api.use('/providers', providers);
api.use('/receipts', receipts);

module.exports = {
    api
};
