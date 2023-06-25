import { Button, Col, Row, Space, Tag } from 'antd'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import { sentenceCase } from 'change-case'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

import { Rating } from 'components/Rating'
import { ProductItemPrice } from './ProductItemPrice'

import { useCartContext } from 'contexts/useCartContext'

import { routeTo } from 'helpers/uilts'

import { paths } from 'setup/PageRouter'

import {
  type ListProductsAndCategoriesQuery,
  type ListProductsByCategoryQuery,
  type SearchProductsQuery,
} from 'graphQL/operations'

interface ProductItemProps {
  product:
    | ListProductsAndCategoriesQuery['listProducts']['products'][number]
    | ListProductsByCategoryQuery['listProductsByCategory']['products'][number]
    | SearchProductsQuery['searchProducts']['products'][number]
}

export const ProductItem = ({ product }: ProductItemProps) => {
  const navigate = useNavigate()

  const { addNewItem } = useCartContext()

  return (
    <ProductItemContainer
      onClick={() =>
        navigate(
          routeTo(paths.productDetail, {
            params: {
              id: product.id,
            },
          })
        )
      }
    >
      <Row gutter={[16, 16]} align="top">
        <Col span={8}>
          <ProductImage
            loading="lazy"
            alt={product.title}
            src={product.thumbnail}
          />
        </Col>

        <Col span={16}>
          <Space
            direction="vertical"
            style={{
              width: '100%',
            }}
          >
            <strong>{product.title}</strong>

            <Tag
              className="product-category-tag"
              color="blue"
              onClick={(event) => {
                event.stopPropagation()

                navigate(
                  routeTo(paths.category, {
                    params: {
                      category: product.category,
                    },
                  })
                )
              }}
            >
              {sentenceCase(product.category)}
            </Tag>

            <Rating rating={product.rating} />

            <ProductItemPrice
              price={product.price}
              discountPercentage={product.discountPercentage}
            />
          </Space>
        </Col>
      </Row>

      <Button
        className="add-to-cart-button"
        icon={<FontAwesomeIcon icon={faAdd} />}
        type="primary"
        shape="circle"
        onClick={(event) => {
          event.stopPropagation()

          addNewItem(product)
        }}
      />
    </ProductItemContainer>
  )
}

const ProductItemContainer = styled.div`
  --card-padding: 12px;

  position: relative;
  border: 1px solid #eee;
  background-color: #fff;
  border-radius: 8px;
  padding: 12px;
  cursor: pointer;

  .add-to-cart-button {
    position: absolute;
    right: var(--card-padding);
    bottom: var(--card-padding);
  }
`

const ProductImage = styled.img`
  max-width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  object-position: center;
`
