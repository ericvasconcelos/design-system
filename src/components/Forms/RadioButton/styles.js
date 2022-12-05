
import styled from 'styled-components'
import { getColorFromName } from 'utils/getColorFromName'

export const Label = styled.label`
  display: flex;
  align-items: center;
`

export const StyledInput = styled.input`
  appearance: none;
  background-color: ${({ theme, disabled }) =>
    disabled
      ? getColorFromName({ theme, styleColor: 'greyCash500-08' })
      : theme.pallete.greyCash[100]};
  border: 2px solid
    ${({ theme, disabled }) =>
    disabled
      ? getColorFromName({ theme, styleColor: 'greyCash500-08' })
      : theme.pallete.greyCash[300]};
  border-radius: ${({ theme }) => theme.border.radius.rounded};
  display: inline-block;
  position: relative;
  padding: 6px;
  margin: ${({ theme }) => `${theme.gutters.xs} 12px ${theme.gutters.xs} 0`};

  &:not([disabled]):hover,
  &:not([disabled]):focus {
    border-color: ${({ theme }) => theme.pallete.lightBlueCash[300]};
    box-shadow: 0 0 0 4px
      ${({ theme }) => getColorFromName({ theme, styleColor: 'lightBlueCash300-24' })};
  }

  &[checked] {
    padding: 3px;
    border-width: 5px;
    border-color: ${({ disabled, theme }) =>
    disabled
      ? getColorFromName({ theme, styleColor: 'greyCash500-08' })
      : theme.pallete.success[400]};
    background-color: ${({ disabled, theme }) =>
    disabled
      ? getColorFromName({ theme, styleColor: 'greyCash400-32' })
      : theme.pallete.greyCash[100]};
  }
`
