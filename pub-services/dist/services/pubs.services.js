'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertIntoPub = convertIntoPub;
exports.listerPubs = listerPubs;
exports.listerPubsOuverts = listerPubsOuverts;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _Beer = require('../classes/Beer');

var _Owner = require('../classes/Owner');

var _Pub = require('../classes/Pub');

var _OpenHours = require('../classes/OpenHours');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pubs = require('../../mocks/pubs.json');
function convertIntoPub() {
  var pubsArray = [];
  pubs.forEach(function (pub) {
    var owner = new _Owner.Owner(pub.owner.firstName, pub.owner.lastName, pub.owner.mail);
    var bieres = [];

    pub.beers.forEach(function (beer) {
      var biere = new _Beer.Beer(beer.type, beer.name);
      bieres.push(biere);
    });

    var openHours = new _OpenHours.OpenHours(pub.openHours.start, pub.openHours.end);

    var bar = new _Pub.Pub(pub.name, owner, pub.openDays, openHours, bieres);

    pubsArray.push(bar);
  });
  return pubsArray;
};

function listerPubs() {
  console.log(convertIntoPub());
}

function listerPubsOuverts() {
  convertIntoPub().forEach(function (pub) {
    if (pub.openDays.includes((0, _moment2.default)().format("dddd"))) {
      console.log(pub);
    }
  });
}
//# sourceMappingURL=pubs.services.js.map