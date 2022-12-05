import React from 'react'

import { render } from '@testing-library/react'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'

export const mockRouter = {
  basePath: '',
  pathname: '/',
  route: '/',
  asPath: '/',
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn()
  },
  isFallback: false
}

export const renderWithRouter = children =>
  render(
    <RouterContext.Provider value={mockRouter}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </RouterContext.Provider>
  )
