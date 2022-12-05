import React from 'react'

import userEvent from '@testing-library/user-event'
import { styledRender } from 'utils/styledRender'

import { CheckboxBasic } from '../CheckboxBasic'

describe('should render the component correctly when', () => {
  it('has basic props', () => {
    const { container, getByText, getByLabelText } = styledRender(
      <CheckboxBasic id="checkbox" name="checkbox" label="Checkbox" />
    )

    expect(getByLabelText('Checkbox')).not.toBeChecked()
    expect(getByText('Checkbox')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('has checked prop', () => {
    const { container, getByLabelText } = styledRender(
      <CheckboxBasic id="checkbox" name="checkbox" label="Checkbox" checked />
    )

    expect(getByLabelText('Checkbox')).toBeChecked()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('has messageError prop', () => {
    const { container, getByText } = styledRender(
      <CheckboxBasic id="checkbox" name="checkbox" label="Checkbox" messageError="Erro" />
    )

    expect(getByText('Erro')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('has disabled prop', () => {
    const onChange = jest.fn()
    const { container, getByLabelText } = styledRender(
      <CheckboxBasic id="checkbox" name="checkbox" label="Checkbox" disabled onChange={onChange} />
    )

    userEvent.click(getByLabelText('Checkbox'))

    expect(onChange).not.toBeCalled()
    expect(getByLabelText('Checkbox')).toHaveAttribute('disabled')
    expect(container.firstChild).toMatchSnapshot()
  })

  it('has indeterminate prop', () => {
    const { container, getByLabelText } = styledRender(
      <CheckboxBasic id="checkbox" name="checkbox" label="Checkbox" indeterminate />
    )

    expect(getByLabelText('Checkbox')).toHaveAttribute('indeterminate')
    expect(container.firstChild).toMatchSnapshot()
  })

  it('click call onChange prop', () => {
    const onChange = jest.fn()
    const { getByLabelText } = styledRender(
      <CheckboxBasic id="checkbox" name="checkbox" label="Checkbox" onChange={onChange} />
    )

    userEvent.click(getByLabelText('Checkbox'))

    expect(getByLabelText('Checkbox')).toBeChecked()
    expect(onChange).toBeCalled()
  })
})
