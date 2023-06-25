import { Space, Tag } from 'antd'

import { moneyFormat } from 'helpers/formatter'

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
      <strong>
        {moneyFormat(price, {
          prefix: '$',
        })}
      </strong>

      <Tag color="#cd201f">{discountPercentage}% off</Tag>
    </Space>
  )
}
