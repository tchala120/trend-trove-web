import { Skeleton } from 'antd'

interface LoadingPlaceholderProps {
  height: number
}

export const LoadingPlaceholder = ({ height }: LoadingPlaceholderProps) => {
  return (
    <Skeleton.Input
      style={{
        height,
      }}
      active
      block
    />
  )
}
