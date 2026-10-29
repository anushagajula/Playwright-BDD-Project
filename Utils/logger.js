import winston from 'winston';
import fs from 'node:fs';
import path from 'node:path';
//import { fileURLToPath } from 'node:url';

//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

//const logDir = path.resolve(__dirname, '../Logs');
const logDir = path.resolve(process.cwd(), 'Logs');

// Create Logs folder if it doesn't exist.
fs.mkdirSync(logDir, { recursive: true });

const logger = winston.createLogger({
  level: process.env.LOG_LEVEL || 'info',

  format: winston.format.combine(
    winston.format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.errors({ stack: true }),
    winston.format.printf(
      ({ timestamp, level, message, stack }) =>
        `${timestamp} [${level.toUpperCase()}] ${stack || message}`
    )
  ),

  transports: [
    new winston.transports.Console(),

    new winston.transports.File({
      filename: path.join(logDir, 'execution.log')
    }),

    new winston.transports.File({
      filename: path.join(logDir, 'error.log'),
      level: 'error'
    })
  ]
});

export default logger;