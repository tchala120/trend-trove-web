import { ConfigProvider } from 'antd'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { CartProvider } from 'contexts/useCartContext'

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
            colorPrimary: '#22A699',
            fontFamily: 'Noto Sans Thai',
          },
        }}
      >
        <CartProvider>
          <PageRouter />
        </CartProvider>
      </ConfigProvider>
    </QueryClientProvider>
  )
}

export default App
