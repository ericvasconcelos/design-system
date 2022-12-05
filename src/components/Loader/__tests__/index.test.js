import React from 'react'

import { styledRender } from 'utils/styledRender'

import { Loader } from '../index.js'

test('should render the component correctly', () => {
  const { getByTestId } = styledRender(<Loader />)

  const component = getByTestId('Loader')

  expect(component).toBeInTheDocument()
  expect(component).toMatchSnapshot()
})

test('should render the component corectly when has children', () => {
  const { getByTestId, getByText } = styledRender(
    <Loader>
      <p>message</p>
    </Loader>
  )

  const component = getByTestId('Loader')

  expect(component).toBeInTheDocument()
  expect(getByText('message')).toBeInTheDocument()
  expect(component).toMatchSnapshot()
})
