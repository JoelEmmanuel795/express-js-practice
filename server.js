const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("Here");
  res.render("index", { text: "World" });
});

const userRoutes = require("./routes/users");
const postRouter = require("./routes/posts");

app.use("/users", userRoutes);
app.use("/posts", postRouter);

app.listen(3000);
