import { GraphQLClient } from 'graphql-request'
import { useQuery, UseQueryOptions } from '@tanstack/react-query'
export type Maybe<T> = T
export type InputMaybe<T> = T
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

function fetcher<TData, TVariables extends { [key: string]: any }>(
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
  brand: Maybe<Scalars['String']['output']>
  category: Maybe<Scalars['String']['output']>
  description: Maybe<Scalars['String']['output']>
  discountPercentage: Maybe<Scalars['Float']['output']>
  id: Maybe<Scalars['Int']['output']>
  images: Maybe<Array<Maybe<Scalars['String']['output']>>>
  price: Maybe<Scalars['Int']['output']>
  rating: Maybe<Scalars['Float']['output']>
  stock: Maybe<Scalars['Int']['output']>
  thumbnail: Maybe<Scalars['String']['output']>
  title: Maybe<Scalars['String']['output']>
}

export type ProductsResponse = {
  limit: Maybe<Scalars['Int']['output']>
  products: Maybe<Array<Maybe<ProductsEntry>>>
  skip: Maybe<Scalars['Int']['output']>
  total: Maybe<Scalars['Int']['output']>
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
  listProductCategories: Maybe<Array<Maybe<Scalars['String']['output']>>>
  listProducts: Maybe<ProductsResponse>
  listProductsByCategory: Maybe<ProductsResponse>
  product: Maybe<ProductsEntry>
  searchProducts: Maybe<ProductsResponse>
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
  listProductCategories: Array<string>
}

export type ListProductsQueryVariables = Exact<{
  limit: Scalars['Int']['input']
  skip: Scalars['Int']['input']
}>

export type ListProductsQuery = {
  listProducts: {
    limit: number
    skip: number
    total: number
    products: Array<{
      brand: string
      category: string
      description: string
      discountPercentage: number
      id: number
      images: Array<string>
      price: number
      rating: number
      stock: number
      thumbnail: string
      title: string
    }>
  }
}

export type ListProductsAndCategoriesQueryVariables = Exact<{
  limit: Scalars['Int']['input']
  skip: Scalars['Int']['input']
}>

export type ListProductsAndCategoriesQuery = {
  listProductCategories: Array<string>
  listProducts: {
    limit: number
    skip: number
    total: number
    products: Array<{
      brand: string
      category: string
      description: string
      discountPercentage: number
      id: number
      images: Array<string>
      price: number
      rating: number
      stock: number
      thumbnail: string
      title: string
    }>
  }
}

export type ListProductsByCategoryQueryVariables = Exact<{
  categoryName: Scalars['String']['input']
  limit: Scalars['Int']['input']
  skip: Scalars['Int']['input']
}>

export type ListProductsByCategoryQuery = {
  listProductsByCategory: {
    limit: number
    skip: number
    total: number
    products: Array<{
      brand: string
      category: string
      description: string
      discountPercentage: number
      id: number
      images: Array<string>
      price: number
      rating: number
      stock: number
      thumbnail: string
      title: string
    }>
  }
}

export type ProductQueryVariables = Exact<{
  id: Scalars['String']['input']
}>

export type ProductQuery = {
  product: {
    brand: string
    category: string
    description: string
    discountPercentage: number
    id: number
    images: Array<string>
    price: number
    rating: number
    stock: number
    thumbnail: string
    title: string
  }
}

export type SearchProductsQueryVariables = Exact<{
  limit: Scalars['Int']['input']
  skip: Scalars['Int']['input']
  search: Scalars['String']['input']
}>

