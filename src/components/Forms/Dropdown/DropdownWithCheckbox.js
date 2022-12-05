import React, { useState, useRef, useCallback } from 'react'

import { CheckboxBasic } from 'components/Forms/Checkbox'
import { BaseWrapper } from 'components/Forms/commonStyles'
import { HelperText } from 'components/Forms/HelperText'
import { Icon } from 'components/Icon'
import { Popper } from 'components/Popper'
import { UseClickOutsideElement } from 'hooks/useClickOutsideElement'
import { string, bool, arrayOf, shape, func, oneOf } from 'prop-types'

import {
  Button,
  ClearOptions,
  CheckboxOptionsWrapper,
  CheckboxOptionsBox,
  OptionCheckbox,
  CustomSelectCheckbox,
  IconWrapper,
  Label,
  DisplaySelection
} from './styles'
/**
 * DropdownWithCheckbox é o componente usado para seleção de múltiplos itens de uma lista
 */

export const DropdownWithCheckbox = ({
  name,
  label,
  value,
  options,
  id,
  status,
  disabled,
  readOnly,
  placeholder,
  errorMessage,
  onChange,
  infoMessage,
  optionSize,
  className,
  type,
  onBlur,
  clearText
}) => {
  const formatDisplayValue = useCallback(
    valueArray => {
      const numSelected = valueArray.length
      let display = valueArray.map(chosen => chosen.text).join(', ')
      if (numSelected > 2) {
        display = `${numSelected} ${type ? `${type} ` : ''}selecionados(as)`
      }

      return display
    },
    [type]
  )

  const initialDisplayValue = formatDisplayValue(value)
  const [internalValue, setInternalValue] = useState(value)
  const [displayValue, setDisplayValue] = useState(initialDisplayValue)
  const [openOptions, setOpenOptions] = useState(false)
  const selectRef = useRef(null)

  const handleBlur = useCallback(() => {
    if (openOptions) setOpenOptions(false)

    onBlur?.()
  }, [openOptions, onBlur])

  const updateStates = useCallback(
    updatedValue => {
      const newDisplayValue = formatDisplayValue(updatedValue)
      setInternalValue(updatedValue)
      setDisplayValue(newDisplayValue)

      if (onChange) onChange(updatedValue)
    },
    [formatDisplayValue, onChange]
  )

  const addValue = useCallback(
    selected => {
      const defaultOption = options.find(option => option.isDefault)
      const withoutDefault = internalValue.filter(option => option.value !== defaultOption?.value)
      let newInternalValue = [...withoutDefault, selected]

      if (selected.isDefault) newInternalValue = [selected]

      updateStates(newInternalValue)
    },
    [internalValue, options, updateStates]
  )

  const removeValue = useCallback(
    selected => {
      let newInternalValue = internalValue.filter(option => option.value !== selected.value)
      if (newInternalValue.length === 0)
        newInternalValue = options.filter(option => option.isDefault)

      updateStates(newInternalValue)
    },
    [internalValue, options, updateStates]
  )

  const removeAll = useCallback(() => {
    const newInternalValue = options.filter(option => option.isDefault)
    if (internalValue.length > 0) updateStates(newInternalValue)
  }, [internalValue.length, options, updateStates])

  const handleClickOption = useCallback(
    selected => {
      const shouldRemoveSelected = internalValue.some(option => option.value === selected.value)
      if (shouldRemoveSelected) {
        removeValue(selected)
      } else {
        addValue(selected)
      }
    },
    [addValue, internalValue, removeValue]
  )

  const handleOpen = useCallback(() => {
    setOpenOptions(true)
  }, [])

  const handleClose = useCallback(() => {
    setOpenOptions(false)
    selectRef.current.focus()
  }, [selectRef])

  const handleButtonClick = useCallback(() => {
    if (!openOptions) {
      handleOpen()
    } else {
      handleClose()
    }
  }, [handleClose, handleOpen, openOptions])

  const isChecked = useCallback(
    option => internalValue.some(val => val.value === option.value),
    [internalValue]
  )

  return (
    <UseClickOutsideElement handleClick={handleBlur} handleFocusOutside={handleBlur}>
      <BaseWrapper>
        <Popper show={openOptions} useReferenceWidth placement="bottom-start">
          {reference => (
            <CustomSelectCheckbox
              as="button"
              type="button"
              aria-haspopup="true"
              id={`${id}Label ${id}Content`}
              status={status}
              aria-disabled={disabled}
              aria-readonly={readOnly}
              aria-expanded={openOptions}
              className={className}
              ref={node => {
                reference(node)
                selectRef.current = node
              }}
              disabled={disabled}
              name={name}
              onClick={handleButtonClick}
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
                value={displayValue}
                status={status}
                disabled={disabled}
              >
                {internalValue.length ? displayValue : placeholder}
              </DisplaySelection>
              <IconWrapper>
                <Icon
                  icon={openOptions ? 'chevronUp' : 'chevronDown'}
                  styleColor={openOptions ? 'lightBlueCash300' : 'greyCash400'}
                />
              </IconWrapper>
            </CustomSelectCheckbox>
          )}
          <CheckboxOptionsWrapper active={openOptions}>
            <CheckboxOptionsBox numberOptions={options?.length}>
              {options?.map(option => (
                <OptionCheckbox role="listitem" key={option.value} optionSize={optionSize}>
                  <CheckboxBasic
                    id={`${id}checkbox${option.value}`}
                    name={option.text}
                    label={option.text}
                    checked={isChecked(option)}
                    onChange={() => handleClickOption(option)}
                  />
                </OptionCheckbox>
              ))}
            </CheckboxOptionsBox>
            {clearText && (
              <ClearOptions optionSize={optionSize}>
                <Button
                  icon="close"
                  iconSize={16}
                  size="large"
                  type="button"
                  styleType="text"
                  styleColor="blue"
                  onClick={removeAll}
                >
                  {clearText}
                </Button>
              </ClearOptions>
            )}
          </CheckboxOptionsWrapper>
        </Popper>
        <HelperText
          status={disabled ? 'default' : status}
          infoMessage={infoMessage}
          errorMessage={errorMessage}
        />
      </BaseWrapper>
    </UseClickOutsideElement>
  )
}

DropdownWithCheckbox.propTypes = {
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
   * Somente um pode ser Default (se todos forem removidos, ele será selecionado).
   */
  options: arrayOf(
    shape({
      value: string.isRequired,
      text: string.isRequired,
      isDefault: bool
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
  /**
   * Tipo das opções para mensagem de mais de 2 selecionados
   */
  type: string,
  /**
   * Texto que será exibido no botão de limpar o dropdown
   */
  clearText: string,
  onChange: func,
  onBlur: func,
  className: string,
  readOnly: bool,
  value: arrayOf(
    shape({
      value: string.isRequired,
      text: string.isRequired,
      isDefault: bool
    })
  )
}

DropdownWithCheckbox.defaultProps = {
  disabled: false,
  onChange: null,
  onBlur: null,
  status: 'default',
  optionSize: 'default',
  placeholder: '',
  errorMessage: '',
  infoMessage: '',
  className: '',
  type: '',
  clearText: '',
  readOnly: false,
  value: []
}
