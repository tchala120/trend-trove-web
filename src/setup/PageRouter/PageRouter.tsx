import { useRouteError, BrowserRouter, Routes, Route } from 'react-router-dom'
import { Result } from 'antd'
import styled from '@emotion/styled'
import { QueryParamProvider } from 'use-query-params'
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6'

import { HomePage } from 'pages/HomePage'

import { ProductsSearchPage } from 'pages/ProductsSearchPage'
import { ProductsCategoryPage } from 'pages/ProductsCategoryPage'
import { ProductDetailPage } from 'pages/ProductDetailPage'
import { PaymentSuccessPage } from 'pages/PaymentSuccessPage'

import { NotFoundPage } from 'pages/NotFoundPage'

import { ScrollToTop } from 'components/ScrollToTop'

import { PageLayout } from 'layouts/PageLayout'

import { paths } from './routes'

export const PageRouter = () => {
  return (
    <BrowserRouter>
      <QueryParamProvider adapter={ReactRouter6Adapter}>
        <Routes>
          <Route
            path="/"
            element={<PageLayout />}
            errorElement={<ErrorBoundary />}
          >
            <Route path={paths.home} element={<HomePage />} />
            <Route path={paths.search} element={<ProductsSearchPage />} />
            <Route path={paths.category} element={<ProductsCategoryPage />} />
            <Route path={paths.productDetail} element={<ProductDetailPage />} />
            <Route
              path={paths.paymentSuccess}
              element={<PaymentSuccessPage />}
            />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <ScrollToTop />
      </QueryParamProvider>
    </BrowserRouter>
  )
}

const ErrorBoundary = () => {
  const error = useRouteError()

  console.error('Route error', error)

  return (
    <ErrorBoundaryContainer>
      <Result
        status="500"
        title="Sorry, unexpected error"
        subTitle="We are working on fixing the problem. Be back soon"
      />
    </ErrorBoundaryContainer>
  )
}

const ErrorBoundaryContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
`
