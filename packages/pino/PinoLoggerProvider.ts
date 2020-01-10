import pino from 'pino';
import { LoggerProvider } from '@deboxsoft/logger';

export class PinoLoggerProvider extends LoggerProvider {
  constructor(options?: pino.LoggerOptions) {
    super();
    const logger = pino(options);
    this.setLogger(logger);
  }
}
