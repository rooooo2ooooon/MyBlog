const { Router } = require("express");
const postRouter = require("./postRouter");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.send("index page");
});

indexRouter.use("/post", postRouter);

module.exports = indexRouter;
