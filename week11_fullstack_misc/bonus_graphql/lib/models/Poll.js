const mongoose = require('mongoose');
const { prepareMongooseDoc } = require('../utils/graphql');
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList
} = require('graphql');

const CandidateType = new GraphQLObjectType({
  name: 'Candidate',
  description: 'Candidate in a poll',
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) }
  })
})

const PollType = new GraphQLObjectType({
  name: 'Poll',
  description: 'Poll for voting',
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLString) },
    title: { type: new GraphQLNonNull(GraphQLString) },
    candidates: { type: new GraphQLList(CandidateType) }
  })
});

const pollSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  candidates: [{
    name: { type: String, required: true }
  }]
});

pollSchema.methods.graphql = function () {
  return prepareMongooseDoc(this, ['candidates']);
}

const Poll = mongoose.model('Poll', pollSchema);

module.exports = {
  Poll,
  PollType
};
