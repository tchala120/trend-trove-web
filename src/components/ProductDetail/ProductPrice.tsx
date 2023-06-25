import styled from '@emotion/styled'
import { Space, Tag } from 'antd'

import { numberFormat } from 'helpers/formatter'
import { getProductPriceBeforeDiscounted } from 'helpers/uilts'

interface ProductPriceProps {
  productPrice: number
  discountPercentage: number
}

export const ProductPrice = ({
  productPrice,
  discountPercentage,
}: ProductPriceProps) => {
  return (
    <Space
      style={{
        width: '100%',
      }}
      size="small"
      direction="vertical"
    >
      <Space>
        <BeforeDiscountPrice>
          $
          {numberFormat(
            getProductPriceBeforeDiscounted(productPrice, discountPercentage)
          )}
        </BeforeDiscountPrice>

        <Tag color="#cd201f">{discountPercentage}% off</Tag>
      </Space>

      <NetProductPrice>${numberFormat(productPrice)}</NetProductPrice>
    </Space>
  )
}

const BeforeDiscountPrice = styled.span`
  font-weight: bold;
  text-decoration: line-through;
  color: #999;
`

const NetProductPrice = styled.span`
  font-weight: bold;
  font-size: 24px;
`
