import { _ } from 'underscore';

const { makeOrderByPrisma2Compatible, makeWherePrisma2Compatible, } = require('@prisma/binding-argument-transform')

export class queryResolver {
    //get List
    static async tickets(_, args, context, orgId) {
        return new Promise(async (resolve, reject) => {
            try {
                const { where, orderBy, skip, first, last, after, before } = args
                const prisma2Where = makeWherePrisma2Compatible(where)
                const prisma2OrderBy = makeOrderByPrisma2Compatible(orderBy)
                const skipValue = skip || 0
                const prisma2Skip = Boolean(before) ? skipValue + 1 : skipValue
                const prisma2Take = Boolean(last) ? -last : first
                const prisma2Before = { id: before }
                const prisma2After = { id: after }
                const prisma2Cursor =
                    !Boolean(before) && !Boolean(after)
                        ? undefined
                        : Boolean(before)
                            ? prisma2Before
                            : prisma2After

                var manyTicket = context.prisma.ticket.findMany({
                    where: prisma2Where,
                    orderBy: prisma2OrderBy,
                    skip: prisma2Skip,
                    cursor: prisma2Cursor,
                    take: prisma2Take,
                })
                var count = context.prisma.ticket.count({
                    where: prisma2Where,
                })

                const [ManyTicketLst, ticketCount] = await context.prisma.$transaction([manyTicket, count])
                return resolve({ edges: ManyTicketLst, AggregateGrade: { count: ticketCount } })
            } catch (error) {
                reject(error)
            }
        });
    }

    // Get single
    static async ticket(_, args, context) {
        return new Promise(async (resolve, reject) => {
            try {
                console.log(args.where.id)
                var ticket = await context.prisma.ticket.findUnique({
                    where: args.where,
                })
                if (ticket && ticket.createdAt) {
                    ticket.createdAt = ticket.createdAt.toISOString();
                    ticket.updatedAt = ticket.updatedAt.toISOString();
                }
                return resolve(ticket)
            } catch (error) {
                reject(error)
            }
        })
    }

    static async moneyEarndByTheater(_, args, context) {
        return new Promise(async (resolve, reject) => {
            try {
                console.log(args.where.id)
                let arrRes = [];
                const fromDateMnth = new Date(args.where.fromDate);
                const toDateMnth = new Date(args.where.toDate);
                var fromMnth = fromDateMnth.getMonth() + 1;
                var toMonth = toDateMnth.getMonth() + 1;

                let ticketData = await context.prisma.$queryRaw(`select month, Sum(ticketPrice) AS tcktTtlPrice from Ticket where month >= ${fromMnth} AND month <= ${toMonth} group by month;`);
                if (ticketData && ticketData.length > 0) {
                    for (const key in ticketData) {
                        let result = { month: "", summaryProfit: 0 }
                        if (Object.prototype.hasOwnProperty.call(ticketData, key)) {
                            const element = ticketData[key];
                            let montName = "";
                            if (element.month == 1) montName = "January"
                            else if (element.month == 2) montName = "February"
                            else if (element.month == 3) montName = "March"
                            else if (element.month == 4) montName = "April"
                            else if (element.month == 5) montName = "May"
                            else if (element.month == 6) montName = "Jun"
                            else if (element.month == 7) montName = "July"
                            else if (element.month == 8) montName = "August"
                            else if (element.month == 9) montName = "September"
                            else if (element.month == 10) montName = "October"
                            else if (element.month == 11) montName = "November"
                            else if (element.month == 12) montName = "December"
                            result.month = montName
                            result.summaryProfit = element.tcktTtlPrice;
                            arrRes.push(result)
                        }
                    }
                }
                resolve(arrRes)
            } catch (error) {
                reject(error)
            }
        })
    }

    static async visited(_, args, context) {
        return new Promise(async (resolve, reject) => {
            try {
                console.log(args.where.id)
                let arrRes = [];
                const fromDateMnth = new Date(args.where.fromDate);
                const toDateMnth = new Date(args.where.toDate);
                var fromMnth = fromDateMnth.getMonth() + 1;
                var toMonth = toDateMnth.getMonth() + 1;

                let ticketData = await context.prisma.$queryRaw(`select month, count(id) AS totelPeople from Ticket where month >= ${fromMnth} AND month <= ${toMonth} group by month;`);
                if (ticketData && ticketData.length > 0) {
                    for (const key in ticketData) {
                        let result = { month: "", summaryVisits: 0 }
                        if (Object.prototype.hasOwnProperty.call(ticketData, key)) {
                            const element = ticketData[key];
                            let montName = "";
                            if (element.month == 1) montName = "January"
                            else if (element.month == 2) montName = "February"
                            else if (element.month == 3) montName = "March"
                            else if (element.month == 4) montName = "April"
                            else if (element.month == 5) montName = "May"
                            else if (element.month == 6) montName = "Jun"
                            else if (element.month == 7) montName = "July"
                            else if (element.month == 8) montName = "August"
                            else if (element.month == 9) montName = "September"
                            else if (element.month == 10) montName = "October"
                            else if (element.month == 11) montName = "November"
                            else if (element.month == 12) montName = "December"
                            result.month = montName
                            result.summaryVisits = element.totelPeople;
                            arrRes.push(result)
                        }
                    }
                }
                resolve(arrRes)
            } catch (error) {
                reject(error)
            }
        })
    }
}