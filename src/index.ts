import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { schema } from './graphql'
import config from './config'

const app = express()
app.use(cors())

const server = new ApolloServer({
    schema,
    playground: true,
    introspection: true
})

server.applyMiddleware({app})

app.listen(config.port, () => {
    console.log(`http://localhost:${config.port}/graphql`)
})