import React from 'react'

import { oneOf, oneOfType, string, node, element, elementType } from 'prop-types'

import { Wrapper } from './styles'

export const Tag = ({ styleType, text, children, className }) => (
  <Wrapper data-testid="Tag" styleType={styleType} className={className}>
    <span>{text}</span>
    {children}
  </Wrapper>
)

Tag.defaultProps = {
  className: '',
  children: '',
  styleType: 'default'
}

Tag.propTypes = {
  /** className permite estilização em outros lugares */
  className: string,
  /** styleType define a cor de uso dentro das cores abaixo */
  styleType: oneOf([
    'lightBlue',
    'darkBlue',
    'cyan',
    'gold',
    'gray',
    'success',
    'warning',
    'danger',
    'default'
  ]),
  /** Children elementos que vão dentro da Tag além do texto. */
  children: oneOfType([node, element, elementType, string]),
  /** Text define o texto escrito no label */
  text: string.isRequired
}
