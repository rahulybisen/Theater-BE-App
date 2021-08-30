var appRoot = require('app-root-path');
var winston = require('winston');
const getNamespace = require('continuation-local-storage').getNamespace;
const logFileName = "cs-application.log"
const logPath = process.env.LOG_FOLDER_PATH? `${process.env.LOG_FOLDER_PATH}/${logFileName}` :`${appRoot}/logs/${logFileName}`;

// define the custom settings for each transport (file, console)
var options = {
  file: {
    level: 'info',
    filename: logPath,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false,
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    json: false,
    colorize: true,
  },
};

// instantiate a new Winston Logger with the settings defined above
var winstonLogger = winston.createLogger({
  transports: [
    new winston.transports.File(options.file),
    new winston.transports.Console(options.console)
  ],
  exitOnError: false, // do not exit on handled exceptions
});

if (process.env.NODE_ENV !== 'production') {
  winstonLogger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

// Wrap Winston logger to print reqId in each log
var formatMessage = function (message: any) {
  // const session = getNamespace('mysession');
  var reqId = "";
  return reqId ? { message: message, 'trace.id': reqId } : message;
};

export var logger = {
  log: function (level: any, message: any) {
    winstonLogger.log(level, formatMessage(message));
  },
  error: function (message: any) {
    winstonLogger.error(formatMessage(message));
  },
  warn: function (message: any) {
    winstonLogger.warn(formatMessage(message));
  },
  verbose: function (message: any) {
    winstonLogger.verbose(formatMessage(message));
  },
  info: function (message: any) {
    winstonLogger.info(formatMessage(message));
  },
  debug: function (message: any) {
    winstonLogger.debug(formatMessage(message));
  },
  silly: function (message: any) {
    winstonLogger.silly(formatMessage(message));
  }
};

