const { Router } = require("express");
const postRouter = require("./posts");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
    res.send("index page");
});

indexRouter.use("/posts", postRouter);

module.exports = indexRouter;
