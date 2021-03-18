const router = require('express').Router()
const { getProfile, updateProfile } = require('./profile')
const addClient = require('./client/add')
const deleteClient = require('./client/delete')
const getOneClient = require('./client/getOne')
const getAllClient = require('./client/getAll')
const transferClient = require('./client/transfer')
const generatePdf = require('./generatePdf')
const infoUpdate = require('./infoUpdate')
const recycledClients = require('./client/recycledClients')
const recycledClientRestore = require('./client/recycledClientRestore')
const deleteForever = require('./client/deleteForever')
const gatherEmails = require('./userPanel/gatherEmails')
const phoneContacts = require('./phoneContacts')

router.get('/', (req, res) => {
        res.send('API is live');
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
// Transfer Client
router.get('/transfer/:id', transferClient)
    // All client find....
router.get('/:year/clients', getAllClient)
    // All recycled clients find....
router.get('/recycled_clients', recycledClients)
    // Recovery recycled client...
router.get('/recover_client/:id', recycledClientRestore)
router.get('/delete_forever/:id', deleteForever)
    // Genterate PDF
router.get('/pdf/:id', generatePdf)
router.post('/user/subscribe', gatherEmails)
    // Phone Contacts
router.get('/phone_contacts', phoneContacts);

router.get('/test_contacts', (req, res) => {
    res.send(`<YealinkIPPhoneBook> 
  <Title>Yealink</Title>
  <Menu Name="Friend"> 
  <Unit Name="Lily" Phone1="3629"/> 
  <Unit Name="Abdur" Phone1="4646"/> 
  </Menu>
  <Menu Name="Family">
  <Unit Name="Frédéric" Phone1="3965"/> 
  </Menu> 
  </YealinkIPPhoneBook>`);
})

module.exports = router