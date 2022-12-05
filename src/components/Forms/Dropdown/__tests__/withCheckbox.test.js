import React from 'react'

import { act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { DropdownWithCheckbox } from 'components/Forms/Dropdown'
import { styledRender } from 'utils/styledRender'

jest.useFakeTimers()
describe('Render DropdownWithCheckbox Component when', () => {
  it('has default props', async () => {
    const { container, getByText, getByLabelText } = styledRender(
      <DropdownWithCheckbox
        id="test"
        name="test"
        label="test1"
        options={[
          { value: 'value1', text: 'text1' },
          { value: 'value2', text: 'text2' }
        ]}
      />
    )

    userEvent.click(getByText('test1'))
    await act(async () => {
      jest.runAllTimers()
    })

    expect(getByLabelText('text1')).not.toBeChecked()
    expect(getByText('text1')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('selects/deselects items', async () => {
    const onChange = jest.fn()
    const { getByText, getByLabelText } = styledRender(
      <DropdownWithCheckbox
        id="test"
        name="test"
        label="test1"
        onChange={onChange}
        options={[
          { value: 'value1', text: 'text1' },
          { value: 'value2', text: 'text2' },
          { value: 'value3', text: 'text3' }
        ]}
      />
    )

    const optionOne = getByLabelText('text1')
    const optionTwo = getByLabelText('text2')
    const optionThree = getByLabelText('text3')

    userEvent.click(getByText('test1'))
    await act(async () => {
      jest.runAllTimers()
    })

    userEvent.click(optionOne)
    userEvent.click(optionTwo)
    userEvent.click(optionOne)

    expect(optionOne).not.toBeChecked()
    expect(optionTwo).toBeChecked()
    expect(optionThree).toBeInTheDocument()
    expect(onChange).toHaveBeenCalledTimes(3)
  })

  it('hides itself with click and blur', async () => {
    const onBlur = jest.fn()
    const { getByText } = styledRender(
      <DropdownWithCheckbox
        id="test"
        name="test"
        label="test1"
        onBlur={onBlur}
        options={[{ value: 'value1', text: 'text1' }]}
      />
    )

    const dropdown = getByText('test1')

    userEvent.click(dropdown)
    userEvent.click(dropdown)
    await act(async () => {
      jest.runAllTimers()
    })

    expect(getByText('text1')).toHaveStyle('visibility: hidden')
    expect(getByText('text1')).not.toBeVisible()

    userEvent.click(dropdown)
    await act(async () => {
      userEvent.click(document.body)
    })

    expect(getByText('text1')).not.toBeVisible()
    expect(onBlur).toHaveBeenCalled()
  })

  it('has isDefault option', async () => {
    const { getByText, getByLabelText } = styledRender(
      <DropdownWithCheckbox
        id="test"
        name="test"
        label="test1"
        options={[
          { value: 'value1', text: 'text1', isDefault: true },
          { value: 'value2', text: 'text2' }
        ]}
      />
    )

    const optionOne = getByLabelText('text1')
    const optionTwo = getByLabelText('text2')

    userEvent.click(getByText('test1'))
    await act(async () => {
      jest.runAllTimers()
    })

    userEvent.click(optionOne)
    userEvent.click(optionTwo)
    userEvent.click(optionTwo)

    await act(async () => {
      jest.runAllTimers()
    })

    expect(optionOne).toBeChecked()
    expect(optionTwo).not.toBeChecked()
  })

  it('selects more than 2', async () => {
    const { getByText, getByLabelText } = styledRender(
      <DropdownWithCheckbox
        id="test"
        name="test"
        label="test1"
        type="opções"
        options={[
          { value: 'value1', text: 'text1' },
          { value: 'value2', text: 'text2' },
          { value: 'value3', text: 'text3' }
        ]}
      />
    )

    const optionOne = getByLabelText('text1')
    const optionTwo = getByLabelText('text2')
    const optionThree = getByLabelText('text3')

    userEvent.click(getByText('test1'))
    await act(async () => {
      jest.runAllTimers()
    })

    userEvent.click(optionOne)
    userEvent.click(optionTwo)
    userEvent.click(optionThree)

    expect(optionOne).toBeChecked()
    expect(optionTwo).toBeChecked()
    expect(optionThree).toBeChecked()
    expect(getByText('3 opções selecionados(as)')).toBeInTheDocument()
  })
})
