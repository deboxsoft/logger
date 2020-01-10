/* eslint-disable no-console */

import { GraphQLModule } from '@graphql-modules/core';
import { ILogger, LoggerProvider } from './LoggerProvider';

interface OptionsLoggerModule {
  logger?: ILogger;
}

export const createLoggerModule = (loggerProvider: LoggerProvider) =>
  new GraphQLModule({
    providers: [
      {
        provide: LoggerProvider,
        useValue: loggerProvider
      }
    ]
  });
