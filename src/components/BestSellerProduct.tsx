import styled from '@emotion/styled'
import { Button, Skeleton, Space } from 'antd'
import { useNavigate } from 'react-router-dom'

import { Title } from 'components/Title'

import { routeTo } from 'helpers/uilts'

import { paths } from 'setup/PageRouter'

import { type ListProductsAndCategoriesQuery } from 'graphQL/operations'

interface BestSellerProductProps {
  loading?: boolean
  product?: ListProductsAndCategoriesQuery['listProducts']['products'][number]
}

export const BestSellerProduct = ({
  loading,
  product,
}: BestSellerProductProps) => {
  const navigate = useNavigate()

  return (
    <Space
      direction="vertical"
      style={{
        width: '100%',
      }}
    >
      <Title>Best Seller</Title>

      {loading ? (
        <LoadingPlaceholder />
      ) : (
        <BestSellerProductContainer
          product={product}
          onClick={() =>
            navigate(
              routeTo(paths.productDetail, {
                params: {
                  id: product?.id,
                },
              })
            )
          }
        >
          <div />

          <BestSellerProductInfo>
            <h1>{product?.title}</h1>
            <p>{product?.description}</p>

            <Button type="primary">Buy Now</Button>
          </BestSellerProductInfo>
        </BestSellerProductContainer>
      )}
    </Space>
  )
}

const BestSellerProductContainer = styled.div<
  Pick<BestSellerProductProps, 'product'>
>`
  background-image: ${({ product }) => `url(${product?.thumbnail})`};
  background-repeat: no-repeat;
  background-position: left center;
  background-size: contain;
  border-radius: 6px;
  padding: 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  border: 1px solid #eee;

  transition: box-shadow 0.25s ease-in-out;

  &:hover {
    box-shadow: 0 10px 20px #eee;
  }

  @media (max-width: 576px) {
    background-image: none;
  }
`

const BestSellerProductInfo = styled.div`
  text-align: right;

  p {
    font-size: 12px;
    color: #999;
  }
`

const LoadingPlaceholder = () => {
  return (
    <Skeleton.Input
      style={{
        height: 180,
      }}
      active
      block
    />
  )
}