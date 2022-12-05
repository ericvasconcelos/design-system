import styled from 'styled-components'
import { getColorFromName } from 'utils/getColorFromName'
import { getTypography } from 'utils/getTypography'

const labelColorMap = {
  default: 'greyCash400',
  disabled: 'darkBlueCash200',
  active: 'lightBlueCash300',
  success: 'success500',
  error: 'error500',
  loading: 'lightBlueCash300'
}

const borderColorMap = {
  default: 'greyCash300',
  error: 'error400-64',
  active: 'lightBlueCash200',
  disabled: 'darkBlueCash100-08',
  success: 'greyCash300',
  loading: 'lightBlueCash200'
}

const shadowColorMap = {
  default: 'transparent',
  error: 'error400-24',
  active: 'lightBlueCash300-16',
  loading: 'lightBlueCash300-16'
}

const getLabelTypography = ({ theme, status, active, hasValue, disabled, readOnly }) => {
  let styleColorKey = status
  if (hasValue) styleColorKey = 'disabled'
  if (status === 'success') styleColorKey = 'success'
  if (status === 'error') styleColorKey = 'error'
  if (active || status === 'loading') styleColorKey = 'active'
  if (disabled || readOnly) styleColorKey = 'disabled'
  return getTypography({
    theme,
    styleType: 'body3Medium',
    styleColor: labelColorMap[styleColorKey]
  })
}

const getBorderColor = ({ theme, status, active, disabled, readOnly }) => {
  let styleColorKey = status
  if (active) styleColorKey = 'active'
  if (disabled || readOnly) styleColorKey = 'disabled'

  return getColorFromName({ theme, styleColor: borderColorMap[styleColorKey] })
}

const getShadowColor = ({ theme, status, active, disabled, readOnly }) => {
  let styleColorKey = status
  if (active) styleColorKey = 'active'
  if (disabled || readOnly) styleColorKey = 'disabled'

  return getColorFromName({ theme, styleColor: shadowColorMap[styleColorKey] })
}

export const BaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  transition: all 0.3s;
  height: ${({ status, infoMessage }) => (status === 'error' || infoMessage ? '88px' : '64px')};
  gap: ${({ theme }) => theme.gutters.sm};
  position: relative;
`

export const BaseInputWrapper = styled.label`
  display: flex;
  align-items: flex-start;
  position: relative;
  flex-wrap: wrap;
  box-sizing: content-box;
  width: calc(100% - 2 * ${({ theme }) => theme.padding.md});
  border-radius: 8px;
  padding: 0.625rem 0.9375rem;
  background-color: ${({ theme, disabled, readOnly }) =>
    getColorFromName({
      theme,
      styleColor: readOnly || disabled ? 'darkBlueCash100-08' : 'greyCash100'
    })};
  user-select: none;
  box-shadow: 0px 0px 0px 3px ${getShadowColor};
  border: 1px solid;
  border-color: ${getBorderColor};
`

export const BaseLabel = styled.span`
  ${getLabelTypography}
  top: unset;
  transition: 0.3s;
  line-height: 1.0625rem;
  text-align: left;
`

export const BaseInput = styled.input`
  ${({ theme, readOnly }) =>
    getTypography({
      theme,
      styleType: 'body1',
      styleColor: readOnly ? 'darkBlueCash200' : 'darkBlueCash500'
    })};
  display: block;
  transition: 0.3s;
  line-height: 1.375rem;
  text-align: left;
  :-webkit-autofill,
  :-internal-autofill-selected {
    animation-name: onAutoFillStart;
    -webkit-text-fill-color: ${({ theme }) => theme.pallete.darkBlueCash[200]};
    box-shadow: inset 0 0 0 100em ${({ theme }) => theme.pallete.greyCash[100]};
  }

  :not(:-webkit-autofill) {
    animation-name: onAutoFillCancel;
  }

  @keyframes onAutoFillStart {
    from {
      animation: none;
    }

    to {
      animation: none;
    }
  }

  @keyframes onAutoFillCancel {
    from {
      animation: none;
    }

    to {
      animation: none;
    }
  }
`

export const BaseMessage = styled.div`
  display: flex;
  padding-left: ${({ theme }) => theme.padding.md};
  gap: ${({ theme }) => theme.gutters.sm};
  align-items: center;
  ${({ theme, status }) =>
    getTypography({
      theme,
      styleType: 'body3Medium',
      styleColor: status === 'error' ? 'error500' : 'darkBlueCash200'
    })}
  line-height: 1rem;
`

export const BaseIconWrapper = styled.div`
  display: block;
  height: 24px;
  width: 24px;
  position: relative;
  margin: 0.5625rem 0px;
`
