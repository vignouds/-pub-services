var pubs = require('../mocks/pubs.json');
var moment = require('moment');

function listerPubs() {
  pubs.forEach(function(pub){
    console.log(pub);
  })
}

function listerPubsOuverts() {
  pubs.forEach(function(pub){
    if (pub.openDays.includes(moment().format("dddd"))) {
      console.log(pub);
    }
  })
}

module.exports = {
  listerPubs: listerPubs,
  listerPubsOuverts: listerPubsOuverts
}
