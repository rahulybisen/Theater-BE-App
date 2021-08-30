require('dotenv').config()
const apm = "";
const cors = require('cors');
const uuid = require('uuid');
const express = require('express');
const app = express();
import { ApolloServer } from 'apollo-server-express'
import { typeDefs } from './schema'
import { resolvers } from './resolvers'
import { createContext } from './context'
import { MysqlDBContext } from './config/mysql'

app.options('*', cors())
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization,Cache-Control, Postman-Token");
  next();
});

let MYSQLDBPOOL;

const server = <any>new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }: any) => createContext(req, apm, MYSQLDBPOOL),
  formatError: (err) => {
    console.log(err)
    if (err.message.startsWith("Database Error: ")) {
      return new Error('Internal server error');
    }
    return err;
  }
});
server.applyMiddleware({ app, path: '/' });

var appServer;
const startServer = async () => {
  appServer = app.listen({ port: <number><any>process.env.PORT }, () => {
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}`);
  });
};

Promise.resolve().then(async () => {
  MYSQLDBPOOL = await MysqlDBContext.initMysqlDb();
  return { ...MYSQLDBPOOL }
}).catch((err) => console.log(err))
  .finally(async () => await startServer());

  export { appServer };