import styled from '@emotion/styled'
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'

import { paths } from 'setup/PageRouter'

export const BrandLogo = () => {
  const navigate = useNavigate()

  return (
    <BrandLogoContainer
      title="Trend Trove"
      onClick={() => navigate(paths.home)}
    >
      <FontAwesomeIcon icon={faShoppingBag} />

      <h1>Trend Trove</h1>
    </BrandLogoContainer>
  )
}

const BrandLogoContainer = styled.div`
  --font-size: 24px;

  display: flex;
  align-items: center;
  gap: 16px;
  color: #fff;
  font-size: var(--font-size);
  cursor: pointer;

  > h1 {
    font-size: var(--font-size);
    font-weight: bold;
    margin: 0;
  }
`
