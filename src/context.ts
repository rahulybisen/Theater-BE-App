import { PrismaClient } from '@prisma/client'
import { checkAuthorization } from "./security";
import { MysqlDBContext } from "./config/mysql"

const prisma = new PrismaClient();

export interface Context {
    prisma: PrismaClient,
    auth: any,
    request: any,
    Storage: any
}

export function createContext(req: any, apm: any, MYSQLDBPOOL: any): Context {
    try {
        let auth = checkAuthorization(req);
        return {
            prisma,
            Storage: { mysql: MYSQLDBPOOL },
            request: req,
            auth: auth
        }
    } catch (error) {
        console.log(error);
        throw Error("Error connecting to PrismaDB");
    }
}