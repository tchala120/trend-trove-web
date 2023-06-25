import { CodegenConfig } from '@graphql-codegen/cli'

const url = process.env.VITE_TREND_TROVE_GRAPHQL_URL
const authorization = process.env.VITE_AUTHORIZATION_KEY

if (url == null || authorization == null) {
  throw Error()
}

const codegenConfig: CodegenConfig = {
  schema: [
    {
      [url]: {
        headers: {
          authorization,
        },
      },
    },
  ],
  documents: ['src/graphQL/documents/**.gql'],
  ignoreNoDocuments: true,
  generates: {
    './src/graphQL/operations.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query',
      ],
      config: {
        fetcher: 'graphql-request',
        skipTypename: true,
        exposeFetcher: true,
        exposeMutationKeys: true,
        exposeQueryKeys: true,
        exposeDocument: true,
        avoidOptionals: true,
        maybeValue: 'T',
      },
    },
  },
}

export default codegenConfig
