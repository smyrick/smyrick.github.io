---
title: "GraphQL: Code-First and SDL-First Development"
date: "2021-02-01"
draft: false
path: "/blog/graphql-code-first-sdl-first-development"
featuredImage: ../images/graphql-logo.png
---

GraphQL allows API developers to add a type-system to their API and gives clients the ability to consume it with a query language.
There are many articles and posts available explaining [how GraphQL works](https://graphql.org/learn/), so in this post I would like to go over two different methodoligies of how to create a GraphQL API regardless of your technology or programming language.

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

## GraphQL Spec
GraphQL, just like OpenAPI, is only a [specification](https://spec.graphql.org/) and does not actually define how a schema should be built.
It just so happens that the reference implementation is in JavaScript follows a certain architectural style and so many other implementations have copied those patterns.



