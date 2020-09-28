module.exports = (req, res) => {
  res.clearCookie('user')
  res.send({
    success: true
  });
}
