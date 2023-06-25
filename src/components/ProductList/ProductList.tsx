import { type ReactNode } from 'react'
import { Col, Row, Skeleton } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox } from '@fortawesome/free-solid-svg-icons'

import { Title } from 'components/Title'
import { ProductItem } from './ProductItem'
import { NotFoundContent } from 'components/NotFoundContent'

import {
  type ListProductsAndCategoriesQuery,
  type ListProductsByCategoryQuery,
  type SearchProductsQuery,
} from 'graphQL/operations'

interface ProductListProps {
  loading?: boolean
  title?: ReactNode
  products?:
    | ListProductsAndCategoriesQuery['listProducts']['products']
    | ListProductsByCategoryQuery['listProductsByCategory']['products']
    | SearchProductsQuery['searchProducts']['products']
}

export const ProductList = ({ loading, title, products }: ProductListProps) => {
  return (
    <Row gutter={[16, 16]}>
      {title == null ? null : (
        <Col span={24}>
          <Title>{title}</Title>
        </Col>
      )}

      {renderProductList()}
    </Row>
  )

  function renderProductList() {
    if (loading || products == null) {
      return <LoadingPlaceholder />
    }

    if (products.length === 0) {
      return (
        <NotFoundContent
          icon={<FontAwesomeIcon icon={faBox} fontSize={36} />}
          title="Not found products that you were looking for"
        />
      )
    }

    return (
      <>
        {products.map((product) => (
          <Col key={product.id} xs={24} md={12}>
            <ProductItem product={product} />
          </Col>
        ))}
      </>
    )
  }
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
