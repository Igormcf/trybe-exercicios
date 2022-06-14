module.exports = (req, res, next) => {
  const { password } = req.body;

  if (!password) {
    return res.status(401).json({ message: "2 missing fields" })
  };

  next();
};