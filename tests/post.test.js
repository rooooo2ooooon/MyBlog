const postRouter = require("../src/routes/postRouter");

const request = require("supertest");
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use("/posts", postRouter);

test("post route works", done => {
    request(app)
        .get("/posts/1")
        .expect("Content-Type", /json/)
        .expect({ postId: 1 })
        .expect(200, done);
});
