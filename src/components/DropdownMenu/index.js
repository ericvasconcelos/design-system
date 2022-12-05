import React, { useState } from 'react'

import { Button } from 'components/Button'
import { Popper } from 'components/Popper'
import PropTypes, { arrayOf, bool, string, func } from 'prop-types'

import { Wrapper } from './styles'
/**
 * DropDownMenu é um componente de
 * menu dropdown controlado por um botão.
 * O componente renderiza uma lista de elementos
 * passados por quen estancia o componente.
 */
export const DropdownMenu = ({
  id,
  buttonLabel,
  buttonIcon,
  buttonStyle,
  className,
  expanded,
  menuItems
}) => {
  const [show, setShow] = useState(false)

  const toggleVisibility = () => {
    setShow(!show)
  }

  return (
    <Popper showArrow show={show} arrowBorderColor="greyCash300">
      {reference => (
        <Button
          ref={referenceNode => {
            reference(referenceNode)
          }}
          expanded={expanded}
          icon={buttonIcon}
          styleType={buttonStyle}
          onClick={toggleVisibility}
          aria-haspopup
          className={className}
          aria-expanded={show}
          aria-describedby="initInstr"
          aria-owns={`result${id}`}
          aria-autocomplete="both"
          aria-activedescendant=""
          id={id}
          tabIndex={-1}
        >
          {buttonLabel}
        </Button>
      )}
      <Wrapper id={`result${id}`} aria-labelledby={id} role="listbox">
        {menuItems && menuItems.map(item => <li key={item.key}>{item.render()}</li>)}
      </Wrapper>
    </Popper>
  )
}

DropdownMenu.propTypes = {
  /**
   * buttonLabel é o texto que aparece
   * no botão que controla o menu
   */
  buttonLabel: string,
  /**
   * buttonIcon é o ícone que aparece
   * no botão que controla o menu
   */
  buttonIcon: string,
  /**
   * buttonStyle é o styleType
   * do botão que controla o menu
   */
  buttonStyle: string,
  /**
   * className se refere a prop className
   * do botão que controla o menu
   */
  className: string,
  /**
   * expanded se refere a prop expanded
   * do botão que controla o menu
   */
  expanded: bool,
  /**
   * id será passado ao
   * do botão que controla o menu
   */
  id: string.isRequired,
  /**
   * é uma lista de nodes
   * que farão parte do menu
   */
  menuItems: arrayOf(
    PropTypes.shape({
      key: string,
      render: func
    })
  )
}

DropdownMenu.defaultProps = {
  buttonLabel: '',
  buttonIcon: '',
  buttonStyle: 'primary',
  className: '',
  expanded: false,
  menuItems: []
}
