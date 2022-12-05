import React from 'react'

import { theme } from 'styles/theme'
import { styledRender } from 'utils/styledRender'

import { Container } from '../index.js'

describe('should render the component correctly when', () => {
  it('has basic usage', () => {
    const expectedCss = `
        margin: auto;
        width: ${theme.grid.smMobile[1]};
      }
      @media (min-width: 360px) {
        width: ${theme.grid.mobile[1]};
      }
      @media (min-width: 768px) {
        width: ${theme.grid.smTablet[1]};
      }
      @media (min-width: 1024px) {
        width: ${theme.grid.tablet[1]};
      }
      @media (min-width: 1280px) {
        width: ${theme.grid.laptop[1]};
      }
      @media (min-width: 1920px) {
        width: ${theme.grid.desktop[1]};
      }
      {}}}
    `
    const { getByTestId } = styledRender(
      <Container>
        <div data-testid="content">Consectetur do ipsum et voluptate ad nisi nisi sint.</div>
      </Container>
    )
    const component = getByTestId('Container')
    expect(component).toHaveStyle(expectedCss)
    expect(expect(getByTestId('content')).toBeInTheDocument())
    expect(component).toMatchSnapshot()
  })
})
