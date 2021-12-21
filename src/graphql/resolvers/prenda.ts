import { IResolvers } from 'graphql-tools'
import data from '../../data/data.json'

export const prendaResolver: IResolvers = {
    Query: {
        getPrenda(){
            return data.prenda
        }
    }
}