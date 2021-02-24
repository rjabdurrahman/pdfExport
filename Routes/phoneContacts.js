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
  var token = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6IngxaTNjeklwZEduT1pHYkdSc2dVUXgzQl9oZ1NycHpzUmpCVy1LVXA3a1EiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2IzNDZiOTYxLTUxOTItNGViYi1hOTY0LTM0NGRkOGIyMDVkMC8iLCJpYXQiOjE2MTQxOTEzNjAsIm5iZiI6MTYxNDE5MTM2MCwiZXhwIjoxNjE0MTk1MjYwLCJhY2N0IjowLCJhY3IiOiIxIiwiYWlvIjoiQVRRQXkvOFRBQUFBNXR3SnpwL1d3WWcxMVlNUVc3a0FrU1JlNlZWRDY0MEdMZ1BqcDd0T3RnYnEyU2FZWnJUQWplL05lR2lYRE43OCIsImFtciI6WyJwd2QiXSwiYXBwX2Rpc3BsYXluYW1lIjoiT0F1dGggU2FuZGJveCIsImFwcGlkIjoiMzI2MTNmYzUtZTdhYy00ODk0LWFjOTQtZmJjMzljOWYzZTRhIiwiYXBwaWRhY3IiOiIxIiwiZW5mcG9saWRzIjpbXSwiZmFtaWx5X25hbWUiOiJFVkVSQUQiLCJnaXZlbl9uYW1lIjoiWXZlcyIsImlwYWRkciI6Ijk0LjI1Mi4xNC4xNiIsIm5hbWUiOiJFVkVSQUQgWXZlcyIsIm9pZCI6IjQwNzJiMGUzLWFhMDMtNDZmMC1hYWE4LWM4YjE2MTkwOGYzNCIsInB1aWQiOiIxMDAzQkZGREE5NEZDRTk1IiwicmgiOiIwLkFTRUFZYmxHczVKUnUwNnBaRFJOMkxJRjBNVV9ZVEtzNTVSSXJKVDd3NXlmUGtvaEFQRS4iLCJzY3AiOiJDYWxlbmRhcnMuUmVhZFdyaXRlIENhbGVuZGFycy5SZWFkV3JpdGUuU2hhcmVkIENvbnRhY3RzLlJlYWRXcml0ZSBDb250YWN0cy5SZWFkV3JpdGUuU2hhcmVkIE1haWwuUmVhZFdyaXRlIE1haWwuUmVhZFdyaXRlLlNoYXJlZCBNYWlsLlNlbmQgTWFpbC5TZW5kLlNoYXJlZCBNYWlsYm94U2V0dGluZ3MuUmVhZFdyaXRlIFBlb3BsZS5SZWFkIFRhc2tzLlJlYWRXcml0ZSBUYXNrcy5SZWFkV3JpdGUuU2hhcmVkIFVzZXIuUmVhZEJhc2ljLkFsbCIsInNpZCI6ImVjM2VmNTg3LWNmNmUtNGNhZi04MTdhLThmZDQ0NDc0NjhjNyIsInN1YiI6Ik1QY3JiQy1LdHd6OF9xSzhzZ00tQWhWTFFMWW5sRTF5VXpTVTFkMDRPNjgiLCJ0aWQiOiJiMzQ2Yjk2MS01MTkyLTRlYmItYTk2NC0zNDRkZDhiMjA1ZDAiLCJ1bmlxdWVfbmFtZSI6ImluZm9AeS1lLmx1IiwidXBuIjoiaW5mb0B5LWUubHUiLCJ1dGkiOiI3U0hQNUxpYzdFV3pUUjRPdG84dEFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.XWC7FN0Jdgjg4IdHbMK1RkgzK7VuB_FX-pdcMitS4LMOQ3Cyt96yhZLLWVLQNXVEfZQ-WfcShtp24PMxiAgvImb7kIs4MYTdfNQOcDzqhq4e4dW_objAlHSx8RULLEhPyfVotrBKteune4tiK0aRAUrBCk0yuZsJVMftGArtF979m795pcLPzETsIXuFcw5grIM7AP22ds1u2afEQcrSHUh_9ZoPUQIY-1d8xY-fH2U8G3CWip7q2s0E_gbG1fKXWd2HL5ydnEupNtEj5jGHceJ2OkJiQb8TvHpHd-mbMBCZJ9jazknJhe4Ffm7CtFJuXOXA0asBHwh4DpbncTqrYg';

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