import React, { useState } from 'react'

import { waitFor } from '@testing-library/dom'
import { styledRender } from 'utils/styledRender'

import { Popper } from '../index.js'

const RenderPopper = props => {
  const [show, setShow] = useState(false)
  return (
    <Popper {...props} show={show}>
      {referenceRef => (
        <button type="button" ref={referenceRef} onClick={() => setShow(!show)}>
          Open popup
        </button>
      )}
      test content
    </Popper>
  )
}
describe('Popper should render reference element and children', () => {
  it('unique possible usage outside real dom', async () => {
    const { getByTestId, getByRole, getByText } = styledRender(<RenderPopper />)
    await waitFor(() => {
      expect(getByRole('button')).toBeInTheDocument()
      expect(getByText('test content')).toBeInTheDocument()
    })

    await waitFor(() => expect(getByTestId('Popper')).toMatchSnapshot())
  })
})
