import React from 'react'

import { node, oneOf, oneOfType, string } from 'prop-types'
import { getTypographyNames } from 'utils/getTypographyNames'
import { styleColorValidator } from 'utils/styleColorValidator'

import { SelectedComponent } from './styles'

export const Text = ({ tag, styleColor, styleType, children, className }) => (
  <SelectedComponent
    data-testid="Text"
    as={tag}
    className={className}
    styleColor={styleColor}
    styleType={styleType}
  >
    {children}
  </SelectedComponent>
)


Text.propTypes = {
  children: node.isRequired,
  className: string,
  tag: oneOfType([string, node]),
  styleType: oneOf(getTypographyNames()),
  styleColor: styleColorValidator
}

Text.defaultProps = {
  tag: 'p',
  styleType: 'body1',
  styleColor: 'greyCash400',
  className: ''
}
