import { Space } from 'antd'

import { BestSellerProduct } from 'components/BestSellerProduct'
import { ProductList } from 'components/ProductList'

import { useListProductsAndCategoriesQuery } from 'graphQL/operations'

import { client } from 'graphQL/client'

export const HomePage = () => {
  const listProductsAndCategoriesQuery = useListProductsAndCategoriesQuery(
    client,
    {
      limit: 11,
      skip: 0,
    }
  )

  const listProducts = listProductsAndCategoriesQuery.data?.listProducts

  return (
    <Space
      style={{
        width: '100%',
      }}
      size="large"
      direction="vertical"
    >
      <BestSellerProduct
        loading={listProductsAndCategoriesQuery.isLoading}
        product={listProducts?.products[0]}
      />

      <ProductList
        loading={listProductsAndCategoriesQuery.isLoading}
        products={listProducts?.products.slice(1)}
      />
    </Space>
  )
}
