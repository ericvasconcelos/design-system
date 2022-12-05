import React, { useEffect, useState } from 'react'

import { useField } from 'formik'
import { bool, func, instanceOf, oneOfType, shape, string } from 'prop-types'

import { InputBasic } from './InputBasic'

export const InputWithFormik = ({
  label,
  icon,
  id,
  mask,
  onChange,
  className,
  name,
  type,
  onBlur,
  infoMessage,
  iconAriaProps,
  onIconClick,
  disabled,
  readOnly,
  isLoading
}) => {
  const [{ value, onBlur: fieldBlur, onChange: fieldChange }, { error, touched }, { setTouched }] =
    useField(name)
  const [status, setStatus] = useState('default')
  useEffect(() => {
    let effectStatus = 'default'
    if(isLoading) {
      effectStatus = 'loading'
    } else if (touched) {
      effectStatus = 'success'
      if (error) {
        effectStatus = 'error'
      }
    }
    setStatus(effectStatus)
  }, [error, touched, isLoading])

  return (
    <InputBasic
      id={id}
      label={label}
      className={className}
      name={name}
      mask={mask}
      value={value}
      onChange={event => {
        setTouched(false)
        fieldChange(event)
        onChange(event)
      }}
      status={status}
      errorMessage={error}
      onBlur={event => {
        fieldBlur(event)
        onBlur(event)
      }}
      icon={icon}
      type={type}
      infoMessage={infoMessage}
      iconAriaProps={iconAriaProps}
      onIconClick={onIconClick}
      disabled={disabled}
      readOnly={readOnly}
    />
  )
}

InputWithFormik.propTypes = {
  className: string,
  id: string.isRequired,
  label: string,
  mask: oneOfType([string, instanceOf(Array)]),
  onChange: func,
  icon: oneOfType([string, shape({ primaryColor: string, secondaryColor: string })]),
  name: string.isRequired,
  onBlur: func,
  type: string,
  infoMessage: string,
  iconAriaProps: instanceOf(Object),
  onIconClick: func,
  readOnly: bool,
  disabled: bool,
  isLoading: bool
}

InputWithFormik.defaultProps = {
  label: '',
  className: '',
  onBlur: () => {},
  icon: '',
  infoMessage: '',
  mask: null,
  onChange: () => {},
  type: 'text',
  iconAriaProps: {},
  onIconClick: null,
  readOnly: false,
  disabled: false,
  isLoading: false
}
