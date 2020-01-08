import pino from 'pino';
import {registerLogger} from '@deboxsoft/logger'


export const createLogger = (options: pino.LoggerOptions): pino.Logger => {
    const logger = pino(options)
    registerLogger(logger)
    return logger;
};
