const outlook = require('node-outlook');
const removeAccents = require('../helpers/removeAccents');
const { remove } = require('../Models/User');

module.exports = function (req, res) {
  //   res.send(`
  // +352691881116:yves testéàààààéééé'as:::
  // `);
  // Set the API endpoint to use the v2.0 endpoint
  outlook.base.setApiEndpoint('https://outlook.office.com/api/v2.0');

  // This is the oAuth token
  var token = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6Imp5NnhJM0F6YUtOSkpGczREMFBJRVRoX3c1c0NQajVXNGhFZ3loZWgxb00iLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2IzNDZiOTYxLTUxOTItNGViYi1hOTY0LTM0NGRkOGIyMDVkMC8iLCJpYXQiOjE2MTM4MzQ5MDEsIm5iZiI6MTYxMzgzNDkwMSwiZXhwIjoxNjEzODM4ODAxLCJhY2N0IjowLCJhY3IiOiIxIiwiYWlvIjoiQVRRQXkvOFRBQUFBVFk2T2k0b1BFRkRJSEQwM01nWWpDMWI5UU50WlhlV05TWEJ6bFBweWdibGw1b2NPK0tvZ3JHdnBlZmpzdGMyRSIsImFtciI6WyJwd2QiXSwiYXBwX2Rpc3BsYXluYW1lIjoiT0F1dGggU2FuZGJveCIsImFwcGlkIjoiMzI2MTNmYzUtZTdhYy00ODk0LWFjOTQtZmJjMzljOWYzZTRhIiwiYXBwaWRhY3IiOiIxIiwiZW5mcG9saWRzIjpbXSwiZmFtaWx5X25hbWUiOiJFVkVSQUQiLCJnaXZlbl9uYW1lIjoiWXZlcyIsImlwYWRkciI6Ijk0LjI1Mi4xMDIuMTQyIiwibmFtZSI6IkVWRVJBRCBZdmVzIiwib2lkIjoiNDA3MmIwZTMtYWEwMy00NmYwLWFhYTgtYzhiMTYxOTA4ZjM0IiwicHVpZCI6IjEwMDNCRkZEQTk0RkNFOTUiLCJyaCI6IjAuQVNFQVlibEdzNUpSdTA2cFpEUk4yTElGME1VX1lUS3M1NVJJckpUN3c1eWZQa29oQVBFLiIsInNjcCI6IkNhbGVuZGFycy5SZWFkV3JpdGUgQ2FsZW5kYXJzLlJlYWRXcml0ZS5TaGFyZWQgQ29udGFjdHMuUmVhZFdyaXRlIENvbnRhY3RzLlJlYWRXcml0ZS5TaGFyZWQgTWFpbC5SZWFkV3JpdGUgTWFpbC5SZWFkV3JpdGUuU2hhcmVkIE1haWwuU2VuZCBNYWlsLlNlbmQuU2hhcmVkIE1haWxib3hTZXR0aW5ncy5SZWFkV3JpdGUgUGVvcGxlLlJlYWQgVGFza3MuUmVhZFdyaXRlIFRhc2tzLlJlYWRXcml0ZS5TaGFyZWQgVXNlci5SZWFkQmFzaWMuQWxsIiwic2lkIjoiNWFlYWUwMjUtMjk2YS00ZjExLTg2NDQtMTVmNTNmNDMyZGI4Iiwic3ViIjoiTVBjcmJDLUt0d3o4X3FLOHNnTS1BaFZMUUxZbmxFMXlVelNVMWQwNE82OCIsInRpZCI6ImIzNDZiOTYxLTUxOTItNGViYi1hOTY0LTM0NGRkOGIyMDVkMCIsInVuaXF1ZV9uYW1lIjoiaW5mb0B5LWUubHUiLCJ1cG4iOiJpbmZvQHktZS5sdSIsInV0aSI6Ik0xQldYQVdTaEVTcDlHM2FVYnd2QUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.VUqAx3E-8vcFHlEbB0J5Itm1GeCpXImFEoKbszx_bHTEEuc4VFi02AQMzXBgs2lGvUD27zBM5slmAq-x8ffyRx-FngdxMht8-r1yMN7gr48TZviHW0ceKL5T4jBnn_wpXZFIBpzXo1OoDUZ3PISowtSrkyA_1QWrN4FPEw0BmtPcIxAtD70a_bfRHytCQNzLq3NBfwpOlPDDxJgqluYWbNLK-VvAFeRUo_rdP3ZHWYsgEwRy9Vc05wQo8uRNii2ksgpn1-zINiibO5AAErTrmOU3udqb_NJExmvNUGrqMRWtfuf0pqMLCNFaNJ2-vQ2-XIJwzGTUcAjh7-y9YsgDpA';

  // Set up oData parameters
  var queryParams = {
    '$select': 'GivenName,Surname,MobilePhone1,HomePhones',
    '$orderby': 'CreatedDateTime desc',
    '$top': 1000
  };

  // Pass the user's email address
  var userInfo = {
    email: 'info@y-e.lu'
  };

  outlook.contacts.getContacts({ token: token, odataParams: queryParams, user: userInfo },
    function (error, result) {
      if (error) {
        res.send(error);
      }
      else if (result) {
        let phoneStr = '';
        result.value.forEach(function (contact) {
          // console.log(contact);
          if (contact.MobilePhone1)
            phoneStr += `${contact.MobilePhone1.replace(/\s+/g, '')}:${contact.Surname ? removeAccents(contact.Surname) : ''} ${contact.GivenName ? removeAccents(contact.GivenName) : ''}:::\n`;
          if (contact.HomePhones.length)
            phoneStr += `${contact.HomePhones[0].replace(/\s+/g, '')}:${contact.Surname ? removeAccents(contact.Surname) : ''} ${contact.GivenName ? removeAccents(contact.GivenName) : ''}:::\n`;
          // "HomePhones": [],
          //     "MobilePhone1": "+352 621707801",
          //     "BusinessPhones": [],
        });
        res.send(phoneStr);
      }
    });
}