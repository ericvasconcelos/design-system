import styled from 'styled-components'
import { getTypography } from 'utils/getTypography'

const getListStyle = ({ theme, listStyle, flow, styleColor, justify, align, gap, typography }) => `
  display: flex;
  flex-direction: ${flow};
  list-style:${listStyle};
  background: none;
  gap: ${theme.gutters[gap]};
  justify-content: ${justify};
  align-items: ${align};
  ${getTypography({ theme, styleType: typography, styleColor, decoration: 'none' })};
  `

export const Ordered = styled.ol`
  ${getListStyle}
`

export const Unordered = styled.ul`
  ${getListStyle}
`
export const ListItem = styled.li``
