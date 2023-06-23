import { ConfigProvider } from 'antd'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { PageRouter } from 'setup/PageRouter'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  )
}

export default App
