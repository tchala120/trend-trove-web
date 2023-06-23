import { ConfigProvider } from 'antd'

import { PageRouter } from 'setup/PageRouter'

const App = () => {
  return (
    <ConfigProvider
      componentSize="large"
      theme={{
        token: {
          fontFamily: 'Noto Sans Thai',
        },
      }}
    >
      <PageRouter />
    </ConfigProvider>
  )
}

export default App
