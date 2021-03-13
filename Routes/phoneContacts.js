const outlook = require('node-outlook');
const axios = require('axios');
const qs = require('qs');


module.exports = async function (req, res) {
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

  try {
    let { data } = await axios.post(TOKEN_ENDPOINT, qs.stringify(postData));
    let { access_token } = data;
    outlook.base.setApiEndpoint('https://graph.microsoft.com/v1.0');
    let response = await Promise.all([
      axios.get(`https://graph.microsoft.com/v1.0/users('info@y-e.lu')/contacts?$select=givenName,surname,categories,MobilePhone1,HomePhones,BusinessPhones&$top=1000`, { headers: { "Authorization": access_token } }),
      axios.get(`https://graph.microsoft.com/v1.0/users('info@y-e.lu')/contacts?$select=givenName,surname,categories,MobilePhone1,HomePhones,BusinessPhones&$top=1000&$skip=1000`, { headers: { "Authorization": access_token } })
    ]);
    let XML = `<YealinkIPPhoneBook> 
    <Title>Yealink</Title>`;
    let allContacts = [...response[0].data.value, ...response[1].data.value]
      .reduce(function (rv, x) {
        let phoneNumbers = [];
        if(x.mobilePhone) phoneNumbers.push(x.mobilePhone);
        if(x.homePhones.length) phoneNumbers.push(...x.homePhones);
        if(x.businessPhones.length) phoneNumbers.push(...x.businessPhones);
        let phoneNoXML = phoneNumbers.map((no, index) => `Phone${++index}="${no.replace(/\s/g, '')}"`).join('');
        let group = x['categories'] == "" ? "Sans catégorie" : x['categories'];
        let contactName = `${x.surname ? x.surname + ' ' : ''}${x.givenName ? x.givenName : ''}`;
        (rv[group] = rv[group] || []).push(`<Unit Name="${contactName}" ${phoneNoXML}/>`);
        return rv;
      }, {});
    for(group in allContacts) {
      XML += `<Menu Name="${group}">`;
      XML += allContacts[group].join('');
      XML += '</Menu>'
    }
    XML += `</YealinkIPPhoneBook>`;
    res.send(XML);
  } catch (err) {
    res.send('err' + err);
  }
}