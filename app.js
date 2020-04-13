'use strict';

const express = require('express');
const request = require('request');
const app = express();

// [START hello_world]
// Say hello!
app.use(express.static("public"));

app.get('/', (req, res) => {
	res.sendFile(__dirname + "/index.html");
});
// [END hello_world]

if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;
