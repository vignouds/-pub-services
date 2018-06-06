"use strict";

var _pubs = require("./services/pubs.services");

var pubServices = _interopRequireWildcard(_pubs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

module.exports = {
  services: {
    pubServices: pubServices
  }
};
//# sourceMappingURL=index.js.map