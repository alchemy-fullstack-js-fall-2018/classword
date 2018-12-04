"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var _Poll = _interopRequireDefault(require("../../models/Poll"));

var _Vote = _interopRequireDefault(require("../../models/Vote"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _express.Router)().post('/polls', function (req, res) {
  console.log(req.body);
  var _req$body = req.body,
      title = _req$body.title,
      candidates = _req$body.candidates;

  _Poll.default.create({
    title: title,
    candidates: candidates
  }).then(function (poll) {
    return res.json(poll);
  });
}).get('/polls', function (req, res) {
  _Poll.default.find().select({
    __v: false
  }).lean().then(function (polls) {
    return res.json(polls);
  });
}).get('/polls/:id', function (req, res) {
  var id = req.params.id;

  _Poll.default.findById(id).lean().then(function (poll) {
    return res.json(poll);
  });
}).post('/polls/:id/votes', function (req, res) {
  var id = req.params.id;
  var votes = req.body;

  _Poll.default.findById(id).then(function (poll) {
    return poll.candidates.map(function (candidate) {
      return {
        candidateId: candidate._id,
        candidateName: candidate.name,
        vote: votes[candidate._id] || -1
      };
    }).filter(function (_ref) {
      var vote = _ref.vote;
      return vote !== -1;
    });
  }).then(function (votes) {
    return _Vote.default.create({
      pollId: id,
      votes: votes
    });
  }).then(function (vote) {
    return res.json(vote);
  });
}).get('/polls/:id/votes', function (req, res) {
  var id = req.params.id;

  _Vote.default.find({
    pollId: id
  }).lean().then(function (vote) {
    return res.json(vote);
  });
}).get('/polls/:id/results', function (req, res) {
  var id = req.params.id;

  _Poll.default.findById(id).then(function (poll) {
    return poll.results();
  }).then(function (results) {
    return res.json(results);
  });
});

exports.default = _default;
//# sourceMappingURL=poll.js.map