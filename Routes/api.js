const router = require('express').Router()
const { getProfile, updateProfile } = require('./profile')
const addClient = require('./client/add')
const deleteClient = require('./client/delete')
const getOneClient = require('./client/getOne')
const getAllClient = require('./client/getAll')
const generatePdf = require('./generatePdf')
const infoUpdate = require('./infoUpdate')

router.get('/', (req, res) => {
  res.send('API is live')
})
// Get Profile
router.get('/profile', getProfile)
router.post('/profile', updateProfile)
// Adding new client.......
router.post('/addclient', addClient)
//client info update
router.post('/infoupdate/:id', infoUpdate)
// client delete
router.post('/delete/:id', deleteClient)
// Single client find....
router.get('/client/:id', getOneClient)
// All client find....
router.get('/clients', getAllClient)
// Genterate PDF
router.get('/pdf/:id', generatePdf)

module.exports = router
