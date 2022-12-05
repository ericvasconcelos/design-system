import React from 'react'

import { act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DropdownBasic, DropdownWithFormik } from 'components/Forms/Dropdown'
import { Formik, Form } from 'formik'
import { styledRender } from 'utils/styledRender'

jest.useFakeTimers()
describe('Render Select Component when', () => {
  it('has default props', async () => {
    const { container, getByText, getAllByText } = styledRender(
      <DropdownBasic
        id="test"
        name="test"
        label="test1"
        options={[{ value: 'value1', text: 'value1' }]}
      />
    )

    userEvent.click(getByText('test1'))
    await act(async () => {
      jest.runAllTimers()
    })

    userEvent.click(getAllByText('value1')[0])

    expect(getAllByText('value1')).toHaveLength(3)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('keyboard keys are pressed', async () => {
    const { container, getByText } = styledRender(
      <DropdownBasic
        id="test"
        name="test"
        label="label"
        placeholder="placeholder"
        informationMessage="some information"
        optionIcon="info"
        optionSize="large"
        options={[
          { value: 'test0', text: 'test0' },
          { value: 'test1', text: 'test1' },
          { value: 'test2', text: 'test2' }
        ]}
      />
    )

    userEvent.click(getByText('label'))
    await act(async () => {
      jest.runAllTimers()
    })
    userEvent.keyboard('{arrowdown}')
    await act(async () => {
      jest.runAllTimers()
    })
    userEvent.keyboard('{arrowdown}')
    await act(async () => {
      jest.runAllTimers()
    })
    userEvent.keyboard('{arrowup}')
    await act(async () => {
      jest.runAllTimers()
    })
    userEvent.keyboard('{enter}')

    expect(getByText('label')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('has options icons, large options and informative message', async () => {
    const { container, getByText } = styledRender(
      <DropdownBasic
        id="test"
        name="test"
        label="test1"
        placeholder="placeholder"
        informationMessage="some information"
        optionIcon="info"
        optionSize="large"
        options={[{ value: 'test', text: 'test' }]}
      />
    )

    userEvent.click(getByText('test1'))
    await act(async () => {
      jest.runAllTimers()
    })

    expect(getByText('test1')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('has error and message error', async () => {
    const { container, getByText } = styledRender(
      <DropdownBasic
        id="test"
        name="test"
        label="test1"
        placeholder="placeholder"
        informationMessage="some information"
        errorMessage="some error here"
        status="error"
        optionIcon="info"
        optionSize="large"
        options={[{ value: 'test', text: 'test' }]}
      />
    )
    await act(async () => {
      jest.runAllTimers()
    })

    expect(getByText('some error here')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('is used with Formik', async () => {
    const { container, getAllByText, getByText } = styledRender(
      <Formik initialValues={{ test2: '' }}>
        <Form>
          <DropdownWithFormik
            id="test2"
            name="test2"
            label="test2"
            placeholder="placeholder"
            informationMessage="some information"
            optionIcon="info"
            optionSize="large"
            options={[{ value: 'value2', text: 'value2' }]}
          />
        </Form>
      </Formik>
    )

    userEvent.click(getByText('placeholder'))
    await act(async () => {
      jest.runAllTimers()
    })
    userEvent.click(getAllByText('value2')[0])
    await act(async () => {
      jest.runAllTimers()
    })
    expect(getAllByText('value2')).toHaveLength(3)
    expect(container.firstChild).toMatchSnapshot()
  })
})
