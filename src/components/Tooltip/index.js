
import React, { useState } from 'react'

import { Popper } from 'components/Popper'
import { func, node, string } from 'prop-types'

import { TooltipWrapper, ReferenceWrapper } from './styles'

/**
 * Tooltip é o componente mostrado quando o usuário faz o hover em algum elemento
 * que mostra uma dica ou instrução
 */

export const Tooltip = ({ className, placement, onMouseEnter, onMouseLeave, children }) => {
  const [show, setShow] = useState(false)
  const onMouseEnterInternal = () => {
    if (onMouseEnter) {
      onMouseEnter()
    }

    setShow(true)
  }
  const onMouseLeaveInternal = () => {
    if (onMouseLeave) {
      onMouseLeave()
    }

    setShow(false)
  }

  return (
    <Popper show={show} showArrow arrowColor="darkBlueCash400" placement={placement}>
      {reference => (
        <ReferenceWrapper
          data-testid="TooltipReference"
          onMouseEnter={onMouseEnterInternal}
          onMouseLeave={onMouseLeaveInternal}
          ref={reference}
        >
          {children[0]}
        </ReferenceWrapper>
      )}
      <TooltipWrapper className={className}>
        {children[1]}
      </TooltipWrapper>
    </Popper>
  )
}

Tooltip.propTypes = {
  /**
   * São 2 childrens
   * 1: Elemento de referência que o tooltip vai se basear
   * 2: Elemento que o tooltip vai receber como children
   */
  children: node.isRequired,
  /**
   * Posicionamento do tooltip
   */
  placement: string.isRequired,
  /**
   * Função externa chamada quando mouseEnter
   */
  onMouseEnter: func,
  /**
   * Função externa chamada quando mouseLeave
   */
  onMouseLeave: func,
  className: string
}

Tooltip.defaultProps = {
  onMouseEnter: null,
  onMouseLeave: null,
  className: ''
}
