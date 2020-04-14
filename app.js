//jshint esversion: 6
'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');

const app = express();

//specify view engine
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(express.static("public"));

app.get('/', function(req, res) {
  res.render('body', {
    page_title: "Home"
  });
});


app.get('/:custom_url', function(req, res) {
  const custom_url = _.kebabCase(req.params.custom_url);
  console.log(custom_url);

  switch (custom_url) {

    case "projects":
      render_page(res, custom_url);
      break;

    case "blog":
      render_page(res, custom_url);
      break;

    case "contact":
      render_page(res, custom_url);
      break;
  }

});



function render_page(res, custom_url) {
  console.log(`Rendering ${custom_url} page`);
  res.render('body', {
    page_title: _.capitalize(custom_url) +" Page"
  });
}





// Check if Port declared otherwise use 8080
if (module === require.main) {
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
}
module.exports = app;
