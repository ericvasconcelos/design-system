import React from 'react'

import { useField } from 'formik'
import { string, arrayOf, bool, shape, oneOf, func } from 'prop-types'

import { DropdownBasic } from './DropdownBasic'

/**
 * DropdownWithFormik é o componente usado para seleção de items dento de uma lista.
 * Essa opção já é sendo encapsulada pelo Formik
 */

export const DropdownWithFormik = ({
  name,
  id,
  options,
  label,
  placeholder,
  informationMessage,
  disabled,
  optionSize,
  status,
  className,
  onBlur,
  onChange
}) => {
  const [{ value }, { error }, { setValue, setTouched }] = useField({ name })

  return (
    <DropdownBasic
      name={name}
      id={id}
      value={value}
      errorMessage={error}
      onChange={newValue => {
        setTouched(false)
        setValue(newValue)
        onChange?.(newValue)
      }}
      onBlur={() => {
        setTouched(true)
        onBlur?.()
      }}
      options={options}
      label={label}
      placeholder={placeholder}
      informationMessage={informationMessage}
      status={status}
      disabled={disabled}
      className={className}
      optionSize={optionSize}
    />
  )
}

DropdownWithFormik.propTypes = {
  /**
   * Nome dado ao componente
   */
  name: string,
  /**
   * ID dado ao componente
   */
  id: string,
  /**
   * Label dada ao componente
   */
  label: string,
  /**
   * Nome de placeholder do componente
   */
  placeholder: string,
  /**
   * Mensagem de informação
   */
  informationMessage: string,
  /**
   * Opções recebidas para montar a lista de elementos possivelmente selecionáveis
   */
  options: arrayOf(
    shape({
      value: string.isRequired,
      text: string.isRequired
    })
  ).isRequired,
  /**
   * Define se o componente é válido ou success
   */
  status: oneOf(['error', 'success', 'default']),
  /**
   * Define se o componente está desabilitado ou não
   */
  disabled: bool,
  /**
   * Opção do tamanho das opçoes
   */
  optionSize: oneOf(['large', 'default']),
  className: string,
  onBlur: func,
  onChange: func
}

DropdownWithFormik.defaultProps = {
  name: '',
  label: '',
  id: '',
  placeholder: '',
  informationMessage: '',
  disabled: false,
  optionSize: 'default',
  status: 'default',
  className: '',
  onBlur: null,
  onChange: null
}
