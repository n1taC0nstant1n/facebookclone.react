exports.home = (req, res) => {
  //res.send("Welcome from user home");
  res.status(200).json({
    message: "Something",
    error: "Something else",
  });
};
