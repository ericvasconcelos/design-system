import React from 'react'

import { waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { theme } from 'styles/theme'
import { styledRender } from 'utils/styledRender'

import { InputBasic } from '../index.js'

describe('Input should behave correctly when', () => {
  it('simplest usage', async () => {
    const { container, getByLabelText, queryByTestId, getByTestId } = styledRender(
      <InputBasic id="test" name="test" label="test label" />
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
      expect(container.firstChild).toMatchSnapshot()
    })
  })

  it('with icon', async () => {
    const { container, getByLabelText, getByTestId } = styledRender(
      <InputBasic id="test" name="test" label="test label" icon="user" />
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
  it('with helper text', async () => {
    const { container, getByLabelText, getByText } = styledRender(
      <InputBasic id="test" name="test" label="test label" infoMessage="lorem ipsum" />
    )
    const inputElement = getByLabelText('test label')
    const helperText = getByText('lorem ipsum')

    expect(helperText).toBeInTheDocument()

    userEvent.click(inputElement)
    userEvent.tab()

    await waitFor(() => {
      expect(container.firstChild).toMatchSnapshot()
    })
  })
  it('with error text', async () => {
    const { container, getByTestId, getByText } = styledRender(
      <InputBasic
        id="test"
        name="test"
        label="test label"
        errorMessage="error message"
        status="error"
      />
    )
    const helperText = getByText('error message')

    expect(helperText).toBeInTheDocument()

    await waitFor(() => {
      expect(getByTestId('Icon')).toHaveStyle({ backgroundImage: 'error' })
      expect(container.firstChild).toMatchSnapshot()
    })
  })
  it('with mask', async () => {
    const { container, getByLabelText } = styledRender(
      <InputBasic id="test" name="test" label="test label" mask="99/99/99" />
    )

    const inputElement = getByLabelText('test label')
    userEvent.type(inputElement, '123456')

    await waitFor(() => {
      expect(inputElement).toHaveValue('12/34/56')
      expect(container.firstChild).toMatchSnapshot()
    })
  })
  it('with two masks', async () => {
    const { container, getByLabelText } = styledRender(
      <InputBasic id="test" name="test" label="test label" mask={['99/99/99', '99.999.99']} />
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

  it('with success status', async () => {
    const { container, getByLabelText } = styledRender(
      <InputBasic id="test" name="test" label="test label" />
    )
    expect(getByLabelText('test label')).toHaveStyle({ backgroundImage: theme.icons.success })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('with loading status', () => {
    const { container, getByLabelText } = styledRender(
      <InputBasic id="test" name="test" label="test label" status="loading" />
    )
    expect(getByLabelText('test label')).toHaveStyle({ backgroundImage: theme.icons.loader })
    expect(container.firstChild).toMatchSnapshot()
  })

  it('with "money" mask', async () => {
    const { container, getByLabelText } = styledRender(
      <InputBasic id="test" name="test" label="test label" mask="money" />
    )

    const inputElement = getByLabelText('test label')

    userEvent.type(inputElement, '1234')

    await waitFor(() => {
      expect(inputElement).toHaveValue('R$ 12,34')
      expect(container.firstChild).toMatchSnapshot()
    })
  })
  it('with icon action', async () => {
    const onIconClick = jest.fn()
    onIconClick.displayName = 'onIconClick'
    const { container, getByTestId } = styledRender(
      <InputBasic
        id="test"
        name="test"
        label="test label"
        mask="money"
        icon="user"
        onIconClick={onIconClick}
      />
    )

    userEvent.click(getByTestId('Icon'))

    await waitFor(() => {
      expect(onIconClick).toHaveBeenCalled()
      expect(container.firstChild).toMatchSnapshot()
    })
  })
})
