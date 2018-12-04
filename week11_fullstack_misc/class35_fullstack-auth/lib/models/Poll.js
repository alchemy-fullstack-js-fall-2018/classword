"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = require("mongoose");

var pollSchema = new _mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  candidates: {
    type: [{
      name: String
    }]
  }
});

pollSchema.methods.results = function () {
  return this.model('Vote').aggregate([{
    $match: {
      pollId: this._id
    }
  }, {
    $unwind: '$votes'
  }, {
    $group: {
      _id: {
        candidateId: '$votes.candidateId',
        candidateName: '$votes.candidateName'
      },
      avgVote: {
        $avg: '$votes.vote'
      }
    }
  }, {
    $project: {
      _id: false,
      candidateName: '$_id.candidateName',
      candidateId: '$_id.candidateId',
      avgVote: '$avgVote'
    }
  }]);
};

var _default = (0, _mongoose.model)('Poll', pollSchema);

exports.default = _default;
//# sourceMappingURL=Poll.js.map