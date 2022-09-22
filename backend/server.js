const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { readdirSync } = require("fs");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

app.use(cors());
const userRoutes = require("./routes/user");

app.use("/", userRoutes);

app.get("/", (req, res) => {
  res.send("Welcome from home");
});
app.get("/books", (req, res) => {
  res.send("Welcome from books!!!! yay");
});

//routes
readdirSync("./routes").map((r) => app.use("/", require("./routes/" + r)));

//database
mongoose
  .connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
  })
  .then(() => console.log("Database connected successfully"))
  .catch((error) => console.log("Error connecting to mongodb", error));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
