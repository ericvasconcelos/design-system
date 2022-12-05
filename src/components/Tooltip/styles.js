import styled from 'styled-components'

export const TooltipWrapper = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.pallete.darkBlueCash[400]};
  padding: ${({ theme }) => theme.padding.md};
  border-radius: 8px;
`

export const ReferenceWrapper = styled.div`
  display: inline-block
`
