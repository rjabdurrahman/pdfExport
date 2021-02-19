const outlook = require('node-outlook');
module.exports = function (req, res) {
  //   res.send(`
  // +352691881116:yves testéàààààéééé'as:::
  // `);
  // Set the API endpoint to use the v2.0 endpoint
  outlook.base.setApiEndpoint('https://outlook.office.com/api/v2.0');

  // This is the oAuth token
  var token = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6ImJKeWtfNkNkdFZzVy1qaFBwTGg5Tk1TLWxXVHJhbkNwSVBiU29oUTVSUzQiLCJhbGciOiJSUzI1NiIsIng1dCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyIsImtpZCI6Im5PbzNaRHJPRFhFSzFqS1doWHNsSFJfS1hFZyJ9.eyJhdWQiOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0L2IzNDZiOTYxLTUxOTItNGViYi1hOTY0LTM0NGRkOGIyMDVkMC8iLCJpYXQiOjE2MTM2ODI1MTIsIm5iZiI6MTYxMzY4MjUxMiwiZXhwIjoxNjEzNjg2NDEyLCJhY2N0IjowLCJhY3IiOiIxIiwiYWlvIjoiQVRRQXkvOFRBQUFBZXpTQ0ZRSWhlU2FHdDNNY1M5TjBYQURZM3NhRksvMm1FTklwNlZpcVJZT1p6cmVSbjJ3cUwycXRZdUE1ZWMzbiIsImFtciI6WyJwd2QiXSwiYXBwX2Rpc3BsYXluYW1lIjoiT0F1dGggU2FuZGJveCIsImFwcGlkIjoiMzI2MTNmYzUtZTdhYy00ODk0LWFjOTQtZmJjMzljOWYzZTRhIiwiYXBwaWRhY3IiOiIxIiwiZW5mcG9saWRzIjpbXSwiZmFtaWx5X25hbWUiOiJFVkVSQUQiLCJnaXZlbl9uYW1lIjoiWXZlcyIsImlwYWRkciI6Ijk0LjI1Mi4zNi45NSIsIm5hbWUiOiJFVkVSQUQgWXZlcyIsIm9pZCI6IjQwNzJiMGUzLWFhMDMtNDZmMC1hYWE4LWM4YjE2MTkwOGYzNCIsInB1aWQiOiIxMDAzQkZGREE5NEZDRTk1IiwicmgiOiIwLkFTRUFZYmxHczVKUnUwNnBaRFJOMkxJRjBNVV9ZVEtzNTVSSXJKVDd3NXlmUGtvaEFQRS4iLCJzY3AiOiJDYWxlbmRhcnMuUmVhZFdyaXRlIENhbGVuZGFycy5SZWFkV3JpdGUuU2hhcmVkIENvbnRhY3RzLlJlYWRXcml0ZSBDb250YWN0cy5SZWFkV3JpdGUuU2hhcmVkIE1haWwuUmVhZFdyaXRlIE1haWwuUmVhZFdyaXRlLlNoYXJlZCBNYWlsLlNlbmQgTWFpbC5TZW5kLlNoYXJlZCBNYWlsYm94U2V0dGluZ3MuUmVhZFdyaXRlIFBlb3BsZS5SZWFkIFRhc2tzLlJlYWRXcml0ZSBUYXNrcy5SZWFkV3JpdGUuU2hhcmVkIFVzZXIuUmVhZEJhc2ljLkFsbCIsInNpZCI6ImVjM2VmNTg3LWNmNmUtNGNhZi04MTdhLThmZDQ0NDc0NjhjNyIsInN1YiI6Ik1QY3JiQy1LdHd6OF9xSzhzZ00tQWhWTFFMWW5sRTF5VXpTVTFkMDRPNjgiLCJ0aWQiOiJiMzQ2Yjk2MS01MTkyLTRlYmItYTk2NC0zNDRkZDhiMjA1ZDAiLCJ1bmlxdWVfbmFtZSI6ImluZm9AeS1lLmx1IiwidXBuIjoiaW5mb0B5LWUubHUiLCJ1dGkiOiJscVVZU2JkMTlVLUo3RDBCUzNXckFBIiwidmVyIjoiMS4wIiwid2lkcyI6WyI2MmU5MDM5NC02OWY1LTQyMzctOTE5MC0wMTIxNzcxNDVlMTAiLCJiNzlmYmY0ZC0zZWY5LTQ2ODktODE0My03NmIxOTRlODU1MDkiXX0.Tvp7_4PS8e7IuMjWqqW9er80Uun8M7IQKf6IFtkzC8HJ4cZTFptl39GgEYHry1Pvt9ewiN9U-sHkbEJdOnPEwRyI2qwM7tT-rYjnNs2V5vr9iEPvKmI_WweaFJ3bp303i44iTsA7P4ZcJA5nEtPB9LAVaQebJCOcP3KXGdVKXpgLtLgdfXEoVm8ac4qgnirsiITkqp-fVOhtwu6YFFaqSioVsnhcEs9SqZJKKv_E-Y0iW_CGblzacPwcTz8i_u6isvUEmW_qaJ3k92tx4Xo3ueXpwLpEZcI3PmfhIBfufMF8yV2tIaN4doWSqAC1p40FEV03P9hy0BIqCwU1dDfT2g';

  // Set up oData parameters
  var queryParams = {
    '$select': 'GivenName,Surname,MobilePhone1',
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
        let phoneStr;
        result.value.forEach(function (contact) {
          phoneStr += `${contact.MobilePhone1}:${contact.Surname} ${contact.GivenName}:::\n`;
          // "HomePhones": [],
          //     "MobilePhone1": "+352 621707801",
          //     "BusinessPhones": [],
        });
        res.send(phoneStr);
      }
    });
}