import React from 'react'

import { act, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { styledRender } from 'utils/styledRender'

import { Modal } from '../index.js'

jest.useFakeTimers()
describe('Modal should render the component correctly when', () => {
  const titleText = 'Eu proident veniam aliqua voluptate id.'
  const handleClose = jest.fn()
  handleClose.mockName('handleClose')
  const contentText = 'Anim eiusmod nisi ex cillum adipisicing sint laborum.'

  it('show is true', () => {
    const { getByTestId, getByText } = styledRender(
      <Modal title={titleText} id="test" onClose={handleClose} show>
        {contentText}
      </Modal>
    )
    act(() => {
      jest.runAllTimers()
    })
    const component = getByTestId('Modal')
    const title = getByText(titleText)
    const content = getByText(contentText)
    expect(component).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(content).toBeInTheDocument()

    expect(component).toMatchSnapshot()
  })

  it('closes when overlay is clicked', async () => {
    const { getByTestId, rerender } = styledRender(
      <Modal title={titleText} id="test" onClose={handleClose} show>
        {contentText}
      </Modal>
    )
    handleClose.mockImplementationOnce(() => {
      rerender(
        <Modal title={titleText} id="test" onClose={handleClose} show={false}>
          {contentText}
        </Modal>
      )
    })

    const component = getByTestId('Modal')

    act(() => {
      jest.runAllTimers()
      fireEvent.transitionEnd(component)
    })

    expect(component).toBeInTheDocument()

    act(() => {
      userEvent.click(component)
      jest.runAllTimers()
      fireEvent.transitionEnd(component)
    })

    expect(handleClose).toHaveBeenCalled()
    expect(component).not.toBeInTheDocument()
  })

  it('closes when ESC  is pressed', async () => {
    const { container, getByTestId, rerender } = styledRender(
      <Modal title={titleText} id="test" onClose={handleClose} show>
        {contentText}
      </Modal>
    )

    handleClose.mockImplementationOnce(() => {
      rerender(
        <Modal title={titleText} id="test" onClose={handleClose} show={false}>
          {contentText}
        </Modal>
      )
    })
    act(() => {
      jest.runAllTimers()
    })

    const component = getByTestId('Modal')
    expect(component).toBeInTheDocument()

    act(() => {
      userEvent.type(container, '{esc}')
      jest.runAllTimers()
      fireEvent.transitionEnd(component)
    })

    expect(handleClose).toHaveBeenCalled()
    expect(component).not.toBeInTheDocument()
  })

  it('do nothing when wrapper is clicked', async () => {
    const { getByTestId } = styledRender(
      <Modal title={titleText} id="test" onClose={handleClose} show>
        {contentText}
      </Modal>
    )

    act(() => {
      jest.runAllTimers()
    })
    const component = getByTestId('Modal')

    const modalWrapper = component.querySelector('[aria-describedby=\'title\']')
    act(() => {
      userEvent.click(modalWrapper)
    })
    expect(handleClose).not.toHaveBeenCalled()
  })

  it('do nothing when any other key is presse', async () => {
    const { container, getByTestId } = styledRender(
      <Modal title={titleText} id="test" onClose={handleClose} show>
        {contentText}
      </Modal>
    )

    act(() => {
      jest.runAllTimers()
    })
    const component = getByTestId('Modal')

    act(() => {
      userEvent.type(container, '{enter}')
    })

    act(() => {
      userEvent.type(
        container,
        'Pariatur non est nostrud non est tempor ipsum aliqua ullamco magna excepteur et sit'
      )
    })

    const modalWrapper = component.querySelector('#test')

    act(() => {
      userEvent.type(modalWrapper, '{enter}')
    })

    expect(component).toBeInTheDocument()
    expect(handleClose).not.toHaveBeenCalled()
  })
})
