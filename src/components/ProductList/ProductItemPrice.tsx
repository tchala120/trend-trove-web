import { Space, Tag } from 'antd'

import { numberFormat } from 'helpers/formatter'

interface ProductItemPriceProps {
  price: number
  discountPercentage: number
}

export const ProductItemPrice = ({
  price,
  discountPercentage,
}: ProductItemPriceProps) => {
  return (
    <Space size="small">
      <strong>${numberFormat(price)}</strong>

      <Tag color="#cd201f">{discountPercentage}% off</Tag>
    </Space>
  )
}
