/* eslint-disable no-console */

import { GraphQLModule } from '@graphql-modules/core';
import { ILogger, LoggerProvider } from './LoggerProvider';

interface OptionsLoggerModule {
  logger?: ILogger;
}

let loggerModule: GraphQLModule;

export const createLoggerModule = (loggerProvider: LoggerProvider) => {
  loggerModule = new GraphQLModule({
    providers: [
      {
        provide: LoggerProvider,
        useValue: loggerProvider
      }
    ]
  });
  return loggerModule;
};

export const getLoggerModule = () => loggerModule;
