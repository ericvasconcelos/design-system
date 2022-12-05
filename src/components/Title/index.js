import React from 'react'

import { node, oneOf, string } from 'prop-types'
import { getTypographyNames } from 'utils/getTypographyNames'
import { styleColorValidator } from 'utils/styleColorValidator'

import { H1 } from './styles'

export const Title = ({ children, styleColor, id, level, styleType, className }) => (
  <H1
    data-testid="Title"
    styleType={styleType}
    id={id}
    as={level}
    styleColor={styleColor}
    className={className}
  >
    {children}
  </H1>
)

Title.defaultProps = {
  className: '',
  styleType: 'title1',
  styleColor: 'greyCash400',
  level: 'h1'
}

Title.propTypes = {
  className: string,
  children: node.isRequired,
  styleType: oneOf(getTypographyNames()),
  level: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  id: string.isRequired,
  styleColor: styleColorValidator
}
