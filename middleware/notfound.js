const notfound = (req, res) => {
  res.status(404).send("Not Found Routes");
};

module.exports = notfound;
