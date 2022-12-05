import React, { forwardRef, useEffect, useRef, useState } from 'react'

import { Icon } from 'components/Icon'
import { oneOf, string, oneOfType, instanceOf, func, shape, bool } from 'prop-types'
import { formatMoney } from 'utils/formatMoney'
import { formatPercentage } from 'utils/formatPercentage'
import { RFAdebounce } from 'utils/RFAdebounce'
import { toPattern } from 'vanilla-masker'

import { HelperText } from '../HelperText'
import { Wrapper, InputWrapper, CustomInput, Label, IconWrapper } from './styles'

const getIcon = (status, readOnly, disabled, icon = '') => {
  if ((readOnly || disabled) && status !== 'loading') {
    return icon
  }

  const iconMap = {
    error: 'error',
    success: 'success',
    loading: 'loader',
    default: icon
  }

  return iconMap[status]
}

const getStyleColorIcon = (status, active, readOnly, disabled) => {
  if (readOnly || disabled) {
    return 'darkBlueCash100'
  }

  if (status === 'loading' || active) {
    return 'lightBlueCash300'
  }

  return 'darkBlueCash100'
}
/**
 * O input é o componente usado para inserção de valores pelo usuário
 */

export const InputBasic = forwardRef(
  (
    {
      label,
      status,
      errorMessage,
      icon,
      id,
      mask,
      onChange,
      onBlur,
      onIconClick,
      iconType,
      iconAriaProps,
      value,
      className,
      name,
      type,
      infoMessage,
      disabled,
      readOnly
    },
    ref
  ) => {
    const [innerValue, setInnerValue] = useState('')
    const [active, setActive] = useState(false)
    const [autoFilled, setAutoFilled] = useState(false)
    const inputRef = useRef()

    const getMask = event => {
      let maskToUse = mask
      if (Array.isArray(mask)) {
        const masks = mask.sort((a, b) => a.length - b.length)

        const inputLength = event.target.value.replace(/\D/, '').length
        const validMasks = masks.filter(
          filterMask => inputLength <= filterMask.replace(/\D/, '').length
        )

        maskToUse = validMasks[0] || masks[masks.length - 1]
      }
      if (maskToUse === 'money') {
        event.target.value = formatMoney(event.target.value)
        return event
      }
      if (maskToUse === 'percentage') {
        event.target.value = formatPercentage(event.target.value, inputRef)
        inputRef.current.setSelectionRange(
          event.target.value.length - 2,
          event.target.value.length - 2
        )
        return event
      }

      event.target.value = toPattern(event.target.value, maskToUse)
      return event
    }

    const handleChange = RFAdebounce(event => {
      let shallowCopy = { ...event }
      if (shallowCopy.target.value && mask) {
        shallowCopy = getMask(shallowCopy)
      }

      setInnerValue(shallowCopy.target.value)
      onChange(shallowCopy)
      return shallowCopy
    })

    useEffect(() => {
      setInnerValue(value)
      inputRef.current.value = value
    }, [value])
    const handleAutoFill = event => {
      if (event.animationName === 'onAutoFillStart') {
        setAutoFilled(true)
      }
      if (event.animationName === 'onAutoFillCancel') {
        setAutoFilled(false)
      }
    }

    return (
      <Wrapper data-testid="Input" className={className} status={status} infoMessage={infoMessage}>
        <InputWrapper
          ref={ref}
          active={active}
          readOnly={readOnly}
          disabled={disabled}
          status={status}
          data-testid="InputWrapper"
          hasValue={innerValue}
        >
          <Label
            htmlFor={id}
            status={status}
            hasValue={innerValue}
            autoFilled={autoFilled}
            active={active}
            readOnly={readOnly}
            disabled={disabled}
          >
            {label}
          </Label>
          <CustomInput
            data-testid="Real-Input"
            id={id}
            ref={node => {
              inputRef.current = node
            }}
            active={active}
            readOnly={readOnly}
            disabled={disabled}
            hasValue={innerValue}
            autoFilled={autoFilled}
            onAnimationStart={handleAutoFill}
            onChange={event => {
              event.preventDefault()
              handleChange(event)
            }}
            onFocus={() => setActive(true)}
            onBlur={event => {
              setActive(false)
              onBlur(event)
            }}
            name={name}
            type={type}
          />
          {(icon || status !== 'default') && (
            <IconWrapper
              as={onIconClick ? 'button' : 'div'}
              {...(onIconClick && { type: iconType })}
              {...(onIconClick && { onClick: onIconClick })}
              {...iconAriaProps}
            >
              <Icon
                icon={getIcon(status, readOnly, disabled, icon)}
                styleColor={getStyleColorIcon(status, active, readOnly, disabled)}
              />
            </IconWrapper>
          )}
        </InputWrapper>
        <HelperText
          status={readOnly || disabled ? 'default' : status}
          infoMessage={infoMessage}
          errorMessage={errorMessage}
        />
      </Wrapper>
    )
  }
)

InputBasic.propTypes = {
  className: string,
  /** Identificador do componente */
  id: string.isRequired,
  /** Identificador visual para o componente */
  label: string,
  /** Estado do componente */
  status: oneOf(['error', 'success', 'default', 'loading']),
  /** Mensagem em caso de erro  */
  errorMessage: string,
  /** Formatação esperada na inserção do usuário */
  mask: oneOfType([string, instanceOf(Array)]),
  /** Função chamada na inserção do componente */
  onChange: func,
  /** Icone ao lado do texto */
  icon: oneOfType([string, shape({ primaryColor: string, secondaryColor: string })]),
  /** Valor do componente */
  value: string,
  /** Nome identificador do componente */
  name: string.isRequired,
  /** Função chamada ao tirar o foco do campo */
  onBlur: func,
  /** Tipo do dado esperado dentro do componente */
  type: string,
  /** Mesangem de imformação */
  infoMessage: string,
  iconAriaProps: instanceOf(Object),
  /** Função chamada no click do icone  */
  onIconClick: func,
  /** Define se o componente está desabilitado */
  disabled: bool,
  /** Define se o componente é somente leitura */
  readOnly: bool,
  /** Tipo do icone que será utilizado */
  iconType: oneOf(['button', 'submit', 'reset'])
}

InputBasic.defaultProps = {
  label: '',
  className: '',
  status: 'default',
  errorMessage: '',
  onBlur: () => {},
  icon: '',
  infoMessage: '',
  mask: null,
  onChange: () => {},
  value: '',
  type: 'text',
  iconAriaProps: {},
  onIconClick: null,
  disabled: false,
  readOnly: false,
  iconType: 'button'
}
