import { createContext, useContext } from 'react'

import type { CartContextData } from './types'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const CartContext = createContext<any>(null)

export const useCartContext = () => useContext<CartContextData>(CartContext)
