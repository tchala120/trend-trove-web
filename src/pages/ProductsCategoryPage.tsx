import { Space } from 'antd'
import { useParams } from 'react-router-dom'
import { sentenceCase } from 'change-case'

import { Title } from 'components/Title'
import { ProductList } from 'components/ProductList'

import { useListProductsByCategoryQuery } from 'graphQL/operations'
import { client } from 'graphQL/client'

export const ProductsCategoryPage = () => {
  const { category } = useParams()

  const listProductsByCategoryQuery = useListProductsByCategoryQuery(client, {
    categoryName: category || '',
    limit: 10,
    skip: 0,
  })

  const data = listProductsByCategoryQuery.data?.listProductsByCategory

  return (
    <Space
      style={{
        width: '100%',
      }}
      size="large"
      direction="vertical"
    >
      <Title>{sentenceCase(category || '')}</Title>

      <ProductList
        loading={listProductsByCategoryQuery.isLoading}
        products={data?.products}
      />
    </Space>
  )
}
