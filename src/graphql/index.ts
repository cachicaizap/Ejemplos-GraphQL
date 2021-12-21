import { GraphQLSchema } from 'graphql'
import { mergeSchemas } from 'graphql-tools'
import 'graphql-import-node'

import prenda from './schemas/prenda.graphql'

import { prendaResolver } from './resolvers/prenda'

export const schema: GraphQLSchema = mergeSchemas({
    schemas:[
        prenda
    ],
    resolvers:[
        prendaResolver
    ],
    mergeDirectives: true
})