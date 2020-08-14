module.exports = {
    getProfile: (req, res) => {
        res.json(req.cookies.user);
    },
    updateProfile: (req, res) => {
        res.send('Profile Updated!')
    }
}