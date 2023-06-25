import { Col, Row, Skeleton } from 'antd'

import { Title } from 'components/Title'
import { ProductItem } from './ProductItem'

import {
  type ListProductsAndCategoriesQuery,
  type ListProductsByCategoryQuery,
  type SearchProductsQuery,
} from 'graphQL/operations'

interface ProductListProps {
  loading?: boolean
  products?:
    | ListProductsAndCategoriesQuery['listProducts']['products']
    | ListProductsByCategoryQuery['listProductsByCategory']['products']
    | SearchProductsQuery['searchProducts']['products']
}

export const ProductList = ({ loading, products }: ProductListProps) => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={24}>
        <Title>Our Products!</Title>
      </Col>

      {loading ? (
        <LoadingPlaceholder />
      ) : (
        products?.map((product) => (
          <Col key={product.id} xs={24} md={12}>
            <ProductItem product={product} />
          </Col>
        ))
      )}
    </Row>
  )
}

const LoadingPlaceholder = () => {
  return (
    <>
      {Array.from({ length: 10 }, (_, index) => (
        <Col key={index} xs={24} md={12}>
          <Skeleton.Input
            style={{
              height: 150,
            }}
            active
            block
          />
        </Col>
      ))}
    </>
  )
}
