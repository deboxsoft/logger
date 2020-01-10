import { createLoggerModule, LoggerProvider } from '../';
import { execute } from 'graphql';
import gql from 'graphql-tag';
import { GraphQLModule, ModuleContext } from '@graphql-modules/core';

describe('test LoggerModule', () => {
  it('cek berjalan tanpa error.', async () => {
    const loggerProvider = new LoggerProvider();
    const loggerModule = createLoggerModule(loggerProvider);
    const appModule = new GraphQLModule({
      typeDefs: `
        type Foo {
          id: String
          name: String
        }
        type Query {
          getFoo(id: String): Foo
        }
      `,
      resolvers: {
        Query: {
          getFoo: (root, { id }, { injector }: ModuleContext) => {
            injector.get(LoggerProvider).log('test');
            return { id };
          }
        }
      },
      imports: [loggerModule]
    });
    const { schema } = appModule;
    const result = await execute({
      schema,
      document: gql`
        {
          getFoo(id: "1") {
            id
            name
          }
        }
      `
    });
    expect(result.errors).toBeFalsy();
  });
});
