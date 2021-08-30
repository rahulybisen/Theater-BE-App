import { mutationResolver } from './Mutation/mutation'

export const Mutation = {
  createTicket: async (_, args, context) => {
    if (!context.auth) throw new Error(`un authorized access`);
    return await mutationResolver.createTicket(_, args, context)
  },
  updateTicket: async (_, args, context) => {
    console.log(context.auth)
    if (!context.auth) throw new Error(`un authorized access`);
    return await mutationResolver.updateGrade(_, args, context)
  },
  deleteTicket: async (_, args, context) => {
    if (!context.auth) throw new Error(`un authorized access`);
    return await mutationResolver.deleteTicket(_, args, context)
  }
}