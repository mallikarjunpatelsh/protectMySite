const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

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
//TODO - Add API KEY for detailed result
//TODO - remove header (WPScan)
  exec(
    `wpscan --url ${req.query.website}`,
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
