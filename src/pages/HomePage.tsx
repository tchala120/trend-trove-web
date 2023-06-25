import { useState } from 'react'
import { Space } from 'antd'

import { BestSellerProduct } from 'components/BestSellerProduct'
import { ProductList } from 'components/ProductList'

import { usePaginationForAPI } from 'hooks/usePaginationForAPI'

import {
  useListProductsQuery,
  type ListProductsQuery,
} from 'graphQL/operations'
import { client } from 'graphQL/client'

export const HomePage = () => {
  const [listProducts, setListProducts] =
    useState<ListProductsQuery['listProducts']['products']>()

  const { limit, skip, loadMoreContents, onInfiniteLoadChange } =
    usePaginationForAPI({
      limit: 11,
      skipInterval: 11,
    })

  const listProductsQuery = useListProductsQuery(
    client,
    {
      limit,
      skip,
    },
    {
      onSuccess({ listProducts }) {
        setListProducts((prev) => {
          if (prev == null) {
            return listProducts.products
          }

          return prev.concat(listProducts.products)
        })
      },
    }
  )

  const data = listProductsQuery.data?.listProducts

  const totalProductItems = data?.total || 0

  return (
    <Space
      style={{
        width: '100%',
      }}
      size="large"
      direction="vertical"
    >
      <BestSellerProduct
        loading={listProductsQuery.isLoading}
        product={listProducts?.[0]}
      />

      <ProductList
        title="Our Products!"
        products={listProducts?.slice(1)}
        loadMoreContents={loadMoreContents(totalProductItems)}
        totalProducts={totalProductItems}
        onNextLoad={onInfiniteLoadChange}
      />
    </Space>
  )
}
