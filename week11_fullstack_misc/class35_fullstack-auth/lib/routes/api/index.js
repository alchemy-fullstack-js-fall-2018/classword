"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _poll = _interopRequireDefault(require("./poll"));

var _Router;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var resources = [_poll.default];

var _default = (_Router = (0, _express.Router)()).use.apply(_Router, ['/'].concat(resources));

exports.default = _default;
//# sourceMappingURL=index.js.map