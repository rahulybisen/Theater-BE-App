const mysql = require('mysql');
import { logger } from "../config/winston"

export class MysqlDBContext {
    public static async initMysqlDb(): Promise<any> {
        try {
            const mysqlDBPool = new mysql.createPool({
                connectionLimit: 10,
                host: process.env.MYSQL_HOST,
                user: process.env.MYSQL_USER,
                port: process.env.MYSQL_PORT,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE
            })
            logger.info("🔌 Connected to MySqlDB ....");
            console.log("🔌 Connected to MySqlDB ....");
            return mysqlDBPool;
        } catch (error) {
            logger.error(error);
            console.log(error);
            throw Error("Error connecting to MySqlDB");
        }
    };
}