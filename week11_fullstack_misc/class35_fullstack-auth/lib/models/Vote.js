"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var voteSchema = new _mongoose.Schema({
  pollId: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Poll'
  },
  votes: {
    type: [{
      candidateId: {
        type: String,
        required: true
      },
      candidateName: {
        type: String,
        required: true
      },
      vote: {
        type: Number,
        required: true
      }
    }]
  }
});

var _default = (0, _mongoose.model)('Vote', voteSchema);

exports.default = _default;
//# sourceMappingURL=Vote.js.map