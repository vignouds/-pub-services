const pubs = require('../../mocks/pubs.json');
import moment from 'moment';
import {Beer} from "../classes/Beer";
import {Owner} from "../classes/Owner";
import {Pub} from "../classes/Pub";
import {OpenHours} from "../classes/OpenHours";

export function convertIntoPub() {
  var pubsArray = [];
  pubs.forEach(function(pub){
    var owner = new Owner(pub.owner.firstName, pub.owner.lastName, pub.owner.mail);
    var bieres = [];

    pub.beers.forEach(function(beer){
      let biere = new Beer(beer.type, beer.name);
      bieres.push(biere);
    });

    var openHours = new OpenHours(pub.openHours.start, pub.openHours.end);

    var bar = new Pub(pub.name, owner, pub.openDays, openHours, bieres);

    pubsArray.push(bar);
  });
  return pubsArray;
};

export function listerPubs() {
  console.log(convertIntoPub());
}

export function listerPubsOuverts() {
  convertIntoPub().forEach(function(pub){
    if (pub.openDays.includes(moment().format("dddd"))) {
      console.log(pub);
    }
  })
}
