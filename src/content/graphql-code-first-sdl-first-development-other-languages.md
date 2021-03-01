---
title: "GraphQL: Code-First and SDL-First Development in Other Languages"
date: "2021-02-01"
draft: false
path: "/blog/graphql-code-first-sdl-first-development-other-languages"
featuredImage: ../images/graphql-logo.png
---

GraphQL allows API developers to add a type-system to their API and gives clients the ability to consume it with a query language.
There are many articles and posts available explaining [how GraphQL works](https://graphql.org/learn/), so in this post I would like to go over two different methodoligies of how to create a GraphQL API regardless of your technology or programming language.

> Note: This post will be talking about server-side development.
> Client-side generation and schema management is a separate topic.

## Industry Trends
The latest trend in API development today is to have a schema or specification available and published with your API so clients can have more automated tooling. Whether you are using [OpenAPI](https://www.openapis.org/), [Protocol Buffers (protobuf)](https://developers.google.com/protocol-buffers), or [GraphQL](https://graphql.org/),
all of these technologies provide a way for clients to introspect the API and have more information on how to consume the data.

The technologies also share a debate on what is the "best" way to create and develop the code that runs on the server:
Should developers define the schema outside the programming language and generate API code, or should the schema definition be generated from code written by developers?

The majority of Protobuf developers follow the generate-code pattern as the most of [reference implementations](https://developers.google.com/protocol-buffers/docs/reference/overview) are written this way.
OpenAPI is a bit more mixed of different tools, however one of the more popular tools, [OpenAPI Generator](https://openapi-generator.tech/), also follows the generate-code approach.
GraphQL has one of the most varied landscapes. The reference JavaScript implementation, [graphql-js](https://github.com/graphql/graphql-js), was orginally built for a generate-schema approach,
but then [features were added](https://github.com/graphql/graphql-js/releases/tag/0.1.7) to support a model where developers write both the schema *and* the code, which doesn't follow any of these patterns.

This is where I want to compare the patterns in GraphQL and why GraphQL is different from other API schema specifications.

## GraphQL in JavaScript
GraphQL, just like OpenAPI, is only a [specification](https://spec.graphql.org/) and does not actually define how a schema should be built.
It just so happens that the reference implementation is in JavaScript follows a certain architectural style and so many other implementations have copied those patterns.

### Code-First (JS)
Code-First means that developers write the code that handles schema requests and then the GraphQL library is able to parse requests, send them to the schema, and validate the data returned matches defined types.
This usually means, however, that developers must write their code in a specific format or use special methods that are not "plain javascript".
This is because JavaScript does not have a type-system. Even if [TypeScript](https://www.typescriptlang.org/) is used the server responses need to be validated at runtime.
If we tried returning anything other than a string from the `hello` field the server should throw an error, as clients would be expecting to get a string.

```javascript
import { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        args: {
          name: { type: GraphQLString },
        },
        resolve: (_, args) => `Hello ${args.name || 'world'}`,
      },
    },
  }),
});

graphql(schema, getQueryFromClient()).then((result) => {
    console.log(result);
});
```

Looking at this simple schema, you can probably guess at what is going on even if this is your first time seeing GraphQL code.
We define the schema using built-in objects, and must follow certain patterns and fields when writing our functions provide all the type information.
As the schema grows to more fields and more complicated structures though, this model can become much more difficult to scan and
see what the schema looks like by just reading code.

### SDL-First (JS)
SDL-First (also called Schema-First) development aims to solve this problem by having developers write the schema in a
[Schema Definition Langauage (SDL)](https://graphql.org/learn/schema/#type-language) file first, then write code the that implements schema.

```graphql
# schema.graphql
type Query {
    hello(name: String): String
}
```

```javascript
import { graphql, buildSchema } from 'graphql';

const schema = buildSchema(readFile('schema.graphql'));

// Must match the exact names and type usage defined elsewhere
const resolvers = {
    hello: (name) => `Hello ${name || 'world'}`
};

graphql(schema, getQueryFromClient(), resolvers).then((response) => {
    console.log(response);
});
```

I personally think this approach is much easier to work with as it allows developers to discuss schema design before work is done in a common language.
It also allows us to easily understand the schema outside the development environment, like viewing on the web in GitHub, or sending the schema to a client.
The GraphQL community also seems to agree as most JS implementations follow a SDL-first approach.

### Code-First Alternatives (JS)
There are other alternatives to code-first developments, like [GraphQL Nexus](https://nexusjs.org/), but these tools still require you to use a specific object format.
You can not simply write the below object and give it to GraphQL to run.

```javascript
// DOES NOT WORK, NO SCHEMA INFO AVAILABLE
const schema = {
    hello: (name) => `Hello ${name || 'world'}`
};
```

## GraphQL in Java/Kotlin

TODO
