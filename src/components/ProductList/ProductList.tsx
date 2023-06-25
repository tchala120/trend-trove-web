import { type ReactNode } from 'react'
import { Col, Row } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox } from '@fortawesome/free-solid-svg-icons'
import InfiniteScroll from 'react-infinite-scroll-component'

import { Title } from 'components/Title'
import { LoadingPlaceholder } from 'components/LoadingPlaceholder'
import { ProductItem } from './ProductItem'
import { NotFoundContent } from 'components/NotFoundContent'

import {
  type ListProductsQuery,
  type ListProductsByCategoryQuery,
  type SearchProductsQuery,
} from 'graphQL/operations'

interface ProductListProps {
  title?: ReactNode
  products?:
    | ListProductsQuery['listProducts']['products']
    | ListProductsByCategoryQuery['listProductsByCategory']['products']
    | SearchProductsQuery['searchProducts']['products']
  totalProducts?: number
  loadMoreContents?: boolean
  onNextLoad: VoidFunction
}

export const ProductList = ({
  title,
  products,
  totalProducts = 0,
  loadMoreContents = false,
  onNextLoad,
}: ProductListProps) => {
  return (
    <InfiniteScroll
      dataLength={totalProducts}
      next={onNextLoad}
      hasMore={loadMoreContents}
      loader={
        <Row gutter={[16, 16]} style={{ marginTop: 16 }}>
          <Col sm={12} xs={24}>
            <LoadingPlaceholder height={150} />
          </Col>
          <Col sm={12} xs={24}>
            <LoadingPlaceholder height={150} />
          </Col>
        </Row>
      }
    >
      <Row gutter={[16, 16]}>
        {title == null ? null : (
          <Col span={24}>
            <Title>{title}</Title>
          </Col>
        )}

        {renderProductList()}
      </Row>
    </InfiniteScroll>
  )

  function renderProductList() {
    if (products == null) {
      return (
        <>
          {Array.from({ length: 10 }, (_, index) => (
            <Col key={index} xs={24} sm={12}>
              <LoadingPlaceholder height={150} />
            </Col>
          ))}
        </>
      )
    }

    if (products?.length === 0) {
      return (
        <NotFoundContent
          icon={<FontAwesomeIcon icon={faBox} fontSize={36} />}
          title="Not found products that you were looking for"
        />
      )
    }

    return (
      <>
        {products?.map((product) => (
          <Col key={product.id} xs={24} sm={12}>
            <ProductItem product={product} />
          </Col>
        ))}
      </>
    )
  }
}
