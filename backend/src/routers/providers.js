const { Router } = require("express");
const {
    models: { Providers },
} = require("../models/index");


const providers = Router();

providers.get("/", async (req, res) => {

    const all_providers = await Providers.findAll();

    res.send(all_providers);

});

providers.get("/:id", async (req, res) => {

    const provider = await Providers.findByPk(req.params.id);

    res.send(provider);

});

providers.put("/", async (req, res) => {

    const { name, address } = req.body;

    const provider = await Providers.create({
        name,
        address,
    });

    res.send(provider);

});

providers.post("/:id", async (req, res) => {

    const { id } = req.params;

    const { name, address } = req.body;

    const provider = await Providers.update({
        name,
        address,
    }, {
        where: {
            id,
        },
    });

    const new_provider = await Providers.findByPk(id);

    res.send(new_provider);

});

module.exports = {
    providers
};