import { getColorFromName } from 'utils/getColorFromName'

export const getBackgroundColor = ({ theme, styleColor }) =>
  `background-color: ${getColorFromName({ theme, styleColor })};`
