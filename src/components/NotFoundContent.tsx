import { type ReactNode } from 'react'
import styled from '@emotion/styled'

interface NotFoundContentProps {
  icon: ReactNode
  title: ReactNode
}

export const NotFoundContent = ({ icon, title }: NotFoundContentProps) => {
  return (
    <NotFoundContentContainer>
      {icon}

      <NotFoundTitle>{title}</NotFoundTitle>
    </NotFoundContentContainer>
  )
}

const NotFoundContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
  gap: 24px;
  color: #ccc;
  text-align: center;
`

const NotFoundTitle = styled.span`
  font-size: 24px;
  font-weight: bold;
`
