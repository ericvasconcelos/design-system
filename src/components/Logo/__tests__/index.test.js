import React from 'react'

import { styledRender } from 'utils/styledRender'

import { Logo } from '../index.js'

describe('Logo component render when', () => {
  it('default render', () => {
    const { getByTestId } = styledRender(<Logo />)
    const component = getByTestId('Logo')

    expect(component).toHaveAttribute(
      'src',
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    )
    expect(component).toHaveAttribute('title', 'Logo CashMe azul claro')
    expect(component).toHaveAttribute('alt', 'Logo CashMe azul claro')
    expect(component).toMatchSnapshot()
  })

  it('white no text render', () => {
    const { getByTestId } = styledRender(<Logo logoType="white" />)
    const component = getByTestId('Logo')

    expect(component).toHaveAttribute(
      'src',
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    )
    expect(component).toHaveAttribute('title', 'Logo CashMe branco sem texto')
    expect(component).toHaveAttribute('alt', 'Logo CashMe branco sem texto')
    expect(component).toMatchSnapshot()
  })

  it('white with text render', () => {
    const { getByTestId } = styledRender(<Logo logoType="whiteText" />)
    const component = getByTestId('Logo')

    expect(component).toHaveAttribute(
      'src',
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    )
    expect(component).toHaveAttribute('title', 'Logo CashMe branco')
    expect(component).toHaveAttribute('alt', 'Logo CashMe branco')
    expect(component).toMatchSnapshot()
  })

  it('darkBlue no text render', () => {
    const { getByTestId } = styledRender(<Logo logoType="darkBlue" />)
    const component = getByTestId('Logo')

    expect(component).toHaveAttribute(
      'src',
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    )
    expect(component).toHaveAttribute('title', 'Logo CashMe azul escuro sem texto')
    expect(component).toHaveAttribute('alt', 'Logo CashMe azul escuro sem texto')
    expect(component).toMatchSnapshot()
  })

  it('darkBlue with text render', () => {
    const { getByTestId } = styledRender(<Logo logoType="darkBlueText" />)
    const component = getByTestId('Logo')

    expect(component).toHaveAttribute(
      'src',
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    )
    expect(component).toHaveAttribute('title', 'Logo CashMe azul escuro')
    expect(component).toHaveAttribute('alt', 'Logo CashMe azul escuro')
    expect(component).toMatchSnapshot()
  })

  it('lightBlue no text render', () => {
    const { getByTestId } = styledRender(<Logo logoType="lightBlue" />)
    const component = getByTestId('Logo')

    expect(component).toHaveAttribute(
      'src',
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    )
    expect(component).toHaveAttribute('title', 'Logo CashMe azul claro sem texto')
    expect(component).toHaveAttribute('alt', 'Logo CashMe azul claro sem texto')
    expect(component).toMatchSnapshot()
  })

  it('lightBlue with text render', () => {
    const { getByTestId } = styledRender(<Logo logoType="lightBlueText" />)
    const component = getByTestId('Logo')

    expect(component).toHaveAttribute(
      'src',
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    )
    expect(component).toHaveAttribute('title', 'Logo CashMe azul claro')
    expect(component).toHaveAttribute('alt', 'Logo CashMe azul claro')
    expect(component).toMatchSnapshot()
  })

  it('Logo with alt and title custom render', () => {
    const { getByTestId } = styledRender(
      <Logo logoType="lightBlueText" alt="Alt text" title="Title text" />
    )
    const component = getByTestId('Logo')

    expect(component).toHaveAttribute(
      'src',
      'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
    )
    expect(component).toHaveAttribute('title', 'Title text')
    expect(component).toHaveAttribute('alt', 'Alt text')
    expect(component).toMatchSnapshot()
  })
})
