# BONUS: GraphQL

## Agenda

* What is GraphQL?
* Explore the GraphQL language (queries)
  * query IDE
    * specify fields
    * alias fields
    * pass arguments
    * pass variables
    * create fragments
  * client.js
* Create a GraphQL express app
  * `express-graphql`
  * mongoose schema
  * graphql type
  * graphql schema
* Create GraphQL queries
* Create GraphQL mutations
* Explore the GraphQL language (mutation)
  * query IDE
  * client.js

## GraphQL

GraphQL is a query language (client side) and runtime
(server side). It can be used to replace REST services.

### Query Language

GraphQL provides a query language which clients can use
to request data. With this query language clients can
request exactly the data they want, and specify the shape
this data should take. This removes the need to create
multiple endpoints for different data needs.

For example, let's imagine we have a blog. On our blog
we want to load a post and all comments associated with
that post. We can make an endpoint that returns our post
and all comments:

```json
{
  "_id": "12345",
  "title": "My adventures with GraphQL",
  "content": "...",
  "comments": [
    { "id": "1", "content": "Great post"}
    ...
  ]
}
```

This strategy works on desktop, but once we start building
our mobile app we notice that loading all comments with our
post become a performance issue. We decide to create another
endpoint that only returns a post for our mobile app.

```json
{
  "_id": "12345",
  "title": "My adventures with GraphQL",
  "content": "...",
}
```

Now we have two endpoints to maintain.

With GraphQL we avoid this problem completely by allowing
the client to specify which data they want.

```graphql
query {
  post(id:"12345") {
    _id
    title
    content
    comments {
      _id
      content
    }
  }
}
```

and

```graphql
query {
  post(id:"12345") {
    _id
    title
    content
  }
}
```

### Runtime

On the server side we implement a GraphQL runtime.
By implementing this runtime we tell GraphQL how
to fetch  data from our database and how to mutate
data in our database.

#### GraphQL Types

First, we need to tell GraphQL about what our
data looks like (similar to mongoose). GraphQL
has a few types for us to use:

* Scalar types (single value)
  * ID: `GraphQLID`
  * String: `GraphQLString`
  * Number: `GraphQLInt`
  * Boolean: `GraphQLBoolean`
* Enum: `GraphQLEnumType`
* List: `GraphQLListType`
* Interface: `GraphQLInterfaceType`
* Union: `GraphQLUnionType`
* Input type (used for data mutation)

From the above types we can make our custom data
types. Each custom type includes a unique `name`,
`description` and `fields`. `fields` is a function
that returns an object specifying what properties
our data type has. For Example:

```js
const PersonType = new GraphQLObjectType({
  name: 'Person',
  description: 'A Person',
  fields: () => ({
    _id: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: GraphQLString },
    birthday: { type: new GraphQLNonNull(GraphQLString) }
  })
});
```

#### Queries and Mutations

Next, we need tell GraphQL what operations (queries and mutations)
to support. We define queries and mutations separately as
`GraphQLObjectType`. Inside of the `fields` property we define
the operations we support. Each operation should have a return
`type`, a `description`, and a `resolve`.

The `resolve` field tells GraphQL how to interact with our database.

```js
const Queries = new GraphQLObjectType({
  name: 'Queries',
  description: 'Root queries',
  fields: () => ({
    people: {
      type: new GraphQLList(PersonType),
      description: 'List of people',
      resolve: () => Person.find().then(prepare)
    },
    person: {
      type: PersonType,
      args: { id: { type: GraphQLID } },
      description: 'A Person',
      resolve: (_, { id }) => Person.findById(id).then(prepare)
    }
  })
});

const Mutations = new GraphQLObjectType({
  name: 'Mutations',
  description: 'Root mutations',
  fields: () => ({
    createPerson: {
      type: PersonType,
      args: {
        name: { type: GraphQLString },
        birthday: { type: GraphQLString }
      },
      resolve: (_, { name, birthday }) => Person.create({ name, birthday }).then(prepare)
    }
  })
});
```

#### Schema

Finally, we define a schema.

```js
const Schema = new GraphQLSchema({
  query: Queries,
  mutation: Mutations
});
```
