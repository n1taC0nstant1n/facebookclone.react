const express = require("express");
const cors = require("cors");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());
const userRoutes = require("./routes/user");

app.use("/", userRoutes);
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

app.get("/", (req, res) => {
  res.send("Welcome from home");
});
app.get("/books", (req, res) => {
  res.send("Welcome from books!!!! yay");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
