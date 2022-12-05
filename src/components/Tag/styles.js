import styled from 'styled-components'
import { getColorFromName } from 'utils/getColorFromName'
import { getTypography } from 'utils/getTypography'

const getColor = ({ styleType, theme }) => {
  const colors = {
    default: theme.pallete.lightBlueCash[500],
    darkBlue: theme.pallete.greyCash[100],
    lightBlue: theme.pallete.lightBlueCash[300],
    cyan: theme.pallete.cyanCash[500],
    gold: theme.pallete.goldCash[400],
    gray: theme.pallete.darkBlueCash[200],
    warning: theme.pallete.warning[400],
    danger: theme.pallete.error[300],
    success: theme.pallete.success[500]
  }

  return colors[styleType]
}

const getBackgroundColor = ({ styleType, theme }) => {
  const colors = {
    default: getColorFromName({ theme, styleColor: 'lightBlueCash200-40' }),
    darkBlue: theme.pallete.darkBlueCash[300],
    gold: theme.pallete.goldCash[100],
    cyan: theme.pallete.cyanCash[200],
    gray: getColorFromName({ theme, styleColor: 'darkBlueCash200-16' }),
    lightBlue: theme.pallete.lightBlueCash[100],
    warning: getColorFromName({ theme, styleColor: 'warning400-16' }),
    danger: getColorFromName({ theme, styleColor: 'error300-16' }),
    success: getColorFromName({ theme, styleColor: 'success500-16' })
  }

  return colors[styleType]
}

export const Wrapper = styled.div`
  display: inline-block;
  ${({ theme }) => getTypography({ theme, styleType: 'tag' })}
  text-transform: uppercase;
  padding: ${({ theme }) => `0 ${theme.padding.sm}`};
  border-radius: ${({ theme }) => theme.border.radius.sm};
  color: ${getColor};
  background-color: ${getBackgroundColor};

  > span {
    display: inline-block;
  }
`
