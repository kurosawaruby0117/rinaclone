const { makeExecutableSchema } = require("apollo-server");
const { loadFilesSync, mergeTypeDefs, mergeResolvers } = require("graphql-tools");

const loadedTypes=loadFilesSync(`${__dirname}/**/*.typeDef.js`);
const loadedResolver=loadFilesSync(`${__dirname}/**/*.resolvers.js`)

export const typeDefs=mergeTypeDefs(loadedTypes);
export const resolvers=mergeResolvers(loadedResolver);


