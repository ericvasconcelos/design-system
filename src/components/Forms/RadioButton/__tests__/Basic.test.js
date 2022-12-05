import React from 'react'

import userEvent from '@testing-library/user-event'
import { styledRender } from 'utils/styledRender'

import { RadioButtonBasic } from '../RadioButtonBasic'

describe('should render the component correctly when', () => {
  const options = [
    { label: 'One', value: 'one' },
    { label: 'Two', value: 'two' },
    { label: 'Three', value: 'three' }
  ]

  it('has basic props', () => {
    const { container, getByText, getByLabelText } = styledRender(
      <RadioButtonBasic name="example" label="Example" options={options} />
    )

    expect(getByLabelText(/one/i)).not.toBeChecked()
    expect(getByLabelText(/two/i)).not.toBeChecked()
    expect(getByLabelText(/three/i)).not.toBeChecked()
    expect(getByText('Example')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('has checked prop', () => {
    const { container, getByLabelText } = styledRender(
      <RadioButtonBasic name="example" label="Example" options={options} value="one" />
    )

    expect(getByLabelText(/one/i)).toBeChecked()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('has messageError prop', () => {
    const { container, getByText } = styledRender(
      <RadioButtonBasic name="example" label="Example" options={options} messageError="Erro" />
    )

    expect(getByText('Erro')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('has disabled prop', () => {
    const onChange = jest.fn()
    const { container, getByLabelText } = styledRender(
      <RadioButtonBasic
        name="example"
        label="Example"
        options={options}
        disabled
        onChange={onChange}
      />
    )

    userEvent.click(getByLabelText(/one/i))

    expect(onChange).not.toBeCalled()
    expect(getByLabelText(/one/i)).toHaveAttribute('disabled')
    expect(container.firstChild).toMatchSnapshot()
  })

  it('click call onChange prop', () => {
    const onChange = jest.fn()
    const { getByLabelText } = styledRender(
      <RadioButtonBasic name="example" label="Example" options={options} onChange={onChange} />
    )

    userEvent.click(getByLabelText(/one/i))

    expect(getByLabelText(/one/i)).toBeChecked()
    expect(onChange).toBeCalled()
  })
})
