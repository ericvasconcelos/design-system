import React from 'react'

import userEvent from '@testing-library/user-event'
import { Icon } from 'components/Icon/index.js'
import { Text } from 'components/Text'
import { styledRender } from 'utils/styledRender'

import { Tooltip } from '../index.js'

describe('Should render Tooltip component when', () => {
  it('has default props', () => {
    const { getByTestId } = styledRender(
      <Tooltip placement="bottom-start">
        <Icon icon="user">
          Some text here
        </Icon>
        <Text styleType="body2">Lorem ipsum dolor sit, amet co</Text>
      </Tooltip>
    )

    userEvent.hover(getByTestId('TooltipReference'))
    userEvent.unhover(getByTestId('TooltipReference'))

    expect(getByTestId('TooltipReference')).toMatchSnapshot()
  })

  it('receiving external functions', () => {
    const { getByTestId } = styledRender(
      <Tooltip
        placement="bottom-start"
        onMouseEnter={() => jest.fn()}
        onMouseLeave={() => jest.fn()}
      >
        <Icon icon="user">
          Some text here
        </Icon>
        <Text styleType="body2">Lorem ipsum dolor sit, amet co</Text>
      </Tooltip>
    )

    userEvent.hover(getByTestId('TooltipReference'))
    userEvent.unhover(getByTestId('TooltipReference'))

    expect(getByTestId('TooltipReference')).toMatchSnapshot()
  })
})

