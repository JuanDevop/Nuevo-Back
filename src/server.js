import { GraphQLServer } from "graphql-yoga";
import path from 'path'
import resolvers from './graphql/resolvers'

const SECRET = 'ESTAESLACLAVE'

export const server = new GraphQLServer({
    typeDefs: path.join(__dirname,'graphql/schema.graphql'),
    resolvers,
    context:{
        SECRET
    }
})
