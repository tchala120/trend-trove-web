import { Outlet } from 'react-router-dom'
import styled from '@emotion/styled'

import { MainMenu } from 'components/MainMenu'

export const PageLayout = () => {
  return (
    <>
      <MainMenu />

      <MainContentContainer>
        <Outlet />
      </MainContentContainer>
    </>
  )
}

const MainContentContainer = styled.div`
  max-width: 768px;
  margin: 24px auto;
  padding: 0 24px;
`
