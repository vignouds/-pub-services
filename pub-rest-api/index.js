const express = require('express');
const pubService = require('pub-services').services.pubServices;
const app = express();

app.get('/pubs', function (req, res) {
  const pubs = pubService.listerPubs();
  res.status(200).json();
})

app.get('/pubsOuverts', function (req, res) {
  const pubsOuverts = pubService.listerPubsOuverts();
  res.status(200).json();
})

app.listen(3000);
