import React from 'react'

import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Formik } from 'formik'
import { theme } from 'styles/theme'
import { styledRender } from 'utils/styledRender'

import { InputWithFormik } from '../index.js'

const formikRender = (children, formikProps, options = {}) => {
  const rendered = styledRender(<Formik {...formikProps}>{children}</Formik>, options)
  return {
    ...rendered,
    rerender: (ui, rerenderOptions = {}) =>
      formikRender(ui, { container: rendered.container, ...rerenderOptions })
  }
}

describe('InputWithFormik should behave correctly when', () => {
  it('simplest usage', async () => {
    const { container, getByLabelText, queryByTestId, getByTestId } = formikRender(
      <InputWithFormik id="test" name="test" label="test label" />,
      {
        initialValues: { test: '' }
      }
    )

    const inputElement = getByLabelText('test label')

    expect(inputElement).toHaveValue('')
    expect(queryByTestId('Icon')).not.toBeInTheDocument()

    userEvent.click(inputElement)

    await waitFor(() => {
      expect(inputElement).toHaveFocus()
      expect(getByTestId('InputWrapper')).toHaveStyle({
        'border-color': theme.pallete.lightBlueCash[200]
      })
    })

    userEvent.type(inputElement, 'lorem ipsun')

    await waitFor(() => {
      expect(inputElement).toHaveValue('lorem ipsun')
    })

    userEvent.tab()

    await waitFor(() => {
      expect(getByTestId('Icon')).toHaveStyle({
        backgroundImage: theme.icons.success
      })
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  it('with icon', async () => {
    const { container, getByLabelText, getByTestId } = formikRender(
      <InputWithFormik id="test" name="test" label="test label" icon="user" />,
      {
        initialValues: { test: '' }
      }
    )
    const icon = getByTestId('Icon')
    const inputElement = getByLabelText('test label')

    expect(icon).toHaveStyle({
      'mask-image': `url(${theme.icons.user})`,
      'background-color': theme.pallete.darkBlueCash[100]
    })
    userEvent.click(inputElement)

    await waitFor(() => {
      expect(inputElement).toHaveFocus()
      expect(icon).toHaveStyle({
        backgroundColor: theme.pallete.lightBlueCash[300]
      })
      expect(container.firstChild).toMatchSnapshot()
    })
  })
  it('with helper and error text', async () => {
    const { container, getByLabelText, getByTestId, getByText } = formikRender(
      <InputWithFormik id="test" name="test" label="test label" infoMessage="lorem ipsum" />,
      {
        initialValues: { test: '' },
        validate: () => ({ test: 'error' })
      }
    )
    const icon = getByTestId('Icon')
    const inputElement = getByLabelText('test label')
    const helperText = getByText('lorem ipsum')

    expect(helperText).toBeInTheDocument()

    userEvent.click(inputElement)
    userEvent.tab()

    await waitFor(() => {
      expect(helperText).toHaveTextContent('error')
      expect(icon).toHaveStyle({ backgroundImage: theme.icons.error })
      expect(container.firstChild).toMatchSnapshot()
    })
  })
  it('with mask', async () => {
    const { container, getByLabelText } = formikRender(
      <InputWithFormik id="test" name="test" label="test label" mask="99/99/99" />,
      {
        initialValues: { test: '' },
        validate: () => ({ test: 'error' })
      }
    )

    const inputElement = getByLabelText('test label')
    userEvent.type(inputElement, '123456')

    await waitFor(() => {
      expect(inputElement).toHaveValue('12/34/56')
      expect(container.firstChild).toMatchSnapshot()
    })
  })
  it('with two masks', async () => {
    const { container, getByLabelText } = formikRender(
      <InputWithFormik id="test" name="test" label="test label" mask={['99/99/99', '99.999.99']} />,
      {
        initialValues: { test: '' },
        validate: () => ({ test: 'error' })
      }
    )

    const inputElement = getByLabelText('test label')
    userEvent.type(inputElement, '123456')

    await waitFor(() => {
      expect(inputElement).toHaveValue('12/34/56')
    })

    userEvent.type(inputElement, '78')
    await waitFor(() => {
      expect(inputElement).toHaveValue('12.345.67')
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  it('with isLoading status', () => {
    const { container, getByLabelText } = formikRender(
      <InputWithFormik id="test" name="test" label="test label" isLoading />,
      {
        initialValues: { test: '' },
        validate: () => ({ test: 'error' })
      }
    )
    expect(getByLabelText('test label')).toHaveStyle({ backgroundImage: theme.icons.loader })
    expect(container.firstChild).toMatchSnapshot()
  })
})
