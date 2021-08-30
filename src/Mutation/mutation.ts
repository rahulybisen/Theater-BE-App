import { promises } from "dns";

export class mutationResolver {
    static async createTicket(_, args, context) {
        args.data['isActive'] = true;
        const dateVal = new Date();
        //const dateVal = new Date('06 JUN 2021 14:48 UTC');
        args.data.month = dateVal.getMonth()+1;
        args.data['createdAt'] = dateVal
        args.data['updatedAt'] = dateVal
        return new Promise(async (resolve, reject) => {
            try {
                var ticket = await context.prisma.ticket.create({
                    data: args.data,
                })
                ticket.createdAt = ticket.createdAt.toISOString();
                ticket.updatedAt = ticket.updatedAt.toISOString();
                resolve(ticket)
            } catch (error) {
                reject(error)
            }
        })
    }

    static async updateGrade(_, args, context) {
        args.data['updatedAt'] = new Date().toISOString();
        return new Promise(async (resolve, reject) => {
            try {
                var ticket = await context.prisma.ticket.update({
                    where: args.where,
                    data: args.data,
                })
                ticket.createdAt = ticket.createdAt.toISOString();
                ticket.updatedAt = ticket.updatedAt.toISOString();
                resolve(ticket)
            } catch (error) {
                reject(error)
            }
        })
    }

    static async deleteTicket(_, args, context) {
        return new Promise(async (resolve, reject) => {
            try {
                await context.prisma.ticket.delete({
                    where: args.where
                })
                resolve("Deleted successfully.")
            } catch (error) {
                reject(error)
            }
        })
    }
}