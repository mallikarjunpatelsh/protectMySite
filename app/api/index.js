var express = require("express");
var app = express();
var cors = require('cors')
const AWS = require("aws-sdk");
const axios = require("axios");
const CLIENT_ID = 'H1GqwAj6I9zrNnRpipf86H9JU5DQQXu1CowOMCmGfNXjJ05vAYSl5fQGlkCEmBS6'
const CLIENT_SECRET = 'rO3JPpYh71h9sRdecQF63vqUrZlSZM5Gym12ic22Jk0Zn2VGT1GaAQj9fiQY_7z4'
const redirectUri = 'http://localhost:3000/login'

app.use(cors());
app.get("/", async function(req, res) {
  console.log(req.query.code)
  let redirectCode = req.query.code;
  let accessToken;
  let response;
  try {
    response = await axios({
        method:'POST',
        url: `https://www.patreon.com/api/oauth2/token?code=${redirectCode}&grant_type=authorization_code&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&redirect_uri=${redirectUri}`,
        headers: {
            'Content-Type': `application/x-www-form-urlencoded`,
            },
          data: {},
    });
    console.log(response.data);
    accessToken = response.data.access_token
  } catch (error) {
    console.log(error);
  }
  try {
     response = await axios({
        method:'GET',
        url: `https://www.patreon.com/api/oauth2/api/current_user/campaigns`,
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            },
          data: {},
    });
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
  let data = response.data
  res.end(JSON.stringify(data))
});


var server = app.listen(8080, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Example app listening at http://%s:%s", host, port);
});

