import styled from '@emotion/styled'
import { Badge, Space } from 'antd'
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from '@fortawesome/react-fontawesome'
import {
  faBasketShopping,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

import { BrandLogo } from 'components/BrandLogo'

import { useCartContext } from 'contexts/useCartContext'

import { paths } from 'setup/PageRouter'

const iconProps: Omit<FontAwesomeIconProps, 'icon'> = {
  fontSize: 24,
  color: '#fff',
  cursor: 'pointer',
}

export const MainMenu = () => {
  const navigate = useNavigate()

  const { totalItemsInCart } = useCartContext()

  return (
    <MainMenuContainer>
      <nav>
        <BrandLogo />

        <Space size="large" align="center">
          <FontAwesomeIcon
            title="Searching products"
            icon={faMagnifyingGlass}
            {...iconProps}
            onClick={() => navigate(paths.search)}
          />

          <Badge count={totalItemsInCart}>
            <FontAwesomeIcon
              title="Product cart"
              icon={faBasketShopping}
              {...iconProps}
            />
          </Badge>
        </Space>
      </nav>
    </MainMenuContainer>
  )
}

const MainMenuContainer = styled.div`
  position: sticky;
  background-color: #22a699;
  box-shadow: 0 0px 20px #22a699;
  z-index: 3;
  top: 0;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 768px;
    margin: 0 auto;
    padding: 16px 24px;
    gap: 8px;
  }

  .search-input {
    max-width: 300px;
  }

  @media (max-width: 576px) {
    .search-input {
      max-width: 200px;
    }
  }
`
