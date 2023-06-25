import { useState, useMemo, type ReactNode, useCallback } from 'react'

import { CartContext } from './useCartContext'

import { type ProductsEntry } from 'graphQL/operations'

import type { CartContextData, ItemInCart } from './types'

interface CartContextProps {
  children: ReactNode
}

export const CartProvider = ({ children }: CartContextProps) => {
  const [itemsInCart, setItemsInCart] = useState<ItemInCart[]>([])
  const [itemIDs, setItemIDs] = useState<number[]>([])

  const addNewItem = useCallback(
    (newItem: ProductsEntry) => {
      const foundData = itemsInCart.find(
        (item) => item.product.id === newItem.id
      )

      const newItemAddToCart: ItemInCart = {
        product: newItem,
        quantity: 1,
        totalPrice: newItem.price,
      }

      const updatedItems = itemsInCart.map((item) => {
        if (item.product.id === newItem.id) {
          const quantity = item.quantity + 1
          const totalPrice = item.product.price * quantity

          return {
            ...item,
            quantity,
            totalPrice,
          }
        }

        return item
      })

      if (foundData == null) {
        updatedItems.push(newItemAddToCart)
      }

      setItemsInCart(updatedItems)
    },
    [itemsInCart]
  )

  const removeItemQuantity = useCallback(
    (id: number) => {
      const updatedItems = itemsInCart.map((item) => {
        if (item.product.id === id) {
          const quantity =
            item.quantity === 0 ? item.quantity : item.quantity - 1
          const totalPrice = item.product.price * quantity

          return {
            ...item,
            quantity,
            totalPrice,
          }
        }

        return item
      })

      setItemsInCart(updatedItems.filter((item) => item.quantity > 0))
    },
    [itemsInCart]
  )

  const selectItem = useCallback((ids: number[]) => {
    setItemIDs(ids)
  }, [])

  const deleteItem = useCallback(
    (id: number) => {
      const updatedItems = itemsInCart.filter((item) => item.product.id !== id)

      setItemsInCart(updatedItems)
    },
    [itemsInCart]
  )

  const clearCart = useCallback(() => {
    setItemsInCart([])
    setItemIDs([])
  }, [])

  const totalItemsInCart = useMemo(
    () => itemsInCart.reduce((prev, current) => prev + current.quantity, 0),
    [itemsInCart]
  )

  const summaryPrice = useMemo(() => {
    const selectItemsOnly = itemsInCart.filter((item) =>
      itemIDs.includes(item.product.id)
    )

    return selectItemsOnly.reduce(
      (prev, current) => prev + current.totalPrice,
      0
    )
  }, [itemsInCart, itemIDs])

  const value: CartContextData = {
    itemsInCart,
    totalItemsInCart,
    totalSelectedItems: itemIDs.length,
    summaryPrice,
    addNewItem,
    removeItemQuantity,
    selectItem,
    deleteItem,
    clearCart,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
