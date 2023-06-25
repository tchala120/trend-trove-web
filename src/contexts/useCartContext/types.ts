import type { ProductsEntry } from 'graphQL/operations'

export interface ItemInCart {
  product: ProductsEntry
  quantity: number
  totalPrice: number
}

export interface CartContextData {
  itemsInCart: ItemInCart[]
  totalItemsInCart: number
  totalSelectedItems: number
  summaryPrice: number
  addNewItem: (newItem: ProductsEntry) => void
  removeItemQuantity: (id: number) => void
  selectItem: (id: number[]) => void
  deleteItem: (id: number) => void
  clearCart: VoidFunction
}
