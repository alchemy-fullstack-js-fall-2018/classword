"use strict";

var _app = _interopRequireDefault(require("./routes/app"));

var _dotenv = require("dotenv");

var _connect = _interopRequireDefault(require("./utils/connect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _dotenv.config)();
(0, _connect.default)();
var PORT = process.env.PORT || 7890;

_app.default.listen(PORT, function () {
  console.log('Running on', PORT); // eslint-disable-line no-console
});
//# sourceMappingURL=index.js.map