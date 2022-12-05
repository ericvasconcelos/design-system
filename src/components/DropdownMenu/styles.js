import styled from 'styled-components'
import { getColorFromName } from 'utils/getColorFromName'

export const Wrapper = styled.ul`
  background-color: ${({ theme }) => theme.pallete.greyCash[100]};
  border: 1px solid ${({ theme }) => theme.pallete.greyCash[300]};
  padding: ${({ theme }) => theme.padding.sm};
  border-radius: 1rem;
  box-shadow: 0px 8px 16px 0px
    ${({ theme }) => getColorFromName({ theme, styleColor: 'greyCash500-08' })};
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gutters.sm};
  align-items: stretch;
`
