import React from 'react'

import { theme } from 'styles/theme'
import { styledRender } from 'utils/styledRender'

import { List } from '../index.js'
import { alignProps, flowProps, listStyleProps, gapProps, justifyProps } from './fixture'

describe('should render the list correctly when', () => {
  const items = ['itemOne', 'itemTwo']
  it('prop isOrdered is not set', () => {
    const { getByTestId, getByText } = styledRender(<List items={items} />)

    const component = getByTestId('List')

    expect(component).toBeHtmlElementType('ul')
    expect(getByText('itemOne')).toBeHtmlElementType('li')
    expect(getByText('itemTwo')).toBeHtmlElementType('li')

    expect(component).toMatchSnapshot()
  })

  it('prop isOrdered is set to false', () => {
    const { getByTestId, getByText } = styledRender(<List items={items} isOrdered={false} />)

    const component = getByTestId('List')

    expect(component).toBeHtmlElementType('ul')
    expect(getByText('itemOne')).toBeHtmlElementType('li')
    expect(getByText('itemTwo')).toBeHtmlElementType('li')

    expect(component).toMatchSnapshot()
  })

  it('prop isOrdered is set to true', () => {
    const { getByTestId, getByText } = styledRender(<List items={items} isOrdered />)

    const component = getByTestId('List')

    expect(component).toBeHtmlElementType('ol')
    expect(getByText('itemOne')).toBeHtmlElementType('li')
    expect(getByText('itemTwo')).toBeHtmlElementType('li')

    expect(component).toMatchSnapshot()
  })

  it('prop isOrdered is set to true', () => {
    const { getByTestId, getByText } = styledRender(<List items={items} isOrdered />)

    const component = getByTestId('List')

    expect(component).toBeHtmlElementType('ol')
    expect(getByText('itemOne')).toBeHtmlElementType('li')
    expect(getByText('itemTwo')).toBeHtmlElementType('li')

    expect(component).toHaveStyleRule('display', 'flex')
    expect(component).toHaveStyleRule('align-items', 'center')
    expect(component).toHaveStyleRule('flex-direction', 'column')
    expect(component).toHaveStyleRule('gap', theme.gutters.sm)
    expect(component).toHaveStyleRule('justify-content', 'space-between')
    expect(component).toHaveStyleRule('list-style', 'none')

    expect(component).toMatchSnapshot()
  })

  it.each(alignProps)('style for align: %s', align => {
    const { getByTestId } = styledRender(<List items={items} isOrdered align={align} />)

    const component = getByTestId('List')
    expect(component).toHaveStyleRule('align-items', align)
    expect(component).toHaveStyleRule('flex-direction', 'column')
    expect(component).toHaveStyleRule('gap', theme.gutters.sm)
    expect(component).toHaveStyleRule('justify-content', 'space-between')
    expect(component).toHaveStyleRule('list-style', 'none')
    expect(component).toMatchSnapshot()
  })
  it.each(flowProps)('style for  flow: %s', flow => {
    const { getByTestId } = styledRender(<List items={items} isOrdered flow={flow} />)

    const component = getByTestId('List')
    expect(component).toHaveStyleRule('align-items', 'center')
    expect(component).toHaveStyleRule('flex-direction', flow)
    expect(component).toHaveStyleRule('gap', theme.gutters.sm)
    expect(component).toHaveStyleRule('justify-content', 'space-between')
    expect(component).toHaveStyleRule('list-style', 'none')
    expect(component).toMatchSnapshot()
  })

  it.each(gapProps)('style for  gap: %s', gap => {
    const { getByTestId } = styledRender(<List items={items} isOrdered gap={gap} />)

    const component = getByTestId('List')
    expect(component).toHaveStyleRule('align-items', 'center')
    expect(component).toHaveStyleRule('flex-direction', 'column')
    expect(component).toHaveStyleRule('gap', theme.gutters[gap])
    expect(component).toHaveStyleRule('justify-content', 'space-between')
    expect(component).toHaveStyleRule('list-style', 'none')
    expect(component).toMatchSnapshot()
  })

  it.each(justifyProps)('style for  justify: %s', justify => {
    const { getByTestId } = styledRender(<List items={items} isOrdered justify={justify} />)

    const component = getByTestId('List')
    expect(component).toHaveStyleRule('align-items', 'center')
    expect(component).toHaveStyleRule('flex-direction', 'column')
    expect(component).toHaveStyleRule('gap', theme.gutters.sm)
    expect(component).toHaveStyleRule('justify-content', justify)
    expect(component).toHaveStyleRule('list-style', 'none')
    expect(component).toMatchSnapshot()
  })
  it.each(listStyleProps)('style for  listStyle: %s', listStyle => {
    const { getByTestId } = styledRender(<List items={items} isOrdered listStyle={listStyle} />)

    const component = getByTestId('List')
    expect(component).toHaveStyleRule('align-items', 'center')
    expect(component).toHaveStyleRule('flex-direction', 'column')
    expect(component).toHaveStyleRule('gap', theme.gutters.sm)
    expect(component).toHaveStyleRule('justify-content', 'space-between')
    expect(component).toHaveStyleRule('list-style', listStyle)
    expect(component).toMatchSnapshot()
  })
})
