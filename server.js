const express = require('express');
const { ApolloServer, gql } = require ('@apollo/server');
const { startStandaloneServer } = require ('@apollo/server/standalone');
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const mongoose = require('mongoose');

async function startServer() {
    const app = express();
    const server = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await startStandaloneServer(server, {
        listen: { port: 4000 },

    });
    console.log(`🚀  Server ready`);
    await mongoose.connect('mongodb://127.0.0.1:27017',{
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    console.log(`mongoose connected`);

    
}
startServer();