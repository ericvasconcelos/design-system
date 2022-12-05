import { getBackgroundColor } from 'utils/getBackgroundColor'
import { getBorder } from 'utils/getBorder'
import { getBorderRadius } from 'utils/getBorderRadius'
import { getColorFromName } from 'utils/getColorFromName'
import { getPadding } from 'utils/getPadding'
import { getTypography } from 'utils/getTypography'

import { buttonStyles } from './data'

export const getButtonStyle = ({
  borderRadius,
  styleColor,
  theme,
  styleType,
  size,
  disabled,
  isLoading,
  expanded,
  children
}) => {
  const { borderColor, fontColor, background, textDecoration, hover, pressed } =
    buttonStyles[styleType][styleColor]
  let fontType = 'button'
  let radius
  let padding
  let cursor = 'pointer'
  let width = 'auto'
  let display = 'inline-flex'
  let borderRules = ''
  let backgroundRules = ''
  let paddingRules = ''
  let height = ''
  let iconHover = ''
  if (isLoading) {
    cursor = 'progress'
  }

  if (disabled && !isLoading) {
    cursor = 'not-allowed'
  }

  if (borderRadius === 'default') {
    radius = 'sm'
  }

  if (borderRadius === 'rounded') {
    radius = 'xxxl'
  }

  if (size === 'small') {
    fontType = 'buttonSm'
    padding = { top: 'sm', right: 'md' }
    height = '44px'
  }

  if (size === 'medium') {
    padding = { top: 'md', right: 'lg' }
    height = '56px'
  }

  if (size === 'large') {
    padding = { top: 'xl', right: 'lg' }
    height = '60px'
  }

  if (styleType === 'text' || styleType === 'link') {
    padding = 0
  }

  if (styleType !== 'text' && styleType !== 'link') {
    iconHover = getColorFromName({ theme, styleColor: hover?.fontColor })
  }

  borderRules = `${getBorder({
    theme,
    borderWidth: 'md',
    borderStyle: 'solid',
    borderColor
  })}
    ${getBorderRadius({ theme, borderRadius: radius })}`

  backgroundRules = getBackgroundColor({ theme, styleColor: background })
  paddingRules = getPadding({ theme, ...padding })

  if (expanded) {
    width = '100%'
    display = 'flex'
  }

  return `${borderRules}
    ${backgroundRules}
    ${paddingRules}
    ${getTypography({
    theme,
    styleType: fontType,
    styleColor: fontColor,
    decoration: textDecoration
  })}
    width: ${width};
    text-align: left;
    gap: ${theme.gutters.sm};
    align-items: center;
    display: ${display};
    cursor: ${cursor};
    height: ${height};
    opacity: ${disabled && !isLoading ? 0.16 : 1};
    justify-content: ${!children.includes(false) ? 'space-between' : 'center'};
    text-transform: ${size === 'small' ? 'uppercase' : 'unset'};

    >div {
      margin: ${!children.includes(false) ? 'none' : '0 auto'};
    }

${
  !isLoading &&
  `
  &:hover:enabled {
    ${getBackgroundColor({ theme, styleColor: hover?.background })}
    ${getBorder({
    theme,
    borderWidth: 'md',
    borderStyle: 'solid',
    borderColor: hover?.borderColor
  })}
    ${getTypography({
    theme,
    styleType: fontType,
    styleColor: hover?.fontColor,
    decoration: textDecoration
  })}

    >div {
      background: ${iconHover};
    }
  }

  &:active:enabled {
    ${getBackgroundColor({ theme, styleColor: pressed?.background })}
    ${getBorder({
    theme,
    borderWidth: 'md',
    borderStyle: 'solid',
    borderColor: pressed?.borderColor
  })}

    >div {
      background: ${getColorFromName({ theme, styleColor: pressed?.fontColor })};
    }

    ${getTypography({
    theme,
    styleType: fontType,
    styleColor: pressed?.fontColor,
    decoration: textDecoration
  })}
  }
`
}
`.trim()
}
