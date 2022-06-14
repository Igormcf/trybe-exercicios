module.exports = (req, res, next) => {
  const { email } = req.body;

  /* const emailGex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; */

  if (email === undefined) {
    return res.status(401).json({ message: "1 missing fields" });
  };

  /* if (!emailGex.test(email)) {
    return res.status(401).json({ message: "missing fields" });
  }; */

  next();
};