const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./server/type-defs");
const { resolvers } = require("./server/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`YOUR API IS RUNNING AT: ${url} :)`);
});
