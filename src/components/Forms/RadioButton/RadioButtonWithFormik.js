import React from 'react'

import { Text } from 'components/Text'
import { Field, ErrorMessage } from 'formik'
import { bool, func, string, arrayOf, shape } from 'prop-types'

import { Label, StyledInput } from './styles'

export const RadioButtonWithFormik = ({ name, label, options, onChange, disabled, className }) => (
  <>
    <Text tag="p" styleType="body2" styleColor="greyCash400">
      {label}
    </Text>
    <Field name={name} className={className}>
      {({ field }) =>
        options.map(option => (
          <Label key={option.label} htmlFor={`option-${option.value}`}>
            <StyledInput
              id={`option-${option.value}`}
              name={name}
              disabled={disabled}
              type="radio"
              value={option.value}
              onChange={e => {
                onChange(e)
                field.onChange(e)
              }}
              onBlur={field.onBlur}
              defaultChecked={field.value === option.value}
            />
            <Text tag="span" styleType="body2" styleColor="greyCash400">
              {option.label}
            </Text>
          </Label>
        ))}
    </Field>
    <ErrorMessage name={name}>
      {messageError => (
        <Text tag="p" styleType="body3" styleColor="error400">
          {messageError}
        </Text>
      )}
    </ErrorMessage>
  </>
)

RadioButtonWithFormik.propTypes = {
  name: string.isRequired,
  label: string.isRequired,
  options: arrayOf(
    shape({
      label: string.isRequired,
      value: string.isRequired
    })
  ).isRequired,
  onChange: func,
  disabled: bool,
  className: string
}

RadioButtonWithFormik.defaultProps = {
  disabled: false,
  onChange: () => {},
  className: ''
}
