import { Input, Space } from 'antd'
import { StringParam, useQueryParam, withDefault } from 'use-query-params'

import { Title } from 'components/Title'
import { ProductList } from 'components/ProductList'

import { numberFormat } from 'helpers/formatter'

import { useSearchProductsQuery } from 'graphQL/operations'
import { client } from 'graphQL/client'

export const ProductsSearchPage = () => {
  const [search, setSearch] = useQueryParam(
    'search',
    withDefault(StringParam, '')
  )

  const searchProductsQuery = useSearchProductsQuery(client, {
    search,
    limit: 10,
    skip: 0,
  })

  const data = searchProductsQuery.data?.searchProducts

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
        loading={searchProductsQuery.isLoading}
        products={data?.products}
      />
    </Space>
  )
}