export type SearchProductsQuery = {
  searchProducts: {
    limit: number
    skip: number
    total: number
    products: Array<{
      brand: string
      category: string
      description: string
      discountPercentage: number
      id: number
      images: Array<string>
      price: number
      rating: number
      stock: number
      thumbnail: string
      title: string
    }>
  }
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
useListProductCategoriesQuery.document = ListProductCategoriesDocument

useListProductCategoriesQuery.getKey = (
  variables?: ListProductCategoriesQueryVariables
) =>
  variables === undefined
    ? ['listProductCategories']
    : ['listProductCategories', variables]
useListProductCategoriesQuery.fetcher = (
  client: GraphQLClient,
  variables?: ListProductCategoriesQueryVariables,
  headers?: RequestInit['headers']
) =>
  fetcher<ListProductCategoriesQuery, ListProductCategoriesQueryVariables>(
    client,
    ListProductCategoriesDocument,
    variables,
    headers
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
useListProductsQuery.document = ListProductsDocument

useListProductsQuery.getKey = (variables: ListProductsQueryVariables) => [
  'listProducts',
  variables,
]
useListProductsQuery.fetcher = (
  client: GraphQLClient,
  variables: ListProductsQueryVariables,
  headers?: RequestInit['headers']
) =>
  fetcher<ListProductsQuery, ListProductsQueryVariables>(
    client,
    ListProductsDocument,
    variables,
    headers
  )
export const ListProductsAndCategoriesDocument = `
    query listProductsAndCategories($limit: Int!, $skip: Int!) {
  listProductCategories
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
export const useListProductsAndCategoriesQuery = <
  TData = ListProductsAndCategoriesQuery,
  TError = unknown
>(
  client: GraphQLClient,
  variables: ListProductsAndCategoriesQueryVariables,
  options?: UseQueryOptions<ListProductsAndCategoriesQuery, TError, TData>,
  headers?: RequestInit['headers']
) =>
  useQuery<ListProductsAndCategoriesQuery, TError, TData>(
    ['listProductsAndCategories', variables],
    fetcher<
      ListProductsAndCategoriesQuery,
      ListProductsAndCategoriesQueryVariables
    >(client, ListProductsAndCategoriesDocument, variables, headers),
    options
  )
useListProductsAndCategoriesQuery.document = ListProductsAndCategoriesDocument

useListProductsAndCategoriesQuery.getKey = (
  variables: ListProductsAndCategoriesQueryVariables
) => ['listProductsAndCategories', variables]
useListProductsAndCategoriesQuery.fetcher = (
  client: GraphQLClient,
  variables: ListProductsAndCategoriesQueryVariables,
  headers?: RequestInit['headers']
) =>
  fetcher<
    ListProductsAndCategoriesQuery,
    ListProductsAndCategoriesQueryVariables
  >(client, ListProductsAndCategoriesDocument, variables, headers)
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
useListProductsByCategoryQuery.document = ListProductsByCategoryDocument

useListProductsByCategoryQuery.getKey = (
  variables: ListProductsByCategoryQueryVariables
) => ['listProductsByCategory', variables]
useListProductsByCategoryQuery.fetcher = (
  client: GraphQLClient,
  variables: ListProductsByCategoryQueryVariables,
  headers?: RequestInit['headers']
) =>
  fetcher<ListProductsByCategoryQuery, ListProductsByCategoryQueryVariables>(
    client,
    ListProductsByCategoryDocument,
    variables,
    headers
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
useProductQuery.document = ProductDocument

useProductQuery.getKey = (variables: ProductQueryVariables) => [
  'product',
  variables,
]
useProductQuery.fetcher = (
  client: GraphQLClient,
  variables: ProductQueryVariables,
  headers?: RequestInit['headers']
) =>
  fetcher<ProductQuery, ProductQueryVariables>(
    client,
    ProductDocument,
    variables,
    headers
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
useSearchProductsQuery.document = SearchProductsDocument

useSearchProductsQuery.getKey = (variables: SearchProductsQueryVariables) => [
  'searchProducts',
  variables,
]
useSearchProductsQuery.fetcher = (
  client: GraphQLClient,
  variables: SearchProductsQueryVariables,
  headers?: RequestInit['headers']
) =>
  fetcher<SearchProductsQuery, SearchProductsQueryVariables>(
    client,
    SearchProductsDocument,
    variables,
    headers
  )
