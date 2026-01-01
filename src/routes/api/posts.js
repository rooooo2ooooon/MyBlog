const { Router } = require("express");

const postRouter = Router();

postRouter.post("/", (req, res) => {
    res.send("create post");
});
postRouter.get("/:postId", (req, res) => {
    const { postId } = req.params;
    res.json({ postId: parseInt(postId) });
});
postRouter.put("/:postId", (req, res) => {
    const { postId } = req.params;
    res.send(`update post ${postId}`);
});
postRouter.delete("/:postId", (req, res) => {
    const { postId } = req.params;
    res.send(`delete post ${postId}`);
});

module.exports = postRouter;
