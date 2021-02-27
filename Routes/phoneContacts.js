const outlook = require('node-outlook');
const axios = require('axios');
const qs = require('qs');


module.exports = function (req, res) {
  const APP_ID = 'bbe542cd-c9e2-41b3-a450-5cc568b9fb19';
  const APP_SECERET = '51hx5Qj~04sWG0L.8eX.6EBj-.5dLEo~-b';
  const TOKEN_ENDPOINT = 'https://login.microsoftonline.com/b346b961-5192-4ebb-a964-344dd8b205d0/oauth2/v2.0/token';
  const MS_GRAPH_SCOPE = 'https://graph.microsoft.com/.default';


  const postData = {
    client_id: APP_ID,
    scope: MS_GRAPH_SCOPE,
    client_secret: APP_SECERET,
    grant_type: 'client_credentials'
  };

  axios.defaults.headers.post['Content-Type'] =
    'application/x-www-form-urlencoded';

  axios
    .post(TOKEN_ENDPOINT, qs.stringify(postData))
    .then(response => {
      outlook.base.setApiEndpoint('https://graph.microsoft.com/v1.0');

      let queryParams = {
        '$select': 'GivenName,Surname,MobilePhone1,HomePhones,BusinessPhones',
        '$orderby': 'CreatedDateTime desc',
        '$top': 1000
      };

      let userInfo = {
        email: 'info@y-e.lu'
      };
      outlook.contacts.getContacts({ token: response.data.access_token, odataParams: queryParams, user: userInfo },
        function (error, result) {
          if (error) {
            res.send(error);
          }
          else if (result) {
            let phoneStr = `<hunnyIPPhoneDirectory clearlight="true">
            <Title>Phonelist</Title>
            <Prompt>Prompt</Prompt>`;
            result.value.forEach(function (contact) {
              if (contact.mobilePhone)
                phoneStr += `<DirectoryEntry>
                <Name>${contact.surname ? contact.surname + ' ': ''}${contact.givenName ? contact.givenName : ''}</Name>
                <Telephone>${contact.mobilePhone.replace(/\s+/g, '')}</Telephone>
                `;
              if (contact.homePhones.length)
                phoneStr += `<Telephone>${contact.homePhones[0].replace(/\s+/g, '')}</Telephone>
                `;
              if (contact.businessPhones.length)
                phoneStr += `<Telephone>${contact.businessPhones[0].replace(/\s+/g, '')}</Telephone>
                `;
              phoneStr += `</DirectoryEntry>`;
            });
            res.send(phoneStr + `</hunnyIPPhoneDirectory>`);
          }
        });
    })
    .catch(error => {
      console.log(error.message);
    });
}