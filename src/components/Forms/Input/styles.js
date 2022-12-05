import styled from 'styled-components'
import { getTypography } from 'utils/getTypography'

import {
  BaseIconWrapper,
  BaseInput,
  BaseInputWrapper,
  BaseLabel,
  BaseWrapper
} from '../commonStyles'

const getLabelState = (active, hasValue, autoFilled, readOnly, disabled) => {
  const isLabelPlaceholderAlike = !(hasValue || active || autoFilled || readOnly || disabled)
  return isLabelPlaceholderAlike
}

const getLabelBottom = ({ active, hasValue, autoFilled, readOnly, disabled }) => {
  let bottom = 0
  if (getLabelState(active, hasValue, autoFilled, readOnly, disabled)) {
    bottom = '-0.5625rem'
  }
  return bottom
}

const getLabelTypography = ({ theme, active, hasValue, autoFilled, readOnly, disabled }) => {
  if (getLabelState(active, hasValue, autoFilled, readOnly, disabled)) {
    return getTypography({ theme, styleType: 'body1', styleColor: 'darkBlueCash200' })
  }
}
export const Wrapper = styled(BaseWrapper)``

export const InputWrapper = styled(BaseInputWrapper)`
  display: grid;
  grid-template: 'label icon' 1.0625rem 'input icon' 1.375rem / minmax(0, 1fr) 1.5rem;
  column-gap: 1rem;
  row-gap: 0.1875rem;
  position: relative;
`

export const Label = styled(BaseLabel)`
  position: relative;
  bottom: ${getLabelBottom};
  ${getLabelTypography}
  grid-area: label;
`

export const CustomInput = styled(BaseInput)`
  grid-area: input;
`

export const IconWrapper = styled(BaseIconWrapper)`
  grid-area: icon;
`
