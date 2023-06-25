import { useState } from 'react'
import { Button, Drawer } from 'antd'

import { BillTableInfo } from './BillTableInfo'
import { CartTable } from './CartTable'

import { useCartContext } from 'contexts/useCartContext'

import { sleep } from 'helpers/uilts'

import { paths } from 'setup/PageRouter'

interface CartDisplayProps {
  open: boolean
  onClose: VoidFunction
}

export const CartDisplay = ({ open, onClose }: CartDisplayProps) => {
  const { totalSelectedItems } = useCartContext()

  const [loading, setLoading] = useState<boolean>(false)

  return (
    <Drawer
      title="Your Cart"
      drawerStyle={{
        maxWidth: '768px',
      }}
      contentWrapperStyle={{
        maxWidth: '768px',
      }}
      width="100%"
      footer={
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <Button
            type="primary"
            loading={loading}
            disabled={totalSelectedItems === 0}
            onClick={async () => {
              setLoading(true)

              await sleep(2000)

              setLoading(false)

              await sleep(500)

              window.location.href = paths.paymentSuccess
            }}
          >
            Confirm Order
          </Button>
        </div>
      }
      onClose={onClose}
      open={open}
    >
      <CartTable />

      <BillTableInfo />
    </Drawer>
  )
}
