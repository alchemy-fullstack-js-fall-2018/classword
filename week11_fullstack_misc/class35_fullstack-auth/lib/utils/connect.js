"use strict";

var _url = require("url");

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var log = function log(event, dbUrl) {
  return function () {
    // eslint-disable-next-line no-console
    console.log("".concat(event.toUpperCase(), ": connection to ").concat(dbUrl));
  };
};

var redactURLAuth = function redactURLAuth(url) {
  var parsedUrl = (0, _url.parse)(url);
  var redactedAuth = parsedUrl.auth ? '***:***@' : '';
  return "".concat(parsedUrl.protocol, "//").concat(redactedAuth).concat(parsedUrl.hostname, ":").concat(parsedUrl.port).concat(parsedUrl.path);
};

module.exports = function () {
  var dbUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : process.env.MONGODB_URI;

  _mongoose.default.connect(dbUrl, {
    useNewUrlParser: true
  });

  var redactedUrl = redactURLAuth(dbUrl);

  _mongoose.default.connection.on('error', log('error', redactedUrl));

  _mongoose.default.connection.on('open', log('open', redactedUrl));

  _mongoose.default.connection.on('close', log('close', redactedUrl));
};
//# sourceMappingURL=connect.js.map