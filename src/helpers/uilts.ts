import qs from 'query-string'
import { generatePath } from 'react-router-dom'

type ParamValue = string | number | null | undefined

interface RouteToOptions {
  params?: Record<string, ParamValue>
  query?: Record<string, ParamValue>
}

export const routeTo = (path: string, options: RouteToOptions) => {
  const pathResult = generatePath(path, options.params)

  return options.query == null
    ? pathResult
    : `${pathResult}?${qs.stringify(options.query)}`
}

export const getProductPriceBeforeDiscounted = (
  productPrice: number,
  discountPercentage: number
) => productPrice / (1 - discountPercentage / 100)

export const sleep = async (delay = 1000) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(delay)
    }, delay)
  )
