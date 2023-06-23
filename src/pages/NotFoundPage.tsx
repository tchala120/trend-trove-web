import styled from '@emotion/styled'
import { Button } from 'antd'

import { paths } from 'setup/PageRouter'

export const NotFoundPage = () => {
  return (
    <NotFoundPageContainer>
      <h1 className="title">
        We apologize for the inconvenience, but the page you were looking for
        could not be found.
      </h1>

      <a href={paths.home}>
        <Button type="primary">Go to Home</Button>
      </a>
    </NotFoundPageContainer>
  )
}

const NotFoundPageContainer = styled.div`
  height: 100dvh;
  width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 24px;

  .title {
    font-size: 2rem;
    font-weight: bold;
  }
`
