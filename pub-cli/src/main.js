var service = require('pub-services');

function getListPub() {
  service.services.pubServices.listerPubs();
}
function getListOpenedPub() {
  service.services.pubServices.listerPubsOuverts();
}

module.exports = {
  getListPub: getListPub,
  getListOpenedPub: getListOpenedPub
}
