import styled from '@emotion/styled'

export const Title = styled.h1`
  --font-size: 36px;

  font-size: var(--font-size);
  font-weight: bold;
  color: #22a699;

  @media (max-width: 768px) {
    --font-size: 24px;
  }
`
