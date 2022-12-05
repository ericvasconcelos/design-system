import React, { useEffect, useState } from 'react'

import { useField } from 'formik'
import { string, bool, func } from 'prop-types'

import { TextAreaBasic } from './TextAreaBasic'

/**
 * TextAreaWithFormik é o componente de inserção de textos com multiplas linhas
 * encapsulado pelo Formik
 */

export const TextAreaWithFormik = ({
  id,
  name,
  label,
  disabled,
  informativeMessage,
  className,
  onBlur,
  onChange,
  autoGrow
}) => {
  const [{ value, onBlur: fieldBlur, onChange: fieldChange, touched }, { error }, { setTouched }] =
    useField({ name })
  const [status, setStatus] = useState('default')
  useEffect(() => {
    let effectStatus = 'default'
    if (touched) {
      effectStatus = 'success'
      if (error) {
        effectStatus = 'error'
      }
    }
    setStatus(effectStatus)
  }, [error, touched])

  return (
    <TextAreaBasic
      id={id}
      name={name}
      status={status}
      label={label}
      autoGrow={autoGrow}
      disabled={disabled}
      errorMessage={error}
      informativeMessage={informativeMessage}
      className={className}
      value={value}
      onChange={event => {
        setTouched(false)
        fieldChange(event)
        onChange(event)
      }}
      onBlur={event => {
        fieldBlur(event)
        onBlur(event)
      }}
    />
  )
}

TextAreaWithFormik.propTypes = {
  /**
   * ID dado ao componente
   */
  id: string.isRequired,
  /**
   * Nome dado ao componente
   */
  name: string.isRequired,
  /**
   * Label dada ao componente
   */
  label: string,
  /**
   * Mensagem de informação
   */
  informativeMessage: string,
  /**
   * Define se o componente está desabilitado
   */
  disabled: bool,
  /**
   * onChange expõe o evento de change do textarea
   */
  onChange: func,
  /**
  * className serve para estilizações específicas
  * do contexto de uso
  */
  className: string,
  /**
  * onFocus expõe evento de blur do componente
  */
  onBlur: func,
  /**
  * autogrow é booleano que permite o crescimento
  * automático, vertical, conforme o campo seja preenchido.
  * Se falso haverá um scroll interno no campo 
  */
  autoGrow: bool
}

TextAreaWithFormik.defaultProps = {
  label: '',
  informativeMessage: '',
  disabled: false,
  className: '',
  onChange: () => {},
  onBlur: () => {},
  autoGrow: false
}
