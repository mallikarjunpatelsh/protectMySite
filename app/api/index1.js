const express = require('express');
const app = express();
const cors = require('cors');
const stripe = require('stripe')('sk_test_aajdqMYuuirU4l3BbqCqq0Ur00nDBODdnn');

app.use(cors());
// app.get("/", async function(req, res) {
//   const paymentIntent = await stripe.paymentIntents.create({
//     amount: 1099,
//     currency: 'inr',
//     // Verify your integration in this guide by including this parameter
//     metadata: {integration_check: 'accept_a_payment'},
//   });
//   const intent = paymentIntent
//   res.json({client_secret: intent.client_secret});
// });

app.get('/sqlmap', async function(req, res) {
  console.log(req.query.website);
  const { exec } = require('child_process');

  exec(
    `docker run --rm -v /tmp/sqlmap:/root/.sqlmap/ paoloo/sqlmap --url ${
      req.query.website
    }`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      res.end(stdout);
    },
  );
});

app.get('/wpscan', async function(req, res) {
  console.log(req.query.website);
  const { exec } = require('child_process');

  exec(
    `docker run --rm -v /tmp/sqlmap:/root/.sqlmap/ paoloo/sqlmap --url ${
      req.query.website
    }`,
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      res.end(stdout);
    },
  );
});

var server = app.listen(8000, function() {
  const host = server.address().address;
  const { port } = server.address();
  console.log('Example app listening at http://%s:%s', host, port);
});
