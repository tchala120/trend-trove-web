import styled from '@emotion/styled'
import { Space } from 'antd'
import { faCopyright } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {
  return (
    <FooterContainer>
      <footer>
        <Space align="center">
          <FontAwesomeIcon icon={faCopyright} />

          <span>{new Date().getFullYear()} Panupong.</span>
        </Space>

        <span className="version">
          Version {import.meta.env.VITE_APP_VERSION}
        </span>
      </footer>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  background-color: #22a699;
  box-shadow: 0 0px 20px #22a699;
  color: #eee;

  > footer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    gap: 8px;
  }
`
