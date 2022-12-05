/* stylelint-disable property-no-vendor-prefix */
import { Icon } from 'components/Icon'
import styled from 'styled-components'
import { getColorFromName } from 'utils/getColorFromName'
import { getTypography } from 'utils/getTypography'

const labelColor = ({ invalid, focused, disabled, readOnly, theme }) => {
  if (readOnly || disabled) {
    return theme.pallete.greyCash[400]
  }

  if (invalid) {
    return theme.pallete.error[400]
  }

  if (focused) {
    return theme.pallete.lightBlueCash[300]
  }

  return theme.pallete.greyCash[400]
}

export const InputIcon = styled(Icon)`
  opacity: ${({ disabled, readOnly }) => disabled || readOnly ? 0.32 : 1};
`

export const Input = styled.input`
  border-radius: 8px;
  border: 1px solid rgba(51, 51, 51, 0.1);
  border-color: ${({ theme, readOnly, disabled }) =>
    (readOnly || disabled) ? 'transparent' : theme.pallete.greyCash[100]};
  background: ${({ theme, disabled, readOnly }) =>
    (readOnly || disabled) ? theme.pallete.greyCash[200] : theme.pallete.greyCash[100]};
  color: ${({ theme, readOnly }) => readOnly
    ? getColorFromName({ theme, styleColor: 'greyCash400-32' })
    : theme.pallete.greyCash[400]};
  height: 56px;
  padding: 12px 0 0 15px;
  width: 100%;
  box-sizing: border-box;

  & ~ ${InputIcon} {
    position: absolute;
    right: 16px;
    top: 16px;
  }

  &:focus {
    outline: none !important;
    border: 1px solid ${({ theme, readOnly, disabled }) =>
    (readOnly || disabled) ? 'transparent' : theme.pallete.lightBlueCash[200]};
    box-shadow: ${({ readOnly, theme }) =>
    `0 0 0 30px ${readOnly
      ? theme.pallete.greyCash[200]
      : theme.pallete.greyCash[100]} inset,
        0 0 0 4px ${readOnly
    ? theme.pallete.greyCash[200]
    : theme.pallete.greyCash[100]}`};
    box-shadow: ${({ theme }) =>
    `0px 0px 0px 3px ${getColorFromName({ theme, styleColor: 'lightBlueCash200-16' })}`};
  }

  &::placeholder {
    color: transparent;
  }

  [type="search"]::-webkit-search-decoration,
  [type="search"]::-webkit-search-cancel-button,
  [type="search"]::-webkit-search-results-button,
  [type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
`

export const Label = styled.label`
  font-size: ${({ hasValue }) => hasValue ? '0.5rem' : '0.75rem'};
  position: absolute;
  left: 16px;
  top: ${({ hasValue, autoFilled }) => hasValue || autoFilled ? '8px' : '20px'};
  pointer-events: none;
  color: ${({ theme, readOnly, disabled }) =>
    (readOnly || disabled) ? theme.pallete.greyCash[400] : theme.pallete.greyCash[300]};
  transition: 0.3s ease all;
  font-weight: ${({ hasValue }) => hasValue ? 'bolder' : 'regular'};
  text-transform: ${({ hasValue }) => hasValue ? 'uppercase' : 'none'};
  opacity: ${({ disabled, readOnly }) => (disabled || readOnly) ? 0.32 : 1};
`

export const Wrapper = styled.div`
  position: relative;
  max-width: 720px;
  margin: 16px 0;
  line-height: 16px;

  &:focus-within {
    ${Label} {
      top: 8px;
      font-weight: bolder;
      color: ${props => labelColor({ focused: true, ...props })};
      font-size: 8px;
      text-transform: uppercase;
    }
  }
`

export const DataList = styled.section`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.pallete.greyCash[100]};
  border: 2px solid;
  border-color: ${({ theme }) => theme.pallete.greyCash[300]};
  padding: ${({ theme }) => theme.padding.sm};
  border-radius: 8px;
  box-sizing: border-box;

  p {
    text-align: center;
  }
`

export const Option = styled.div`
  ${({ theme }) => getTypography({ theme, styleType: 'body2', styleColor: 'greyCash400' })};
  padding: ${({ theme }) => theme.padding.md};
  line-height: 1;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background-color: ${({ theme }) =>
    getColorFromName({ theme, styleColor: 'lightBlueCash300-24' })};
    color: ${({ theme }) => getColorFromName({ theme, styleColor: 'lightBlueCash300' })};
  }
`
