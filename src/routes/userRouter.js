const { Router } = require("express");

const userRouter = Router();

userRouter.post("/", (req, res) => {
    res.send("create new user");
});

module.exports = userRouter;
