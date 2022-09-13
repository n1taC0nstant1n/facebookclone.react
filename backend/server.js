const express = require("express");
const cors = require("cors");
const { request } = require("express");
const app = express();
// const options = {
//   origin: "http://localhost:3000",
//   useSuccessStatus: 200,
// };
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome from home");
});
app.get("/books", (req, res) => {
  res.send("Welcome from books!!!! yay");
});
app.listen(8000, () => {
  console.log("Server is listening...");
});
