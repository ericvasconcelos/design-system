import React, { useRef } from 'react'

import userEvent from '@testing-library/user-event'
import { styledRender } from 'utils/styledRender'

import { Search } from '../index.js'

const options = [
  [
    'value1',
    'key1',
    []
  ],
  [
    'value2',
    'key2',
    []
  ],
  [
    'value3',
    'key3',
    []
  ],
  [
    'value4',
    'key4',
    []
  ]
]


const Component = () => {
  const ref = useRef()

  return (
    <Search
      name="search"
      label="search"
      id="id"
      ariaLabel="search component"
      icon="search"
      options={options}
      ref={ref}
    />
  )
}

describe('Should render Search component when', () => {
  it('has default props', () => {
    const { getByTestId, getByText, getByLabelText } = styledRender(<Component />)

    userEvent.type(getByLabelText('search'), '1')
    userEvent.click(getByText('value1'))

    expect(getByTestId('Search')).toMatchSnapshot()
  })

  it('do not have any valid option', () => {
    const { getByTestId, getByText, getByLabelText } = styledRender(<Component />)

    userEvent.type(getByLabelText('search'), '9')

    expect(getByText('Não há nenhum resultado para a busca')).toBeInTheDocument()
    expect(getByTestId('Search')).toMatchSnapshot()
  })
})

