const express = require("express");
const app = express();
const apiRouter = require("./src/routes/api/index");

app.use("/api", apiRouter);

const PORT = 3000;
app.listen(PORT, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Blog app - listening on port ${PORT}`);
});
