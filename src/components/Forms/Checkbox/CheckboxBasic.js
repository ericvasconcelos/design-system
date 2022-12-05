import React from 'react'

import { Text } from 'components/Text'
import { bool, func, string } from 'prop-types'

import { Label, StyledInput } from './styles'

export const CheckboxBasic = ({
  id,
  name,
  label,
  value,
  checked,
  indeterminate,
  onChange,
  onBlur,
  disabled,
  messageError,
  className
}) => (
  <>
    <Label htmlFor={id} className={className}>
      <StyledInput
        id={id}
        name={name}
        disabled={disabled}
        ref={el => {
          el && indeterminate && el.setAttribute('indeterminate', '')
        }}
        type="checkbox"
        {...(value !== '' ? { value } : undefined)}
        onChange={onChange}
        onBlur={onBlur}
        defaultChecked={checked}
      />
      <Text tag="span" styleType="body2" styleColor="darkBlueCash500">
        {label}
      </Text>
    </Label>
    {messageError && (
      <Text tag="p" styleType="body3" styleColor="error400">
        {messageError}
      </Text>
    )}
  </>
)

CheckboxBasic.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  label: string.isRequired,
  value: string,
  onChange: func,
  onBlur: func,
  disabled: bool,
  checked: bool,
  indeterminate: bool,
  messageError: string,
  className: string,
  labelStyleColor: string
}

CheckboxBasic.defaultProps = {
  value: '',
  disabled: false,
  labelStyleColor: 'darkBlueCash200',
  indeterminate: false,
  onChange: () => {},
  onBlur: () => {},
  checked: false,
  messageError: '',
  className: ''
}
