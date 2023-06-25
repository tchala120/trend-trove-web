import styled from '@emotion/styled'
import { Rate, Space } from 'antd'

interface RatingProps {
  rating: number
}

export const Rating = ({ rating }: RatingProps) => {
  return (
    <Space align="center" size="large">
      <Rate disabled value={rating} />

      <RatingText>({rating})</RatingText>
    </Space>
  )
}

const RatingText = styled.span`
  color: #22a699;
  font-size: 12px;
`
