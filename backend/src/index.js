
const express = require("express");
const { sequelize, models: { Receipts } } = require("./models/index");

const { api } = require("./routers/index");

const port = 3050;

const express_fn_promise = async () => {
    const app = express();

    app.use(express.json());

    app.use("/api", api);

    app.get("/", async (req, res) => {

        res.send("Hello World!");
    });

    app.listen(port, () => {
        console.log(`http://localhost:${port}/api/providers`);
    });
}


(async () => {

    await sequelize.sync({ force: true });

/*     Receipt.create({
        name: "Receipt 1",
        description: "Description 1",
        providers_id: 1,
        file_path: "File path 1",
        amount: 1,
    }); */

    express_fn_promise();

})();