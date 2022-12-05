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
      ? getColorFromName({ theme, styleColor: 'greyCash400-08' })
      : theme.pallete.greyCash[100]};
  border: 2px solid
    ${({ theme, disabled }) =>
    disabled
      ? getColorFromName({ theme, styleColor: 'greyCash400-08' })
      : theme.pallete.greyCash[300]};
  border-radius: ${({ theme }) => theme.border.radius.xs};
  display: inline-block;
  position: relative;
  padding: 10px;
  margin-right: ${({ theme }) => theme.gutters.md};

  &[indeterminate] {
    background-color: ${({ theme }) => theme.pallete.success[400]};
    border-color: ${({ theme }) => theme.pallete.success[400]};

    &:after {
      content: '';
      width: 8px;
      height: 2px;
      background-color: ${({ theme }) => theme.pallete.greyCash[100]};
      position: absolute;
      top: 9px;
      left: 6px;
      border-radius: ${({ theme }) => theme.border.radius.xs};
    }
  }

  &:not([disabled]):hover,
  &:not([disabled]):focus {
    border-color: ${({ theme }) => theme.pallete.lightBlueCash[300]};
    box-shadow: 0 0 0 4px
      ${({ theme }) => getColorFromName({ theme, styleColor: 'lightBlueCash300-24' })};
  }

  &[checked] {
    ${({ disabled, theme }) =>
    !disabled &&
      `
        background-color: ${theme.pallete.success[400]};
        border-color: ${theme.pallete.success[400]};
      `}

    &:after {
      content: ' ';
      mask-image: url(${({ theme }) => theme.icons.checkBold});
      mask-size: contain;
      background-color: ${({ theme, disabled }) =>
    disabled
      ? getColorFromName({ theme, styleColor: 'greyCash400-32' })
      : theme.pallete.greyCash[100]};
      width: 8px;
      height: 6px;
      position: absolute;
      top: 7px;
      left: 6px;
    }
  }
`
