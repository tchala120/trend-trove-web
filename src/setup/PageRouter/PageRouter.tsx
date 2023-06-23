import {
  RouterProvider,
  useRouteError,
  createBrowserRouter,
} from 'react-router-dom'
import { Result } from 'antd'
import styled from '@emotion/styled'

import { HomePage } from 'pages/HomePage'

import { ProductsSearchPage } from 'pages/ProductsSearchPage'
import { ProductsCategoryPage } from 'pages/ProductsCategoryPage'
import { ProductDetailPage } from 'pages/ProductDetailPage'

import { NotFoundPage } from 'pages/NotFoundPage'

import { paths } from './routes'

export const PageRouter = () => {
  const router = createBrowserRouter([
    {
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: paths.home,
          element: <HomePage />,
        },
        {
          path: paths.search,
          element: <ProductsSearchPage />,
        },
        {
          path: paths.category,
          element: <ProductsCategoryPage />,
        },
        {
          path: paths.productDetail,
          element: <ProductDetailPage />,
        },
      ],
    },
    {
      path: '*',
      element: <NotFoundPage />,
    },
  ])

  return <RouterProvider router={router} />
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
