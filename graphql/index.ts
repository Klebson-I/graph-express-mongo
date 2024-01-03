export const typeDefs = `
    type User {
        id: String!
        email: String!
        username: String
    }

    type Query {
        user(id: String!): User
        users: [User]
    }

    type UserInput {
        email: String!
        username: String!
        id: String!
    }

    type Mutation {
        createUser: User
    }
`;

export const resolvers = {
    Query: {
        users() {
            return [{username: 'ok', email: 'ok', id: 'ok'}]
        },
        user() {
            return {username: 'ok', email: 'ok', id: 'ok'}
        },
    },
    Mutation: {},
}