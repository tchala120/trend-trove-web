export type RouteKey =
  | 'home'
  | 'search'
  | 'category'
  | 'productDetail'
  | 'paymentSuccess'

export const paths: Record<RouteKey, string> = {
  home: '/',
  search: '/search',
  category: '/category/:category',
  productDetail: '/product/:id',
  paymentSuccess: '/payment-success',
}
