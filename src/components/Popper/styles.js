import styled from 'styled-components'
import { getColorFromName } from 'utils/getColorFromName'

const getBorderColor = ({ theme, arrowBorderColor }) =>
  getColorFromName({ theme, styleColor: arrowBorderColor })

export const Wrapper = styled.div`
  visibility: ${({ isVisible }) => (isVisible ? 'visible' : 'hidden')};
  pointer-events: ${({ isVisible }) => (isVisible ? 'all' : 'none')};
  opacity: ${({ isVisible }) => (isVisible ? '1' : '0')};
  transition: visibility 0.1s, opacity ease 0.3s;
  z-index: 10;

  &[data-Popper-reference-hidden='true'] {
    visibility: hidden;
    pointer-events: none;
  }
`

const getPosition = (placement, transform) => {
  const [keyWord] = placement.match(/(top|left|bottom|right)/)
  const placementMap = {
    top: {
      bottom: '-6px',
      transform: `${transform} rotate(180deg)`
    },
    left: {
      right: '-6px',
      transform: `${transform} rotate(90deg)`
    },
    right: {
      left: '-6px',
      transform: `${transform} rotate(270deg)`
    },
    bottom: {
      top: '-6px'
    }
  }

  return placementMap[keyWord] || placementMap.bottom
}

export const Arrow = styled.div.attrs(({ placement = 'bottom', style }) => ({
  style: { ...getPosition(placement, style.transform) }
}))`
  &:after,
  &:before {
    display: inline-block;
    border: solid 5px transparent;
    border-top-width: 0;
    border-bottom-width: 8px;
    border-bottom-color: ${getColorFromName};
    clip-path: circle(59% at 50% 92%);
    vertical-align: bottom;
    content: '';
    top: 0;
    position: absolute;
  }

  &:before {
    top: -2px;
    border-bottom-color: ${getBorderColor};
  }
`
