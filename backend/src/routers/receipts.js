const { Router } = require("express");
const {
    models: { Receipts },
} = require("../models/index");

const receipts = Router();


receipts.get("/", async (req, res) => {

    const all_receipts = await Receipts.findAll();

    res.send(all_receipts);

});


receipts.get("/:id", async (req, res) => {

    const receipt = await Receipts.findByPk(req.params.id);

    res.send(receipt);

});


receipts.put("/", async (req, res) => {

    const { name, description, providers_id, file_path, amount } = req.body;

    try {
        const receipt = await Receipts.create({
            name,
            description,
            providers_id,
            file_path,
            amount,
        });

        res.send(receipt);
    } catch (error) {
        res.status(500).send(error);
    }



});


receipts.post("/:id", async (req, res) => {

    const { id } = req.params;

    const { name, description, providers_id, file_path, amount } = req.body;

    const receipt = await Receipts.update({
        name,
        description,
        providers_id,
        file_path,
        amount,
    }, {
        where: {
            id,
        },
    });

    const new_receipt = await Receipts.findByPk(id);

    res.send(new_receipt);

});

module.exports = {
    receipts
}

