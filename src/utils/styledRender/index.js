import React from 'react'

import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

export const styledRender = (children, options = {}) => {
  const rendered = render(<ThemeProvider theme={theme}>{children}</ThemeProvider>, options)
  return {
    ...rendered,
    rerender: (ui, rerenderOptions = {}) =>
      styledRender(ui, { container: rendered.container, ...rerenderOptions })
  }
}
