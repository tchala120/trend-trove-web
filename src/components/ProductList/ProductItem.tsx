import { Button, Col, Rate, Row, Space, Tag } from 'antd'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import { sentenceCase } from 'change-case'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'

import { routeTo } from 'helpers/uilts'
import { moneyFormat } from 'helpers/formatter'

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

            <Space align="center">
              <Rate disabled value={product.rating} />

              <RatingText>({product.rating})</RatingText>
            </Space>

            <Space align="end">
              <strong>${moneyFormat(product.price)}</strong>
              <DiscountPercentageText>
                {product.discountPercentage}% off
              </DiscountPercentageText>
            </Space>
          </Space>
        </Col>
      </Row>

      <Button
        className="add-to-cart-button"
        icon={<FontAwesomeIcon icon={faAdd} />}
        type="primary"
        shape="circle"
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

const RatingText = styled.small`
  color: #ccc;
`

const DiscountPercentageText = styled.small`
  font-size: 12px;
  color: #22a699;
`
