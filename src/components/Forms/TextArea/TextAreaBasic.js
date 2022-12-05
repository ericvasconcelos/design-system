import React, { useState } from 'react'

import { Icon } from 'components/Icon'
import { bool, func, oneOf, string } from 'prop-types'

import { HelperText } from '../HelperText'
import { Wrapper, Label, StyledTextArea, TextAreaWrapper } from './styles'

/**
 * TextAreaBasic é o componente de inserção de textos com multiplas linhas
 */

export const TextAreaBasic = ({
  id,
  name,
  status,
  onChange,
  label,
  disabled,
  errorMessage,
  infoMessage,
  className,
  onBlur,
  onFocus,
  autoGrow
}) => {
  const [internalValue, setInternalValue] = useState('')
  const [active, setActive] = useState(false)
  const handleChange = event => {
    setInternalValue(event.target.value)

    if (onChange) onChange(event.target.value)
  }

  return (
    <Wrapper>
      <TextAreaWrapper
        as="div"
        data-testid="TextAreaBasic"
        status={status}
        disabled={disabled}
        className={className}
        active={active}
        htmlFor={id}
      >
        <Label id={`label${id}`} status={status} disabled={disabled} active={active}>
          {label}
        </Label>
        <StyledTextArea
          id={id}
          name={name}
          as="span"
          rows="3"
          role="textbox"
          autoGrow={autoGrow}
          aria-labelledby={id}
          aria-describedby={`infoMessage${id}`}
          aria-multiline
          contentEditable
          value={internalValue}
          status={status}
          onChange={event => handleChange(event)}
          onFocus={event => {
            setActive(true)
            onFocus(event)
          }}
          onBlur={event => {
            setActive(false)
            onBlur(event)
          }}
        />
      </TextAreaWrapper>
      <HelperText
        id={`infoMessage${id}`}
        errorMessage={() => (
          <>
            <Icon icon="error" size={12} />
            {errorMessage}
          </>
        )}
        status={status}
        infoMessage={() =>
          infoMessage && (
            <>
              <Icon
                icon={status === 'default' ? 'info' : 'success'}
                styleColor="darkBlueCash200"
                size={12}
              />
              {infoMessage}
            </>
          )}
      />
    </Wrapper>
  )
}

TextAreaBasic.propTypes = {
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
   * Mensagem de erro que será exibida caso haja um
   */
  errorMessage: string,
  /**
   * Mensagem de informação
   */
  infoMessage: string,
  /**
   * Define se o componente está desabilitado
   */
  disabled: bool,
  /**
   * Status do componente
   */
  status: oneOf(['error', 'success', 'default']),
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
   * onFocus expõe evento de focus do componente
   */
  onFocus: func,
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

TextAreaBasic.defaultProps = {
  status: 'default',
  label: '',
  errorMessage: '',
  infoMessage: '',
  onChange: null,
  disabled: false,
  className: '',
  onFocus: () => {},
  onBlur: () => {},
  autoGrow: false
}
