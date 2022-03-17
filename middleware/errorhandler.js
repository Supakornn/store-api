const errorhandler = (err, req, res, next) => {
  return res.status(500).json({ err: err.errors });
};
module.exports = errorhandler;
