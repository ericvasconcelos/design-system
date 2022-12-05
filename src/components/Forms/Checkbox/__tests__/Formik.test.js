import React from 'react'

import userEvent from '@testing-library/user-event'
import { Formik, Form } from 'formik'
import { styledRender } from 'utils/styledRender'

import { CheckboxWithFormik } from '../CheckboxWithFormik'

describe('should render the component correctly when', () => {
  it('has basic props', () => {
    const { container, getByText, getByLabelText } = styledRender(
      <Formik initialValues={{ checkbox: false }}>
        <Form>
          <CheckboxWithFormik id="checkbox" name="checkbox" label="Checkbox" />
        </Form>
      </Formik>
    )

    expect(getByLabelText('Checkbox')).not.toBeChecked()
    expect(getByText('Checkbox')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('has checked initial value', () => {
    const { container, getByLabelText } = styledRender(
      <Formik initialValues={{ checkbox: true }}>
        <Form>
          <CheckboxWithFormik id="checkbox" name="checkbox" label="Checkbox" />
        </Form>
      </Formik>
    )

    expect(getByLabelText('Checkbox')).toBeChecked()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('has disabled prop', () => {
    const onChange = jest.fn()
    const { container, getByLabelText } = styledRender(
      <Formik initialValues={{ checkbox: false }}>
        <Form>
          <CheckboxWithFormik
            id="checkbox"
            name="checkbox"
            label="Checkbox"
            disabled
            onChange={onChange}
          />
        </Form>
      </Formik>
    )

    userEvent.click(getByLabelText('Checkbox'))

    expect(onChange).not.toBeCalled()
    expect(getByLabelText('Checkbox')).toHaveAttribute('disabled')
    expect(container.firstChild).toMatchSnapshot()
  })

  it('has indeterminate prop', () => {
    const { container, getByLabelText } = styledRender(
      <Formik initialValues={{ checkbox: false }}>
        <Form>
          <CheckboxWithFormik id="checkbox" name="checkbox" label="Checkbox" indeterminate />
        </Form>
      </Formik>
    )

    expect(getByLabelText('Checkbox')).toHaveAttribute('indeterminate')
    expect(container.firstChild).toMatchSnapshot()
  })

  it('click call onChange prop and change to checked input', () => {
    const onChange = jest.fn()
    const { getByLabelText } = styledRender(
      <Formik initialValues={{ checkbox: false }}>
        <Form>
          <CheckboxWithFormik id="checkbox" name="checkbox" label="Checkbox" onChange={onChange} />
        </Form>
      </Formik>
    )

    userEvent.click(getByLabelText('Checkbox'))

    expect(getByLabelText('Checkbox')).toBeChecked()
    expect(onChange).toBeCalled()
  })
})
