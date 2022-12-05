import React, { useCallback, useEffect, useState } from 'react'

import { bool, instanceOf, oneOf, string } from 'prop-types'
import { usePopper } from 'react-popper'

import { Wrapper, Arrow } from './styles'

/**
 * O Popper é um componente de posicionamento
 * onde o children se posicionara próximo ao
 * elemento de referência.
 */
export const Popper = ({
  placement,
  children,
  showArrow,
  arrowColor,
  className,
  show,
  arrowBorderColor,
  useReferenceWidth
}) => {
  const [referenceElement, setReferenceElement] = useState(null)
  const [popperElement, setPopperElement] = useState(null)
  const [arrowElement, setArrowElement] = useState(null)
  const [isVisible, setVisibility] = useState(false)

  const setReferenceWidthToPopper = useCallback(({ state }) => {
    if (useReferenceWidth && state.rects?.reference) {
      state.styles.popper.width = `${state.rects.reference.width || 0}px`
    }

    return state
  }, [])

  const { styles, attributes, state, update } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      { name: 'arrow', enabled: showArrow, options: { element: arrowElement, padding: 5 } },
      {
        name: 'offset',
        options: {
          offset: [0, 10]
        }
      },
      {
        name: 'sameWidth',
        enabled: useReferenceWidth,
        fn: setReferenceWidthToPopper,
        phase: 'beforeWrite',
        requires: ['computeStyles']
      }
    ]
  })

  useEffect(async () => {
    if (show && popperElement) {
      setVisibility(true)
      const updatedState = await update()
      return setReferenceWidthToPopper({ state: updatedState })
    }

    setVisibility(false)
  }, [show, popperElement])

  return (
    <>
      {children[0](setReferenceElement)}
      <Wrapper
        isVisible={isVisible}
        data-testid="Popper"
        ref={setPopperElement}
        style={styles.popper}
        {...attributes.popper}
        className={className}
      >
        {showArrow && (
          <Arrow
            ref={setArrowElement}
            style={styles.arrow}
            placement={state?.placement}
            styleColor={arrowColor}
            arrowBorderColor={arrowBorderColor}
          />
        )}
        {children[1]}
      </Wrapper>
    </>
  )
}

Popper.propTypes = {
  /**
   * placement define a localização do popper com relação ai elemento de referência
   */
  placement: oneOf([
    'auto',
    'auto-start',
    'auto-end',
    'top',
    'top-start',
    'top-end',
    'bottom',
    'bottom-start',
    'bottom-end',
    'right',
    'right-start',
    'right-end',
    'left',
    'left-start',
    'left-end'
  ]),
  /**
   * o children rendereiza o popper
   */
  children: instanceOf(Array).isRequired,
  /**
   * showArrow define se será exibia a
   * flecha do balão, no estilo tooltip
   */
  showArrow: bool,
  /**
   * arrowColor define a cor da flecha exibida
   * para dar match no background do children
   */
  arrowColor: string,
  /**
   * className é passada para o wrapper do children
   * que é o elemento "flutuante".
   * Deve-se tomar cuidado para não sobrescrever estilos da biblioteca.
   * A princípio é melhor evitar
   */
  className: string,
  /**
   * show definie se o popper será exibido ou não
   */
  show: bool,
  /**
   * arrowBorderColor define se a flecha do balao
   * terá uma borda aparente e qual sua cor.
   */
  arrowBorderColor: string,
  /**
   * useReference width denota se o
   * o popper vai ter a mesma largura que o elemento de referencia
   */
  useReferenceWidth: bool
}

Popper.defaultProps = {
  placement: 'bottom',
  showArrow: false,
  className: '',
  arrowColor: 'greyCash100',
  show: false,
  arrowBorderColor: '',
  useReferenceWidth: false
}
