import React, { useState, useEffect, useRef, useCallback } from 'react'

import { BaseWrapper } from 'components/Forms/commonStyles'
import { HelperText } from 'components/Forms/HelperText'
import { Icon } from 'components/Icon'
import { Popper } from 'components/Popper'
import { UseClickOutsideElement } from 'hooks/useClickOutsideElement'
import { string, bool, arrayOf, shape, func, oneOf } from 'prop-types'

import {
  OptionsBox,
  HiddenSelect,
  Option,
  OptionIcon,
  CustomSelect,
  IconWrapper,
  Label,
  DisplaySelection
} from './styles'
/**
 * Dropdown é o componente usado para seleção de items dento de uma lista
 */

export const DropdownBasic = ({
  name,
  label,
  value,
  options,
  id,
  status,
  disabled,
  readOnly,
  optionIcon,
  placeholder,
  errorMessage,
  onChange,
  infoMessage,
  optionSize,
  className,
  onBlur
}) => {
  const optionsBoxRef = useRef(null)
  const [active, setActive] = useState(false)
  const [internalValue, setInternalValue] = useState(value)
  const [openOptions, setOpenOptions] = useState(false)
  const [optionIndex, setOptionIndex] = useState(null)
  const selectRef = useRef(null)

  useEffect(() => {
    if (optionIndex === null) {
      optionsBoxRef.current.children[0].focus()
      return
    }

    optionsBoxRef.current.children[optionIndex].focus()
  }, [optionIndex])

  useEffect(() => {
    setInternalValue(value)
  }, [value])

  const handleBlur = useCallback(() => {
    if (active) setActive(false)
    if (openOptions) setOpenOptions(false)

    onBlur?.()
  }, [openOptions])

  const handleClickOption = option => {
    setOpenOptions(false)
    setInternalValue(option.value)
    selectRef.current.focus()

    if (onChange) onChange(option.value)
  }

  const handleOpen = () => {
    setOpenOptions(true)
    if (internalValue) {
      const selectedOptionIndex = options
        .map(option => option.value.indexOf(internalValue))
        .indexOf(0)
      setOptionIndex(selectedOptionIndex)
      setTimeout(() => optionsBoxRef.current.children[selectedOptionIndex].focus(), 100)
    }
  }

  const handleClose = () => {
    setOpenOptions(false)
    selectRef.current.focus()
  }

  const handleButtonClick = () => {
    if (!openOptions) {
      handleOpen()
    } else {
      handleClose()
    }
  }

  const handleArrowChangeState = (prevState, nextState) => {
    if (prevState === null) {
      setInternalValue(options[0].value)
      optionsBoxRef.current.children[0].focus()
      return 0
    }

    if (nextState > options.length - 1 || nextState < 0) {
      setTimeout(() => optionsBoxRef.current.children[prevState].focus(), 100)
      return prevState
    }

    const nextValue = options[nextState].value
    setInternalValue(nextValue)
    setTimeout(() => optionsBoxRef.current.children[nextState].focus(), 100)
    onChange?.(nextValue)
    return nextState
  }

  const keyDownHandler = event => {
    if (!readOnly) {
      const validKeys = ['ArrowUp', 'ArrowDown', 'Enter', 'Escape']
      if (validKeys.indexOf(event.key) !== -1) {
        event.preventDefault()

        if (event.key === 'ArrowDown') {
          if (!openOptions) handleOpen()
          setOptionIndex(prevState => handleArrowChangeState(prevState, prevState + 1))
        }

        if (event.key === 'ArrowUp') {
          if (!openOptions) handleOpen()
          setOptionIndex(prevState => handleArrowChangeState(prevState, prevState - 1))
        }

        if (event.key === 'Enter') {
          if (!openOptions) {
            handleOpen()
          } else handleClickOption(options[optionIndex])
        }
        if (event.key === 'Escape') {
          handleClose()
        }
      }
    }
  }

  return (
    <UseClickOutsideElement handleClick={handleBlur} handleFocusOutside={handleBlur}>
      <BaseWrapper>
        <Popper show={openOptions} useReferenceWidth placement="bottom-start">
          {reference => (
            <CustomSelect
              as="button"
              type="button"
              aria-haspopup="true"
              id={`${id}Label ${id}Content`}
              status={status}
              hasValue={internalValue}
              aria-disabled={disabled}
              aria-readonly={readOnly}
              aria-expanded={openOptions}
              active={active}
              className={className}
              ref={node => {
                reference(node)
                selectRef.current = node
              }}
              tabInde={!(active || openOptions) ? 0 : -1}
              disabled={disabled}
              name={name}
              onFocus={() => setActive(true)}
              onClick={handleButtonClick}
              onKeyDown={event => keyDownHandler(event)}
            >
              <Label
                id={`${id}Label`}
                disabled={disabled}
                status={status}
                active={openOptions}
                hasValue={status === 'default'}
              >
                {label}
              </Label>
              <DisplaySelection
                id={`${id}Content`}
                as="div"
                value={internalValue}
                status={status}
                disabled={disabled}
              >
                {options?.filter(option => option.value === internalValue)[0]?.text || placeholder}
              </DisplaySelection>
              <IconWrapper>
                <Icon
                  icon={openOptions ? 'chevronUp' : 'chevronDown'}
                  styleColor={openOptions ? 'lightBlueCash300' : 'greyCash400'}
                />
              </IconWrapper>
            </CustomSelect>
          )}
          <OptionsBox
            role="list"
            active={openOptions}
            numberOptions={options?.length}
            ref={optionsBoxRef}
          >
            {options?.map(option => (
              <Option
                role="listitem"
                key={option.value}
                onMouseDown={event => event.preventDefault()}
                onClick={() => handleClickOption(option)}
                onKeyDown={event => keyDownHandler(event)}
                selected={internalValue === option.value}
                optionSize={optionSize}
                tabIndex="-1"
              >
                {optionIcon && <OptionIcon icon={optionIcon} size={12} />}
                {option.text}
              </Option>
            ))}
          </OptionsBox>
        </Popper>
        <HiddenSelect id={`select${id}`} name={name} value={internalValue} readOnly>
          {options?.map(option => (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          ))}
        </HiddenSelect>
        <HelperText
          status={disabled ? 'default' : status}
          infoMessage={infoMessage}
          errorMessage={errorMessage}
        />
      </BaseWrapper>
    </UseClickOutsideElement>
  )
}

DropdownBasic.propTypes = {
  /**
   * Nome dado ao componente
   */
  name: string.isRequired,
  /**
   * Label dada ao componente
   */
  label: string.isRequired,
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
   * ID dado ao componente
   */
  id: string.isRequired,
  /**
   * Status do componente
   */
  status: oneOf(['error', 'success', 'default']),
  /**
   * Define se o componente está desabilitado ou não
   */
  disabled: bool,
  /**
   * Ícone das opções do componente
   */
  optionIcon: string,
  /**
   * Nome de placeholder do componente
   */
  placeholder: string,
  /**
   * Mensagem de erro
   */
  errorMessage: string,
  /**
   * Mensagem de informação
   */
  infoMessage: string,
  /**
   * Opção do tamanho das opçoes
   */
  optionSize: oneOf(['large', 'default']),
  onChange: func,
  onBlur: func,
  className: string,
  readOnly: bool,
  value: string
}

DropdownBasic.defaultProps = {
  disabled: false,
  onChange: null,
  onBlur: null,
  status: 'default',
  optionSize: 'default',
  optionIcon: '',
  placeholder: '',
  errorMessage: '',
  infoMessage: '',
  className: '',
  readOnly: false,
  value: ''
}
