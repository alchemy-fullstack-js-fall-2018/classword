"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _api = _interopRequireDefault(require("./api"));

var _cors = _interopRequireDefault(require("../middleware/cors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use(_express.default.static('client/dist'));
app.use(_express.default.json());
app.use('/api', _cors.default, _api.default);
var _default = app;
exports.default = _default;
//# sourceMappingURL=app.js.map