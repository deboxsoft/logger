import { PinoLoggerProvider } from './PinoLoggerProvider';
import { createLoggerModule as _createLoggerModule } from '@deboxsoft/logger';
import { LoggerOptions } from 'pino';

export const createLoggerModule = (options?: LoggerOptions) => {
  const loggerProvider = new PinoLoggerProvider(options);
  return _createLoggerModule(loggerProvider);
};
