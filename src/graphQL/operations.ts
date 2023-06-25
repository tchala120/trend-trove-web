import { GraphQLClient } from 'graphql-request'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
    }

function fetcher<TData, TVariables extends Record<string, unknown>>(
  client: GraphQLClient,
  query: string,
  variables?: TVariables,
  requestHeaders?: RequestInit['headers']
) {
  return async (): Promise<TData> =>
    client.request({
      document: query,
      variables,
      requestHeaders,
    })
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type ProductsEntry = {
  __typename?: 'ProductsEntry'
  brand?: Maybe<Scalars['String']['output']>
  category?: Maybe<Scalars['String']['output']>
  description?: Maybe<Scalars['String']['output']>
  discountPercentage?: Maybe<Scalars['Float']['output']>
  id?: Maybe<Scalars['Int']['output']>
  images?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  price?: Maybe<Scalars['Int']['output']>
  rating?: Maybe<Scalars['Float']['output']>
  stock?: Maybe<Scalars['Int']['output']>
  thumbnail?: Maybe<Scalars['String']['output']>
  title?: Maybe<Scalars['String']['output']>
}

export type ProductsResponse = {
  __typename?: 'ProductsResponse'
  limit?: Maybe<Scalars['Int']['output']>
  products?: Maybe<Array<Maybe<ProductsEntry>>>
  skip?: Maybe<Scalars['Int']['output']>
  total?: Maybe<Scalars['Int']['output']>
}

/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type Query = {
  __typename?: 'Query'
  listProductCategories?: Maybe<Array<Maybe<Scalars['String']['output']>>>
  listProducts?: Maybe<ProductsResponse>
  listProductsByCategory?: Maybe<ProductsResponse>
  product?: Maybe<ProductsEntry>
  searchProducts?: Maybe<ProductsResponse>
}

/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryListProductsArgs = {
  limit: Scalars['Int']['input']
  skip: Scalars['Int']['input']
}

/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryListProductsByCategoryArgs = {
  categoryName: Scalars['String']['input']
  limit: Scalars['Int']['input']
  skip: Scalars['Int']['input']
}

/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QueryProductArgs = {
  id: Scalars['String']['input']
}

/**
 * Query root object type.
 *
 * Contains fields that are available at the top level of a GraphQL `query`.
 *
 * If an operation is a `query`, the result of the operation is the result of
 * executing the query’s top level selection set with the `Query` root object type.
 */
export type QuerySearchProductsArgs = {
  limit: Scalars['Int']['input']
  search: Scalars['String']['input']
  skip: Scalars['Int']['input']
}

export type ListProductCategoriesQueryVariables = Exact<{
  [key: string]: never
}>

export type ListProductCategoriesQuery = {
  __typename?: 'Query'
  listProductCategories?: Array<string | null> | null
}

export type ListProductsQueryVariables = Exact<{
  limit: Scalars['Int']['input']
  skip: Scalars['Int']['input']
}>

export type ListProductsQuery = {
  __typename?: 'Query'
  listProducts?: {
    __typename?: 'ProductsResponse'
    limit?: number | null
    skip?: number | null
    total?: number | null
    products?: Array<{
      __typename?: 'ProductsEntry'
      brand?: string | null
      category?: string | null
      description?: string | null
      discountPercentage?: number | null
      id?: number | null
      images?: Array<string | null> | null
      price?: number | null
      rating?: number | null
      stock?: number | null
      thumbnail?: string | null
      title?: string | null
    } | null> | null
  } | null
}

export type ListProductsByCategoryQueryVariables = Exact<{
  categoryName: Scalars['String']['input']
  limit: Scalars['Int']['input']
  skip: Scalars['Int']['input']
}>

export type ListProductsByCategoryQuery = {
  __typename?: 'Query'
  listProductsByCategory?: {
    __typename?: 'ProductsResponse'
    limit?: number | null
    skip?: number | null
    total?: number | null
    products?: Array<{
      __typename?: 'ProductsEntry'
      brand?: string | null
      category?: string | null
      description?: string | null
      discountPercentage?: number | null
      id?: number | null
      images?: Array<string | null> | null
      price?: number | null
      rating?: number | null
      stock?: number | null
      thumbnail?: string | null
      title?: string | null
    } | null> | null
  } | null
}

export type ProductQueryVariables = Exact<{
  id: Scalars['String']['input']
}>

export type ProductQuery = {
  __typename?: 'Query'
  product?: {
    __typename?: 'ProductsEntry'
    brand?: string | null
    category?: string | null
    description?: string | null
    discountPercentage?: number | null
    id?: number | null
    images?: Array<string | null> | null
    price?: number | null
    rating?: number | null
    stock?: number | null
    thumbnail?: string | null
    title?: string | null
  } | null
}

export type SearchProductsQueryVariables = Exact<{
  limit: Scalars['Int']['input']
  skip: Scalars['Int']['input']
  search: Scalars['String']['input']
}>

export type SearchProductsQuery = {
  __typename?: 'Query'
  searchProducts?: {
    __typename?: 'ProductsResponse'
    limit?: number | null
    skip?: number | null
    total?: number | null
    products?: Array<{
      __typename?: 'ProductsEntry'
      brand?: string | null
      category?: string | null
      description?: string | null
      discountPercentage?: number | null
      id?: number | null
      images?: Array<string | null> | null
      price?: number | null
      rating?: number | null
      stock?: number | null
      thumbnail?: string | null
      title?: string | null
    } | null> | null
  } | null
}

export const ListProductCategoriesDocument = `
    query listProductCategories {
  listProductCategories
}
    `
export const useListProductCategoriesQuery = <
  TData = ListProductCategoriesQuery,
  TError = unknown
>(
  client: GraphQLClient,
  variables?: ListProductCategoriesQueryVariables,
  options?: UseQueryOptions<ListProductCategoriesQuery, TError, TData>,
  headers?: RequestInit['headers']
) =>
  useQuery<ListProductCategoriesQuery, TError, TData>(
    variables === undefined
      ? ['listProductCategories']
      : ['listProductCategories', variables],
    fetcher<ListProductCategoriesQuery, ListProductCategoriesQueryVariables>(
      client,
      ListProductCategoriesDocument,
      variables,
      headers
    ),
    options
  )
export const ListProductsDocument = `
    query listProducts($limit: Int!, $skip: Int!) {
  listProducts(limit: $limit, skip: $skip) {
    limit
    skip
    total
    products {
      brand
      category
      description
      discountPercentage
      id
      images
      price
      rating
      stock
      thumbnail
      title
    }
  }
}
    `
export const useListProductsQuery = <
  TData = ListProductsQuery,
  TError = unknown
>(
  client: GraphQLClient,
  variables: ListProductsQueryVariables,
  options?: UseQueryOptions<ListProductsQuery, TError, TData>,
  headers?: RequestInit['headers']
) =>
  useQuery<ListProductsQuery, TError, TData>(
    ['listProducts', variables],
    fetcher<ListProductsQuery, ListProductsQueryVariables>(
      client,
      ListProductsDocument,
      variables,
      headers
    ),
    options
  )
export const ListProductsByCategoryDocument = `
    query listProductsByCategory($categoryName: String!, $limit: Int!, $skip: Int!) {
  listProductsByCategory(categoryName: $categoryName, limit: $limit, skip: $skip) {
    limit
    skip
    total
    products {
      brand
      category
      description
      discountPercentage
      id
      images
      price
      rating
      stock
      thumbnail
      title
    }
  }
}
    `
export const useListProductsByCategoryQuery = <
  TData = ListProductsByCategoryQuery,
  TError = unknown
>(
  client: GraphQLClient,
  variables: ListProductsByCategoryQueryVariables,
  options?: UseQueryOptions<ListProductsByCategoryQuery, TError, TData>,
  headers?: RequestInit['headers']
) =>
  useQuery<ListProductsByCategoryQuery, TError, TData>(
    ['listProductsByCategory', variables],
    fetcher<ListProductsByCategoryQuery, ListProductsByCategoryQueryVariables>(
      client,
      ListProductsByCategoryDocument,
      variables,
      headers
    ),
    options
  )
export const ProductDocument = `
    query product($id: String!) {
  product(id: $id) {
    brand
    category
    description
    discountPercentage
    id
    images
    price
    rating
    stock
    thumbnail
    title
  }
}
    `
export const useProductQuery = <TData = ProductQuery, TError = unknown>(
  client: GraphQLClient,
  variables: ProductQueryVariables,
  options?: UseQueryOptions<ProductQuery, TError, TData>,
  headers?: RequestInit['headers']
) =>
  useQuery<ProductQuery, TError, TData>(
    ['product', variables],
    fetcher<ProductQuery, ProductQueryVariables>(
      client,
      ProductDocument,
      variables,
      headers
    ),
    options
  )
export const SearchProductsDocument = `
    query searchProducts($limit: Int!, $skip: Int!, $search: String!) {
  searchProducts(limit: $limit, search: $search, skip: $skip) {
    limit
    skip
    total
    products {
      brand
      category
      description
      discountPercentage
      id
      images
      price
      rating
      stock
      thumbnail
      title
    }
  }
}
    `
export const useSearchProductsQuery = <
  TData = SearchProductsQuery,
  TError = unknown
>(
  client: GraphQLClient,
  variables: SearchProductsQueryVariables,
  options?: UseQueryOptions<SearchProductsQuery, TError, TData>,
  headers?: RequestInit['headers']
) =>
  useQuery<SearchProductsQuery, TError, TData>(
    ['searchProducts', variables],
    fetcher<SearchProductsQuery, SearchProductsQueryVariables>(
      client,
      SearchProductsDocument,
      variables,
      headers
    ),
    options
  )
