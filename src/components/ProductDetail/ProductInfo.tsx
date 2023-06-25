import { Space } from 'antd'

import { Rating } from 'components/Rating'
import { ProductPrice } from './ProductPrice'

import { type ProductQuery } from 'graphQL/operations'

interface ProductInfoProps {
  product: ProductQuery['product']
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <Space
      style={{
        width: '100%',
      }}
      direction="vertical"
    >
      <h1>{product.title}</h1>

      <ProductPrice
        productPrice={product.price}
        discountPercentage={product.discountPercentage}
      />

      <Rating rating={product.rating} />

      <p>{product.description}</p>
    </Space>
  )
}
