import express from 'express';
import dotenv from 'dotenv';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs, resolvers } from './graphql/index';

dotenv.config();
const app = express();

const startServer = async () => {
    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use('/', expressMiddleware(apolloServer));

    app.listen(process.env.APP_PORT, () => {
        console.log(`App is running on localhost:${process.env.APP_PORT} !`);
    });
};

startServer();