import React, { useState, useEffect, useCallback } from 'react'

import { Popper } from 'components/Popper'
import { Text } from 'components/Text'
import { arrayOf, bool, string, func, instanceOf } from 'prop-types'

import { Wrapper, DataList, Input, Label, InputIcon, Option } from './styles'

function debounce(expenseCallback, cheapCallback, timeout = 1000) {
  let timer
  return (...args) => {
    const { value: internalValue } = args[0].target
    cheapCallback(internalValue)
    clearTimeout(timer)
    timer = setTimeout(() => {
      timer = null
      expenseCallback(...args)
    }, timeout)
  }
}

/**
 * Search é o componente de busca com preenchimento automático de campo
 */

export const Search = ({
  ariaLabel,
  name,
  icon,
  label,
  id,
  disabled,
  readOnly,
  options,
  onChange,
  onSubmit,
  className
}) => {
  const [active, setActive] = useState(false)
  const [internalOptions, setInternalOptions] = useState(options)
  const [value, setValue] = useState('')

  useEffect(() => {
    const filteredValue = options.filter(option => option[0]
      .toLowerCase()
      .includes(value.toLowerCase()))

    setInternalOptions(filteredValue)
  }, [value])

  const handleChange = useCallback(debounce(onChange, setValue), [onChange, setValue])

  const handleShow = () => {
    if (!value && internalOptions.length === 0) {
      return setActive(false)
    }

    return setActive(true)
  }

  return (
    <Popper show={active} useReferenceWidth placement="bottom-start">
      {reference => (
        <Wrapper data-testid="Search" className={className}>
          <Label htmlFor={id} disabled={disabled} readOnly={readOnly} hasValue={value}>
            {label}
          </Label>
          <Input
            ref={node => {
              reference(node)
            }}
            autoComplete="off"
            id={id}
            name={name}
            aria-label={ariaLabel}
            disabled={disabled}
            readOnly={readOnly}
            onFocus={() => handleShow()}
            onBlur={() => setActive(false)}
            onChange={handleChange}
            value={value}
          />
          <InputIcon
            icon={icon}
            disabled={disabled}
            readOnly={readOnly}
            styleColor={active ? 'lightBlueCash300' : 'darkBlueCash100'}
          />
        </Wrapper>
      )}
      <DataList role="listbox" active={active} numberOptions={internalOptions.length}>
        {internalOptions.length > 0 ? (
          internalOptions.map(option => (
            <Option
              key={option[1]}
              onMouseDown={event => event.preventDefault()}
              onClick={() => {
                onSubmit(option)
                setValue(option[0])
                setActive(false)
              }}
              selected={value === option[0]}
            >
              {option[0]}
            </Option>
          ))
        ) : (
          <Text>Não há nenhum resultado para a busca</Text>
        )}
      </DataList>
    </Popper>
  )
}

Search.propTypes = {
  ariaLabel: string.isRequired,
  /**
   * Nome do input
   */
  name: string.isRequired,
  /**
   * Icone que será mostrado dentro da caixa de pesquisa
   */
  icon: string,
  /**
   * Nome que será mostrado dentro da caixa de pesquisa
   */
  label: string.isRequired,
  /**
   * ID do elemento
   */
  id: string.isRequired,
  /**
   * Define se está desabilitado ou não
   */
  disabled: bool,
  /**
   * Define se é só para leitura, não editável
   */
  readOnly: bool,
  /**
   * Array de opções para a caixa de resultados
   */
  options: arrayOf(instanceOf(Array)).isRequired,
  /**
   * Função chamada quando há alteração de texto no input, com debounce
   */
  onChange: func,
  /**
   * Função que é chamada para interação com o backend
   */
  onSubmit: func,
  className: string
}

Search.defaultProps = {
  icon: '',
  disabled: false,
  readOnly: false,
  onChange: () => {},
  onSubmit: () => {},
  className: ''
}
