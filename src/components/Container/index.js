import React from 'react'

import { node, string } from 'prop-types'

import { Wrapper } from './styles'

export const Container = ({ children, className }) => (
  <Wrapper data-testid="Container" className={className}>
    {children}
  </Wrapper>
)

Container.propTypes = {
  children: node.isRequired,
  className: string
}

Container.defaultProps = {
  className: ''
}
