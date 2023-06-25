import { type HTMLAttributes } from 'react'
import styled from '@emotion/styled'

interface ProductThumbnailImageSelectableProps
  extends HTMLAttributes<HTMLDivElement> {
  isSelected?: boolean
  image: string
}

export const ProductThumbnailImageSelectable = ({
  image,
  ...props
}: ProductThumbnailImageSelectableProps) => {
  return (
    <ProductThumbnailImageSelectableContainer {...props}>
      <img src={image} alt={image} />
    </ProductThumbnailImageSelectableContainer>
  )
}

const ProductThumbnailImageSelectableContainer = styled.div<
  Pick<ProductThumbnailImageSelectableProps, 'isSelected'>
>`
  width: 100%;
  max-width: 80px;
  padding: 4px;
  border: ${({ isSelected }) => `2px solid ${isSelected ? '#22a699' : '#999'}`};
  cursor: pointer;

  > img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
    object-position: center;
  }
`
