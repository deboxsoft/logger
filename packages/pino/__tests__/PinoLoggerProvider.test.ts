import { PinoLoggerProvider } from '../PinoLoggerProvider';
import { LoggerProvider } from '@deboxsoft/logger';

describe('test PinoLoggerProvider', () => {
  it('check berjalan tanpa error', () => {
    const logger: LoggerProvider = new PinoLoggerProvider();
    logger.log('test');
  });
});
