import React from 'react'

import { instanceOf, node } from 'prop-types'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { theme as LibTheme } from 'styles/theme'

export const ThemeProvider = ({ theme, children }) => {
  const innerTheme = { ...LibTheme, theme }
  return <StyledThemeProvider theme={innerTheme}>{children}</StyledThemeProvider>
}

ThemeProvider.propTypes = {
  theme: instanceOf(Object),
  children: node.isRequired
}

ThemeProvider.defaultProps = {
  theme: {}
}
