const { PollType, Poll } = require('./Poll');
const { prepareMongooseDoc } = require('../utils/graphql');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLSchema,
  GraphQLString
} = require('graphql');

const prepareObj = obj => {
  if (typeof obj.graphql === 'function') return obj.graphql();

  return prepareMongooseDoc(obj);
}

const prepare = obj => {
  if (Array.isArray(obj)) return obj.map(prepareObj);
  return prepareObj(obj);
};

const RootType = new GraphQLObjectType({
  name: 'IRVSchema',
  description: 'IRV root schema',
  fields: () => ({
    polls: {
      type: new GraphQLList(PollType),
      description: 'List Polls',
      resolve: () => Poll.find().then(prepare)
    },
    poll: {
      type: PollType,
      args: { id: { type: GraphQLString } },
      description: 'IRV Poll',
      resolve: (_, args) => Poll.findById(args.id).then(prepare)
    }
  })
});

const IRVSchema = new GraphQLSchema({
  query: RootType
});

module.exports = IRVSchema;
