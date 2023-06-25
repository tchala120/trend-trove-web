import { type ColumnsType } from 'antd/es/table'
import { Table, Tag, theme, type TableProps } from 'antd'
import { sentenceCase } from 'change-case'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

import { useCartContext } from 'contexts/useCartContext'

import { routeTo } from 'helpers/uilts'
import { moneyFormat, numberFormat } from 'helpers/formatter'

import { paths } from 'setup/PageRouter'

import { type ItemInCart } from 'contexts/useCartContext'

const { useToken } = theme

export const CartTable = (props: Omit<TableProps<ItemInCart>, 'columns'>) => {
  const { token } = useToken()

  const { itemsInCart, deleteItem, selectItem } = useCartContext()

  const columns: ColumnsType<ItemInCart> = [
    {
      title: 'Image',
      width: 75,
      render(_, record) {
        return (
          <img
            style={{
              aspectRatio: '1/1',
              objectFit: 'cover',
              width: 75,
              height: 75,
            }}
            src={record.product.thumbnail}
            alt={record.product.title}
          />
        )
      },
    },
    {
      title: 'Name',
      render(_, record) {
        return (
          <Link
            to={routeTo(paths.productDetail, {
              params: {
                id: record.product.id,
              },
            })}
          >
            {record.product.title}
          </Link>
        )
      },
    },
    {
      title: 'Category',
      dataIndex: 'product.category',
      render(_, record) {
        return <Tag color="cyan">{sentenceCase(record.product.category)}</Tag>
      },
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      render(_, record) {
        return numberFormat(record.quantity, '0,0')
      },
    },
    {
      title: 'Total Price',
      dataIndex: 'totalPrice',
      render(quantity) {
        return moneyFormat(quantity, {
          prefix: '$',
        })
      },
    },
    {
      key: 'action',
      render(_, record) {
        return (
          <FontAwesomeIcon
            icon={faTrash}
            cursor="pointer"
            color={token.colorError}
            onClick={() => deleteItem(record.product.id)}
          />
        )
      },
    },
  ]

  return (
    <Table
      rowKey={(row) => row.product.id}
      columns={columns}
      pagination={{
        hideOnSinglePage: true,
      }}
      scroll={{
        x: 720,
      }}
      rowSelection={{
        onChange: (keys) => selectItem(keys as number[]),
      }}
      dataSource={itemsInCart}
      {...props}
    />
  )
}
