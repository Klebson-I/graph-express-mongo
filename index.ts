import express from 'express';
import dotenv from 'dotenv';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { typeDefs, resolvers } from './graphql/index';
import mongoose from 'mongoose';
import { DbManagerImplementation } from './graphql/classes/DbManager/DbManager';
import { TodoDbManager } from './graphql/classes/DbManager/TodoDbManager';
import { Todo } from './graphql/classes/TodoHandler/types';
import { ObjectId } from 'mongoose';

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

    const mongo = await mongoose.connect(`${process.env.MONGODB_CONNECTION}`);
    new DbManagerImplementation(mongo);
    
    app.listen(process.env.APP_PORT, () => {
        console.log(`App is running on localhost:${process.env.APP_PORT} !`);
    });
};

startServer();