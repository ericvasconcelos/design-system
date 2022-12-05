import React from 'react'

import { Text } from 'components/Text'
import { bool, func, string, arrayOf, shape } from 'prop-types'

import { Label, StyledInput } from './styles'

export const RadioButtonBasic = ({
  name,
  label,
  value,
  options,
  onChange,
  onBlur,
  disabled,
  messageError,
  className
}) => (
  <>
    <Text tag="p" styleType="body2" styleColor="greyCash400">
      {label}
    </Text>
    <div className={className}>
      {options.map(option => (
        <Label key={option.label} htmlFor={`option-${option.value}`}>
          <StyledInput
            id={`option-${option.value}`}
            name={name}
            disabled={disabled}
            type="radio"
            value={option.value}
            onChange={onChange}
            onBlur={onBlur}
            defaultChecked={value === option.value}
          />
          <Text tag="span" styleType="body2" styleColor="greyCash400">
            {option.label}
          </Text>
        </Label>
      ))}
    </div>
    {messageError && (
      <Text tag="p" styleType="body3" styleColor="error400">
        {messageError}
      </Text>
    )}
  </>
)

RadioButtonBasic.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  value: string,
  options: arrayOf(
    shape({
      label: string.isRequired,
      value: string.isRequired
    })
  ).isRequired,
  onChange: func,
  onBlur: func,
  disabled: bool,
  messageError: string,
  className: string
}

RadioButtonBasic.defaultProps = {
  value: '',
  disabled: false,
  onChange: () => {},
  onBlur: () => {},
  messageError: '',
  className: ''
}
