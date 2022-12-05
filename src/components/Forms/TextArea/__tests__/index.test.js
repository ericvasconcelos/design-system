import React from 'react'

import userEvent from '@testing-library/user-event'
import { Formik, Form } from 'formik'
import { styledRender } from 'utils/styledRender'

import { TextAreaBasic, TextAreaWithFormik } from '../index.js'

describe('Should render TextAreaBasic when', () => {
  it('has default props', () => {
    const { getByTestId, getByText } = styledRender(
      <TextAreaBasic
        id="testId"
        name="testName"
        label="some label here"
        informativeMessage="some informative message here"
      />
    )

    userEvent.type(getByTestId('TextAreaBasic'), 'some content typed here')

    expect(getByText('some label here')).toBeInTheDocument()
    expect(getByTestId('TextAreaBasic')).toMatchSnapshot()
  })

  it('has error status', () => {
    const { getByTestId, getByText } = styledRender(
      <TextAreaBasic
        id="testId"
        name="testName"
        label="some label here"
        informativeMessage="some informative message here"
        errorMessage="some error message here"
        status="error"
      />
    )

    expect(getByText('some error message here')).toBeInTheDocument()
    expect(getByTestId('TextAreaBasic')).toMatchSnapshot()
  })

  it('has default props using Formik', () => {
    const { getByTestId, getByText } = styledRender(
      <Formik initialValues={{ name: 'textArea' }}>
        <Form>
          <TextAreaWithFormik
            id="testId"
            name="testName"
            label="some label here"
            informativeMessage="some informative message here"
          />
        </Form>
      </Formik>
    )

    userEvent.type(getByTestId('TextAreaBasic'), 'some content typed here')

    expect(getByText('some label here')).toBeInTheDocument()
    expect(getByTestId('TextAreaBasic')).toMatchSnapshot()
  })
})
