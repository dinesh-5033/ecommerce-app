module.exports = (req, res, next) => {
  if (!req.user || req.user.role !== "admin") {
    return res.json({ message: "Access denied" });
  }
  next();
};