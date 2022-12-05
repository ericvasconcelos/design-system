import React from 'react'

import { waitFor } from '@testing-library/dom'
import { Toast } from 'components/Toast'
import { styledRender } from 'utils/styledRender'

jest.useFakeTimers()

const TestComponent = () => <h2>i am just a test component</h2>

describe('Toast Component', () => {
  const onTimeout = jest.fn()

  it('component styleType success and inactive', async () => {
    const { container, getByTestId } = styledRender(
      <Toast active={false} styleType="success" text="Message" seconds={2} onTimeout={onTimeout}>
        <TestComponent />
      </Toast>
    )

    await waitFor(() => expect(getByTestId('Toast')).toHaveStyleRule('top', '-100vh'))
    expect(container.firstChild).toMatchSnapshot()
  })

  it('component styleType success and active is render', async () => {
    const { container, getByTestId } = styledRender(
      <Toast active styleType="success" text="Message" seconds={2} onTimeout={onTimeout}>
        <TestComponent />
      </Toast>
    )

    await waitFor(() => expect(getByTestId('Toast')).toHaveStyleRule('top', '1rem'))
    expect(container.firstChild).toMatchSnapshot()
  })

  it('component styleType error and active is render', async () => {
    const { container, getByTestId } = styledRender(
      <Toast active styleType="error" text="Message" seconds={2} onTimeout={onTimeout}>
        <TestComponent />
      </Toast>
    )

    await waitFor(() => expect(getByTestId('Toast')).toHaveStyleRule('top', '1rem'))
    expect(container.firstChild).toMatchSnapshot()
  })

  it('component styleType info and active is render', async () => {
    const { container, getByTestId } = styledRender(
      <Toast active styleType="info" text="Message" seconds={2} onTimeout={onTimeout}>
        <TestComponent />
      </Toast>
    )

    await waitFor(() => expect(getByTestId('Toast')).toHaveStyleRule('top', '1rem'))
    expect(container.firstChild).toMatchSnapshot()
  })

  it('component position top left is render', async () => {
    const { container, getByTestId } = styledRender(
      <Toast
        active
        styleType="info"
        position="top-left"
        text="Message"
        seconds={2}
        onTimeout={onTimeout}
      >
        <TestComponent />
      </Toast>
    )

    await waitFor(() => expect(getByTestId('Toast')).toHaveStyleRule('left', '1rem'))
    expect(container.firstChild).toMatchSnapshot()
  })

  it('component position top center is render', async () => {
    const { container, getByTestId } = styledRender(
      <Toast
        active
        styleType="info"
        position="top-center"
        text="Message"
        seconds={2}
        onTimeout={onTimeout}
      >
        <TestComponent />
      </Toast>
    )

    await waitFor(() => expect(getByTestId('Toast')).toHaveStyleRule('left', '50%'))
    expect(container.firstChild).toMatchSnapshot()
  })

  it('component call callback on timeout', () => {
    styledRender(
      <Toast active styleType="success" text="Message" seconds={2} onTimeout={onTimeout}>
        <TestComponent />
      </Toast>
    )

    jest.runAllTimers()

    expect(onTimeout).toBeCalledWith()
  })
})
