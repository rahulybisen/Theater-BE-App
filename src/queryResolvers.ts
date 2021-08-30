import { Context } from './context'
import { queryResolver } from './Queries/query'

export const Query = {
  ticket: async (_, args, context: Context) => {
    console.log(new Date())
    if (!context.auth) throw new Error(`un authorized access`);
    return await queryResolver.ticket(_, args, context)
  },
  tickets: async (_, args, context) => {
    if (!context.auth) throw new Error(`un authorized access`);
    var result = <any>await queryResolver.tickets(_, args, context, "")
    return { edges: result.edges, aggregate: result.AggregateGrade }
  },
  moneyEarndByTheater: async (_, args, context) => {
    if (!context.auth) throw new Error(`un authorized access`);
    return await queryResolver.moneyEarndByTheater(_, args, context)
  },
  visited: async (_, args, context) => {
    if (!context.auth) throw new Error(`un authorized access`);
    return await queryResolver.visited(_, args, context)
  }
}