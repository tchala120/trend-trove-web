import { Outlet } from 'react-router-dom'
import styled from '@emotion/styled'

import { MainMenu } from 'components/MainMenu'
import { Footer } from 'components/Footer'

export const PageLayout = () => {
  return (
    <>
      <MainMenu />

      <MainContentContainer>
        <Outlet />
      </MainContentContainer>

      <Footer />
    </>
  )
}

const MainContentContainer = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 24px;
  min-height: calc(100vh - 172px);
`
