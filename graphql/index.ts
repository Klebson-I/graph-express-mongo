import { readFileSync } from 'fs';
import { join } from 'path';
import { TodoResolver } from './resolvers/todo.resolver';

const todoTypes = readFileSync(
    join(__dirname, './typeDefs/todo.graphql'),
    { encoding: 'utf-8' },
);

export const typeDefs = `
    ${todoTypes}
`;

export const resolvers = {
    Query: {
        ...TodoResolver.Query,
    },
    Mutation: {
        ...TodoResolver.Mutation,
    }
}