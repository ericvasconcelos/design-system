import React from 'react'

import { node, string } from 'prop-types'

import { Wrapper, Spinner } from './styles'

export const Loader = ({ className, children }) => (
  <Wrapper data-testid="Loader" className={className}>
    <Spinner />
    {children}
  </Wrapper>
)

Loader.propTypes = {
  className: string,
  children: node
}

Loader.defaultProps = {
  className: '',
  children: null
}
