# Trend Trove Web

Discover and shop the latest trending products with our innovative e-commerce platform. Elevate your shopping experience with personalized recommendations and secure transactions.

An e-commerce project powered by Vite, React, and TypeScript, created for an frontend interview test.

Table of Contents

- [GraphQL Codegeneration](#graphql-codegen)
- [Available Scripts](#available-scripts)

## GraphQL Code Generator

This project connect API with [`@tanstack/react-query`](https://tanstack.com/query/v3/docs/react/overview) graphQL and the API powered by [`Stepzen`](https://stepzen.com/docs)

**Setup**

1. Add two environment variables into your `.env.local` like so

```
VITE_TREND_TROVE_GRAPHQL_URL="YOUR GRAPHQL SERVER URL"
VITE_AUTHORIZATION_KEY="YOUR TOKEN TO AUTHORIZE WHEN GENERATE GRAPHQL OPERATIONS"
```

2. Run `pnpm codegen` for generate the graphQL operations

3. After that, you have to remove the 2nd line of [operations file generated](src/graphQL/operations.ts)

```ts
import { RequestInit } from 'graphql-request/dist/types.dom'
```

The issue has not currently fix, so we have to delete manually.

4. Try to run `pnpm dev` to test that all queries should works

## Available Scripts

In the project directory, you can run:

### `pnpm dev`

Runs the app in the development mode.\
Open [http://localhost:5173/](http://localhost:5173/) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `pnpm codegen`

Runs the codegen script for graphQL codegeneration take a look at [here](src/graphQL)

### `pnpm preview`

Used to preview Vite projects in a production-like environment

### `pnpm build`

Builds the app for production to the `build` folder.
