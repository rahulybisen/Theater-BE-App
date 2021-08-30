import { auth } from './Mutation/auth'
import { Query } from './queryResolvers'
import { Mutation } from './mutationResolvers'

export const resolvers = {
  Query: {
    ...Query
  },
  Mutation: {
    ...Mutation,
    ...auth
  },
  Node: {
    __resolveType(obj, ctx, info) {
      return obj.__typename
    }
  }
}