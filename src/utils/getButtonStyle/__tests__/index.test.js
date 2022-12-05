import { theme } from 'styles/theme'

import { getButtonStyle } from '../index.js'
import { possibleButtonStyles } from './fixtures'

describe('getButtonStyle tests when', () => {
  it.each(possibleButtonStyles)(
    'combinations of props are %p',
    ({ borderRadius, styleColor, styleType, size, disabled, isLoading, expanded, expected }) => {
      expect(
        getButtonStyle({
          theme,
          borderRadius,
          styleColor,
          styleType,
          size,
          disabled,
          isLoading,
          expanded,
          children: []
        })
      ).toEqual(expected)
    }
  )
})
