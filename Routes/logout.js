module.exports = (req, res) => {
    res.clearCookie('user')
    res.redirect('/')
}