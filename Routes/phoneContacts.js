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
  var token = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IjBHbXJLVWdybHQ2ZDV2SW1jSmVkRmlCTlVSbVBWWkFfRHhUY3R1ZmxEczQiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2IzNDZiOTYxLTUxOTItNGViYi1hOTY0LTM0NGRkOGIyMDVkMC8iLCJpYXQiOjE2MTM4Mzk0OTAsIm5iZiI6MTYxMzgzOTQ5MCwiZXhwIjoxNjEzODQzMzkwLCJhY2N0IjowLCJhY3IiOiIxIiwiYWlvIjoiQVRRQXkvOFRBQUFBb1I3MTVIaHRqVDIrMldpbWZjK1laNXhmdkNYd3Q3ZXhtKzNDVThSN0ZUWWJDYlZMU0V4ZENibExTUnR1MWo3OCIsImFtciI6WyJwd2QiXSwiYXBwX2Rpc3BsYXluYW1lIjoiT0F1dGggU2FuZGJveCIsImFwcGlkIjoiMzI2MTNmYzUtZTdhYy00ODk0LWFjOTQtZmJjMzljOWYzZTRhIiwiYXBwaWRhY3IiOiIxIiwiZW5mcG9saWRzIjpbXSwiZmFtaWx5X25hbWUiOiJFVkVSQUQiLCJnaXZlbl9uYW1lIjoiWXZlcyIsImlwYWRkciI6Ijk0LjI1Mi4xMDIuMTQyIiwibmFtZSI6IkVWRVJBRCBZdmVzIiwib2lkIjoiNDA3MmIwZTMtYWEwMy00NmYwLWFhYTgtYzhiMTYxOTA4ZjM0IiwicHVpZCI6IjEwMDNCRkZEQTk0RkNFOTUiLCJyaCI6IjAuQVNFQVlibEdzNUpSdTA2cFpEUk4yTElGME1VX1lUS3M1NVJJckpUN3c1eWZQa29oQVBFLiIsInNjcCI6IkNhbGVuZGFycy5SZWFkV3JpdGUgQ2FsZW5kYXJzLlJlYWRXcml0ZS5TaGFyZWQgQ29udGFjdHMuUmVhZFdyaXRlIENvbnRhY3RzLlJlYWRXcml0ZS5TaGFyZWQgTWFpbC5SZWFkV3JpdGUgTWFpbC5SZWFkV3JpdGUuU2hhcmVkIE1haWwuU2VuZCBNYWlsLlNlbmQuU2hhcmVkIE1haWxib3hTZXR0aW5ncy5SZWFkV3JpdGUgUGVvcGxlLlJlYWQgVGFza3MuUmVhZFdyaXRlIFRhc2tzLlJlYWRXcml0ZS5TaGFyZWQgVXNlci5SZWFkQmFzaWMuQWxsIiwic2lkIjoiZWMzZWY1ODctY2Y2ZS00Y2FmLTgxN2EtOGZkNDQ0NzQ2OGM3Iiwic3ViIjoiTVBjcmJDLUt0d3o4X3FLOHNnTS1BaFZMUUxZbmxFMXlVelNVMWQwNE82OCIsInRpZCI6ImIzNDZiOTYxLTUxOTItNGViYi1hOTY0LTM0NGRkOGIyMDVkMCIsInVuaXF1ZV9uYW1lIjoiaW5mb0B5LWUubHUiLCJ1cG4iOiJpbmZvQHktZS5sdSIsInV0aSI6IjdRdHJwVUVOY2tpZHZHTW45ejAxQUEiLCJ2ZXIiOiIxLjAiLCJ3aWRzIjpbIjYyZTkwMzk0LTY5ZjUtNDIzNy05MTkwLTAxMjE3NzE0NWUxMCIsImI3OWZiZjRkLTNlZjktNDY4OS04MTQzLTc2YjE5NGU4NTUwOSJdfQ.UxkAYorNWKsqgqxxVSiHEJulvx9zl0R8RoAQbowtuJKX_NVWCIs5IsiYM1doJHZpaDVhDSpiey58ozgTSbvxqS8uv-VjlyQDin1ErckBBAcnJmFf8DR3R7a0us8JD8WJ4qQrhLJal--3mZjj2EgaIIfNxCxMeGu8F_i2JrAsThWntsGYh-XMuo6_k_cZLJIDs_iw_-QMtm15lLzv_T12b1J3uAo07rRZhDw_p_oC4e1Q4nxv0Eu0Z65WgiIFo-MShenXecKfFvqzTcScynuEhVbRw0QDoAroLPRuX_oq3Ozu7bxOwERKciw9PjE4c2xSVuAwdMF38TjSwk_rpKWOHw';

  // Set up oData parameters
  var queryParams = {
    '$select': 'GivenName,Surname,MobilePhone1,HomePhones,BusinessPhones',
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
          console.log(contact);
          if (contact.MobilePhone1)
            phoneStr += `${contact.MobilePhone1.replace(/\s+/g, '')}:${contact.Surname ? removeAccents(contact.Surname) : ''} ${contact.GivenName ? removeAccents(contact.GivenName) : ''}:::\n`;
          if (contact.HomePhones.length)
            phoneStr += `${contact.HomePhones[0].replace(/\s+/g, '')}:${contact.Surname ? removeAccents(contact.Surname) : ''} ${contact.GivenName ? removeAccents(contact.GivenName) : ''}:::\n`;
          if (contact.BusinessPhones.length)
            phoneStr += `${contact.BusinessPhones[0].replace(/\s+/g, '')}:${contact.Surname ? removeAccents(contact.Surname) : ''} ${contact.GivenName ? removeAccents(contact.GivenName) : ''}:::\n`;
        });
        res.send(phoneStr);
      }
    });
}