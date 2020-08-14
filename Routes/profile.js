module.exports = (req, res) => {
    res.json(req.cookies.user);
}