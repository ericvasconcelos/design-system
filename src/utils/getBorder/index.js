import { getColorFromName } from 'utils/getColorFromName'

export const getBorder = ({ theme, borderWidth, borderStyle, borderColor }) =>
  `border: ${theme.border.width[borderWidth]} ${
    theme.border.style[borderStyle]} ${getColorFromName({ theme, styleColor: borderColor })};`
