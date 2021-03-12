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
      axios.get(`https://graph.microsoft.com/v1.0/users('info@y-e.lu')/contacts?$select=GivenName,Surname,categories,MobilePhone1,HomePhones,BusinessPhones&$top=1000`, { headers: { "Authorization": access_token } }),
      axios.get(`https://graph.microsoft.com/v1.0/users('info@y-e.lu')/contacts?$select=GivenName,Surname,categories,MobilePhone1,HomePhones,BusinessPhones&$top=1000&$skip=1000`, { headers: { "Authorization": access_token } })
    ]);
    let allContacts = [...response[0].data.value, ...response[1].data.value]
      .reduce(function (rv, x) {
        (rv[x['categories']] = rv[x['categories']] || []).push(x);
        return rv;
      }, {});
    res.send(allContacts);
  } catch (err) {
    res.send('err' + err);
  }
}