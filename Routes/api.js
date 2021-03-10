const router = require('express').Router()
const { getProfile, updateProfile } = require('./profile')
const addClient = require('./client/add')
const deleteClient = require('./client/delete')
const getOneClient = require('./client/getOne')
const getAllClient = require('./client/getAll')
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
    // All client find....
router.get('/clients', getAllClient)
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
    res.send(`<YealinklPPhoneBook> 
  <Title>Yealink</Title>
  <Menu Name="Saler"> 
  <Unit Name="Bella" default_photo="Resource:icon_family_b.png" Phone3="" Phone2="" Phone1="8111"/> 
  <Unit Name="Cindy" default_photo="Resource:icon_family_b.png" Phone3="" Phone2="" Phone1="8116"/> 
  <Unit Name="Miki" default_photo="Resource:icon_family_b.png" Phone3="" Phone2="" Phonel="81081"> 
  <Unit Name="Lynn" default_photo="Resource:icon_family_b.png" Phone3="" Phone2="" Phonel="81097"> 
  <Unit Name="Ian" default_photo="Resource:icon_family_b.png" Phone3="" Phone2="" Phonel="8107"/> 
  <Unit Name="Sharon" default_photo="Resource:icon_friend_b.png" Phone3="" Phone2="" Phonel="8113"/> 
  <Unit Name="Sanborn" default_photo="Resource:icon_blacklist_b.png" Phone3="" Phone2="" Phonel="8106"/> 
  <Unit Name="lessica" default_photo="Config:photo.png" Phone3="" Phone2="" Phonel="8117"/> 
  </Menu>
  <Menu Name="Friend"> 
  <Unit Name="Lily" default_photo="Config:photo.png" Phone3="" Phone2="" Phonel="3629"/> 
  </Menu>
  <Menu Name="Family">
  <Unit Name="Lucy" default_photc.i="Config:photo.png" Phone3="" Phone2="" Phonel="3965"/> 
  </Menu> 
  </YealinkIPPhoneBook>`)
})

module.exports = router