module.exports = (req, res, next) => {
  const { phone } = req.body;

  if (!phone) {
    return res.status(401).json({ message: "4 missing fields" });
  };

  /* const phoneGex = '(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})';

  if (!phoneGex.test(phone)) {
    return res.status(401).json({ message: "missing fields" });
  }; */

  next();

};