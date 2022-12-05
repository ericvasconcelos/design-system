import React from 'react'

import { screen } from '@testing-library/react'
import { Tag } from 'components/Tag'
import { theme } from 'styles/theme'
import { getColorFromName } from 'utils/getColorFromName'
import { styledRender } from 'utils/styledRender'

describe('Render Tag Component when', () => {
  it('styleType no style prop', () => {
    const { container } = styledRender(<Tag text="Tag" />)
    const label = screen.getByTestId('Tag')

    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({
      color: theme.pallete.lightBlueCash[500],
      backgroundColor: getColorFromName({ theme, styleColor: 'lightBlueCash200-40' })
    })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('styleType is default', () => {
    const { container } = styledRender(<Tag styleType="default" text="Tag" />)
    const label = screen.getByTestId('Tag')

    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({
      color: theme.pallete.lightBlueCash[500],
      backgroundColor: getColorFromName({ theme, styleColor: 'lightBlueCash200-40' })
    })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('styleType is darkBlue', () => {
    const { container } = styledRender(<Tag styleType="darkBlue" text="Tag" />)
    const label = screen.getByTestId('Tag')

    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({
      color: theme.pallete.greyCash[100],
      backgroundColor: theme.pallete.darkBlueCash[300]
    })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('styleType is lightBlue', () => {
    const { container } = styledRender(<Tag styleType="lightBlue" text="Tag" />)
    const label = screen.getByTestId('Tag')

    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({
      color: theme.pallete.lightBlueCash[300],
      backgroundColor: theme.pallete.lightBlueCash[100]
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('styleType is gold', () => {
    const { container } = styledRender(<Tag styleType="gold" text="Tag" />)
    const label = screen.getByTestId('Tag')

    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({
      color: theme.pallete.goldCash[400],
      backgroundColor: theme.pallete.goldCash[100]
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('styleType is gray', () => {
    const { container } = styledRender(<Tag styleType="gray" text="Tag" />)
    const label = screen.getByTestId('Tag')

    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({
      color: theme.pallete.darkBlueCash[200],
      backgroundColor: getColorFromName({ theme, styleColor: 'darkBlueCash200-16' })
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('styleType is warning', () => {
    const { container } = styledRender(<Tag styleType="warning" text="Tag" />)
    const label = screen.getByTestId('Tag')

    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({
      color: theme.pallete.warning[400],
      backgroundColor: getColorFromName({ theme, styleColor: 'warning400-16' })
    })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('styleType is danger', () => {
    const { container } = styledRender(<Tag styleType="danger" text="Tag" />)
    const label = screen.getByTestId('Tag')

    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({
      color: theme.pallete.error[300],
      backgroundColor: getColorFromName({ theme, styleColor: 'error300-16' })
    })
    expect(container.firstChild).toMatchSnapshot()
  })
})
