import { useState } from 'react'
import { Input, Space } from 'antd'
import { StringParam, useQueryParam, withDefault } from 'use-query-params'

import { Title } from 'components/Title'
import { ProductList } from 'components/ProductList'

import { usePaginationForAPI } from 'hooks/usePaginationForAPI'

import { numberFormat } from 'helpers/formatter'

import {
  useSearchProductsQuery,
  type SearchProductsQuery,
} from 'graphQL/operations'
import { client } from 'graphQL/client'

export const ProductsSearchPage = () => {
  const [search, setSearch] = useQueryParam(
    'search',
    withDefault(StringParam, '')
  )

  const [listProducts, setListProducts] =
    useState<SearchProductsQuery['searchProducts']['products']>()

  const { limit, skip, loadMoreContents, onInfiniteLoadChange } =
    usePaginationForAPI()

  const searchProductsQuery = useSearchProductsQuery(
    client,
    {
      search,
      limit,
      skip,
    },
    {
      onSuccess({ searchProducts }) {
        setListProducts((prev) => {
          if (prev == null) {
            return searchProducts.products
          }

          return prev.concat(searchProducts.products)
        })
      },
    }
  )

  const data = searchProductsQuery.data?.searchProducts

  const totalProductItems = data?.total || 0

  return (
    <Space
      style={{
        width: '100%',
      }}
      size="large"
      direction="vertical"
    >
      <Title>Find Your Perfect Product</Title>

      <Input.Search
        placeholder="iPhone 9..."
        enterButton
        allowClear
        onSearch={(value) => setSearch(value)}
      />

      {search === '' ? null : <strong>Searching for: {search}</strong>}

      <ProductList
        title={
          data == null ? null : `Found ${numberFormat(data.total) || 0} items`
        }
        products={listProducts?.slice(1)}
        loadMoreContents={loadMoreContents(totalProductItems)}
        totalProducts={totalProductItems}
        onNextLoad={onInfiniteLoadChange}
      />
    </Space>
  )
}
