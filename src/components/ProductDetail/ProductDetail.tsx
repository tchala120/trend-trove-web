import { Col, Row, Skeleton } from 'antd'

import { LoadingPlaceholder } from 'components/LoadingPlaceholder'
import { ProductImages } from './ProductImages'
import { ProductInfo } from './ProductInfo'

import { useProductQuery } from 'graphQL/operations'
import { client } from 'graphQL/client'

interface ProductDetailProps {
  id: string
}

export const ProductDetail = ({ id }: ProductDetailProps) => {
  const productQuery = useProductQuery(client, {
    id,
  })

  const product = productQuery.data?.product

  if (productQuery.isLoading || product == null) {
    return <ProductDetailLoading />
  }

  return (
    <Row gutter={[32, 32]}>
      <Col xs={24} sm={12}>
        <ProductImages images={product.images} />
      </Col>

      <Col xs={24} sm={12}>
        <ProductInfo product={product} />
      </Col>
    </Row>
  )
}

const ProductDetailLoading = () => {
  return (
    <Row gutter={[32, 32]}>
      <Col span={24} sm={12}>
        <LoadingPlaceholder height={500} />
      </Col>

      <Col xs={24} sm={12}>
        <Skeleton />

        <Skeleton />
      </Col>
    </Row>
  )
}
