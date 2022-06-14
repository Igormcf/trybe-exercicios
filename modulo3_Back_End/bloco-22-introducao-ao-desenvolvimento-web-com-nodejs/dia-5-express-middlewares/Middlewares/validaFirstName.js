module.exports = (req, res, next) => {
  const { firstName } = req.body;

  if (!firstName) {
    return res.status(401).json({ message: "3 missing fields" });
  };

  next();
};