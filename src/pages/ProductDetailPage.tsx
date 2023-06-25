import { useParams } from 'react-router-dom'

import { ProductDetail } from 'components/ProductDetail'

export const ProductDetailPage = () => {
  const { id } = useParams()

  if (id == null || typeof id !== 'string') {
    throw Error('ID was not provided')
  }

  return <ProductDetail id={id} />
}
