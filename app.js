const express = require("express");
const app = express();
const postRouter = require("./src/routes/postRouter");

app.use("/posts", postRouter);

const PORT = 3000;
app.listen(PORT, (err) => {
    if (err) {
        throw err;
    }
    console.log(`Blog app - listening on port ${PORT}`);
});
