import styled, { keyframes, css } from 'styled-components'
import { getColorFromName } from 'utils/getColorFromName'

const iconPossibilities = [
  'error',
  'success',
  'warning',
  'whiteError',
  'whiteSuccess',
  'whiteWarning'
]

const getMask = ({ theme, icon }) => {
  if (iconPossibilities.includes(icon)) return 'none'
  return `url(${theme.icons[icon]})`
}

const getBackgroundColor = ({ icon, styleColor, theme }) => {
  if (iconPossibilities.includes(icon)) return 'transparent'
  return getColorFromName({ theme, styleColor })
}

const getBackgroundImage = ({ icon, theme }) => {
  if (iconPossibilities.includes(icon)) return `url("${theme.icons[icon]}")`
  return 'none'
}

const setRotation = keyframes`
  from {
    transform: rotate(0deg);
  }
  
  to {
    transform: rotate(360deg);
  }
`

export const Wrapper = styled.div`
  mask-image: ${getMask};
  background-color: ${getBackgroundColor};
  background-image: ${getBackgroundImage};
  background-size: ${({ $size }) => $size}px;
  animation: ${({ icon }) =>
    icon === 'loader'
      ? css`
          ${setRotation} 3s linear infinite
        `
      : ''};

  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  mask-position-x: 0;
  mask-size: ${({ $size }) => $size}px;
  mask-repeat: no-repeat;
`
