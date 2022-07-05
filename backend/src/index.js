
const express = require("express");
const { sequelize, models: { Providers } } = require("./models/index");

const { api } = require("./routers/index");

const port = 3050;

const app = express();

app.use(express.json());

app.use("/api", api);

app.get("/", async (req, res) => {

    res.send("Hello World!");
});

module.exports = {
    app
}

const express_fn_promise = async () => {

    app.listen(port, () => {
        console.log(`http://localhost:${port}/api/providers`);
    });
}


(async () => {

    await sequelize.sync({ force: true });

    Providers.bulkCreate([
        {
            id: 1,
            name: "Some provider",
            address: "Address"
        }, {
            id: 2,
            name: "Some provider",
            address: "Address"
        }, {
            id: 3,
            name: "Some provider",
            address: "Address"
        }, {
            id: 4,
            name: "Some provider",
            address: "Address"
        }, {
            id: 5,
            name: "Some provider",
            address: "Address"
        }, {
            id: 6,
            name: "Some provider",
            address: "Address"
        }, {
            id: 7,
            name: "Some provider",
            address: "Address"
        }, {
            id: 8,
            name: "Some provider",
            address: "Address"
        }
    ]);

    /*     Receipt.create({
            name: "Receipt 1",
            description: "Description 1",
            providers_id: 1,
            file_path: "File path 1",
            amount: 1,
        }); */

    /* express_fn_promise(); */

})();