import { parsePalleteName } from 'utils/parsePalleteName'

export const getColorFromName = ({ theme, styleColor }) => {
  if (styleColor === 'transparent') {
    return styleColor
  }

  if (!styleColor) {
    return 'none'
  }

  const [color, tone, opacity] = parsePalleteName(styleColor)

  const colorHex = theme.pallete?.[color]?.[tone]

  if (opacity) {
    let opacityHex = opacity.replace('-', '')
    opacityHex = parseInt(opacityHex, 10) / 100
    opacityHex = Math.round(opacityHex * 255)
    opacityHex = (opacityHex + 0x10000).toString(16).substr(-2).toUpperCase()

    return `${colorHex}${opacityHex}`
  }

  return colorHex
}
