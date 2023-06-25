import styled from '@emotion/styled'
import { Col, Image, Row } from 'antd'
import { useState } from 'react'

import { ProductThumbnailImageSelectable } from './ProductThumbnailImageSelectable'

interface ProductImagesProps {
  images: string[]
}

export const ProductImages = ({ images }: ProductImagesProps) => {
  const [selectedImage, setSelectedImage] = useState(images[0])

  return (
    <Row gutter={[8, 8]}>
      <Col span={24}>
        <Image
          width="100%"
          src={selectedImage}
          style={{
            aspectRatio: '1/1',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </Col>

      <Col span={24}>
        <ProductImageSelectableContainer>
          {images.map((image) => (
            <ProductThumbnailImageSelectable
              key={image}
              image={image}
              isSelected={selectedImage === image}
              onClick={() => setSelectedImage(image)}
            />
          ))}
        </ProductImageSelectableContainer>
      </Col>
    </Row>
  )
}

const ProductImageSelectableContainer = styled.div`
  display: flex;
  gap: 4px;
`
