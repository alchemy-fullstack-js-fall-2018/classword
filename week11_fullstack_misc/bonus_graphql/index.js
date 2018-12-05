require('dotenv').config();
require('./lib/utils/connect')()
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./lib/models/schema');
const { Person } = require('./lib/models/Person');

const app = express();

app.use((req, res, next) => {
  console.log(req.url);
  next();
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(7890);
