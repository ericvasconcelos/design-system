import { getColorFromName } from 'utils/getColorFromName'

export const getTypography = ({
  theme,
  styleType,
  styleColor,
  decoration
}) => `color: ${getColorFromName({ theme, styleColor })};
font-size: ${theme.typography[styleType].desktop.size};
font-weight: ${theme.typography[styleType].desktop.weight};
line-height: ${theme.typography[styleType].desktop.lineHeight};
text-decoration: ${decoration || 'none'};
letter-spacing: ${theme.typography[styleType].desktop.spacing};
font-family: '${theme.typography[styleType].desktop.family}', sans-serif;
`
