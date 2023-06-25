import { useState } from 'react'
import { Space } from 'antd'
import { useParams } from 'react-router-dom'
import { sentenceCase } from 'change-case'

import { ProductList } from 'components/ProductList'

import { usePaginationForAPI } from 'hooks/usePaginationForAPI'

import {
  useListProductsByCategoryQuery,
  type ListProductsByCategoryQuery,
} from 'graphQL/operations'
import { client } from 'graphQL/client'

export const ProductsCategoryPage = () => {
  const { category } = useParams()

  const [listProducts, setListProducts] =
    useState<
      ListProductsByCategoryQuery['listProductsByCategory']['products']
    >()

  const { limit, skip, loadMoreContents, onInfiniteLoadChange } =
    usePaginationForAPI()

  const listProductsByCategoryQuery = useListProductsByCategoryQuery(
    client,
    {
      categoryName: category || '',
      limit,
      skip,
    },
    {
      onSuccess({ listProductsByCategory }) {
        setListProducts((prev) => {
          if (prev == null) {
            return listProductsByCategory.products
          }

          return prev.concat(listProductsByCategory.products)
        })
      },
    }
  )

  const data = listProductsByCategoryQuery.data?.listProductsByCategory

  const totalProductItems = data?.total || 0

  return (
    <Space
      style={{
        width: '100%',
      }}
      size="large"
      direction="vertical"
    >
      <ProductList
        title={sentenceCase(category || '')}
        products={listProducts}
        totalProducts={totalProductItems}
        loadMoreContents={loadMoreContents(totalProductItems)}
        onNextLoad={onInfiniteLoadChange}
      />
    </Space>
  )
}
