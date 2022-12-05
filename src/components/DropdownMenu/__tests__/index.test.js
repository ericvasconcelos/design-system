import React from 'react'

import { waitFor } from '@testing-library/dom'
import { styledRender } from 'utils/styledRender'

import { DropdownMenu } from '../index.js'

describe('dropdown menu show render correncly when', () => {
  it('single working scenario without dom', async () => {
    const { container, getByRole, getByText } = styledRender(
      <DropdownMenu
        id="test"
        buttonLabel="Menu"
        buttonStyle="text"
        menuItems={[
          { key: 'key1', render: () => 'item 1' },
          { key: 'key2', render: () => 'item 2' },
          { key: 'key3', render: () => 'item 3' }
        ]}
      />
    )

    await waitFor(() => {
      expect(getByRole('button')).toBeInTheDocument()
      expect(getByText('item 1')).toBeInTheDocument()
      expect(getByText('item 2')).toBeInTheDocument()
      expect(getByText('item 3')).toBeInTheDocument()
      expect(container).toMatchSnapshot()
    })
  })
})
