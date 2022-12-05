import { Icon } from 'components/Icon'
import styled, { css } from 'styled-components'
import { getColorFromName } from 'utils/getColorFromName'
import { getTypography } from 'utils/getTypography'

const getBackgroundColor = ({ styleType, theme }) => {
  const colors = {
    error: getColorFromName({ theme, styleColor: 'error100' }),
    success: getColorFromName({ theme, styleColor: 'success400' }),
    warning: getColorFromName({ theme, styleColor: 'warning200' }),
    info: getColorFromName({ theme, styleColor: 'darkBlueCash200' })
  }

  return colors[styleType]
}

const getPosition = ({ position }) => {
  if (position === 'top-right')
    return css`
      right: 1rem;
    `
  if (position === 'top-left')
    return css`
      left: 1rem;
    `
  return css`
    left: 50%;
    transform: translateX(-50%);
  `
}

export const Wrapper = styled.div`
  ${({ theme }) => getTypography({ theme, styleType: 'body2', styleColor: 'greyCash100' })}
  position: fixed;
  top: ${({ active }) => (active ? '1rem' : '-100vh')};
  ${getPosition}
  z-index: 10;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gutters.sm};
  padding: ${({ theme }) => `${theme.padding.md} ${theme.padding.lg}`};
  background-color: ${({ theme, styleType }) => getBackgroundColor({ theme, styleType })};
  border-radius: 8px;
  transition: top 0.5s;
  max-width: 450px;
  user-select: none;
`

export const IconStyled = styled(Icon)`
  min-width: 24px;
`

export const CloseButton = styled.button`
  cursor: pointer;
  margin: auto 0;
  height: 16px;
`
