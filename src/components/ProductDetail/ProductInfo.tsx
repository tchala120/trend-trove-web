import { Button, Space, Tag } from 'antd'
import { sentenceCase } from 'change-case'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

import { Rating } from 'components/Rating'
import { ProductPrice } from './ProductPrice'

import { routeTo } from 'helpers/uilts'

import { paths } from 'setup/PageRouter'

import { type ProductQuery } from 'graphQL/operations'

interface ProductInfoProps {
  product: ProductQuery['product']
}

export const ProductInfo = ({ product }: ProductInfoProps) => {
  const navigate = useNavigate()

  return (
    <Space
      style={{
        width: '100%',
        height: '100%',
      }}
      size="middle"
      direction="vertical"
    >
      <h1>{product.title}</h1>

      <ProductPrice
        productPrice={product.price}
        discountPercentage={product.discountPercentage}
      />

      <Rating rating={product.rating} />

      <span>{product.description}</span>

      <span>In stock: {product.stock}</span>

      <Tag
        color="blue"
        style={{
          cursor: 'pointer',
        }}
        onClick={() =>
          navigate(
            routeTo(paths.category, {
              params: {
                category: product.category,
              },
            })
          )
        }
      >
        {sentenceCase(product.category)}
      </Tag>

      <Button type="primary" icon={<FontAwesomeIcon icon={faAdd} />}>
        Add to Cart
      </Button>
    </Space>
  )
}
