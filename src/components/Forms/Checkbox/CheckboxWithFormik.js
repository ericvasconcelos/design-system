import React from 'react'

import { Text } from 'components/Text'
import { Field, ErrorMessage } from 'formik'
import { bool, func, string } from 'prop-types'

import { Label, StyledInput } from './styles'

export const CheckboxWithFormik = ({
  id,
  name,
  label,
  value,
  onChange,
  indeterminate,
  disabled,
  className,
  labelStyleColor
}) => (
  <>
    <Field name={name} className={className}>
      {({ field }) => (
        <Label htmlFor={id}>
          <StyledInput
            id={id}
            name={name}
            disabled={disabled}
            type="checkbox"
            ref={el => {
              el && indeterminate && el.setAttribute('indeterminate', '')
            }}
            onChange={e => {
              onChange(e)
              field.onChange(e)
            }}
            value={field.value}
            defaultChecked={Array.isArray(field.value) ? field.value.includes(value) : field.value}
            onBlur={field.onBlur}
          />
          <Text tag="span" styleType="body2" styleColor={labelStyleColor}>
            {label}
          </Text>
        </Label>
      )}
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

CheckboxWithFormik.propTypes = {
  id: string.isRequired,
  name: string.isRequired,
  label: string.isRequired,
  onChange: func,
  disabled: bool,
  className: string,
  indeterminate: bool,
  value: string,
  labelStyleColor: string
}

CheckboxWithFormik.defaultProps = {
  disabled: false,
  onChange: () => {},
  className: '',
  indeterminate: false,
  value: '',
  labelStyleColor: 'darkBlueCash200'
}
