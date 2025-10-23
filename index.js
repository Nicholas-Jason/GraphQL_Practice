import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone'
import { typeDefs } from "./schema";
import db from './_db.js'
//server setup
const resolvers ={
    Query: {
        games(){
            return db.games
        },
        reviews(){
            return db.reviews
        },
        authors(){
            return db.authors
        }
    }
}
const server = new ApolloServer({
    //typeDefs
    typeDefs
    // resolvers
    resolvers
})

const {url} = await startStandaloneServer(server,{
    listen: {port: 4000}
})

console.log('Server ready at port', 4000)

