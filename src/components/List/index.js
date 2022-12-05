import React from 'react'

import { bool, instanceOf, oneOf, string } from 'prop-types'
import { getGuttersNames } from 'utils/getGuttersNames'
import { getTypographyNames } from 'utils/getTypographyNames'
import { styleColorValidator } from 'utils/styleColorValidator'

import { Ordered, Unordered, ListItem } from './styles'

export const List = ({
  className,
  items,
  isOrdered,
  listStyle,
  flow,
  id,
  align,
  justify,
  gap,
  styleColor,
  typography
}) =>
  isOrdered ? (
    <Ordered
      data-testid="List"
      listStyle={listStyle}
      className={className}
      flow={flow}
      id={id}
      align={align}
      justify={justify}
      gap={gap}
      typography={typography}
      styleColor={styleColor}
    >
      {items.map(item => (
        <ListItem key={Math.random()}>{item}</ListItem>
      ))}
    </Ordered>
  ) : (
    <Unordered
      data-testid="List"
      className={className}
      listStyle={listStyle}
      flow={flow}
      id={id}
      align={align}
      justify={justify}
      gap={gap}
      typography={typography}
      styleColor={styleColor}
    >
      {items.map(item => (
        <ListItem key={Math.random()}>{item}</ListItem>
      ))}
    </Unordered>
  )

List.propTypes = {
  align: oneOf([
    'center',
    'start',
    'end',
    'flex-start',
    'flex-end',
    'left',
    'right',
    'normal',
    'space-between',
    'space-around',
    'space-evenly',
    'stretch',
    'safe center',
    'unsafe center',
    'inherit',
    'initial',
    'unset'
  ]),
  id: string,
  items: instanceOf(Array).isRequired,
  isOrdered: bool,
  flow: oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
  typography: oneOf(getTypographyNames()),
  gap: oneOf(getGuttersNames()),
  justify: oneOf([
    'center',
    'start',
    'end',
    'flex-start',
    'flex-end',
    'left',
    'right',
    'normal',
    'space-between',
    'space-around',
    'space-evenly',
    'stretch',
    'safe center',
    'unsafe center',
    'inherit',
    'initial',
    'unset'
  ]),
  listStyle: oneOf([
    'disc',
    'circle',
    'square',
    'decimal',
    'lower-roman',
    'upper-roman',
    'lower-alpha',
    'upper-alpha',
    'none'
  ]),
  styleColor: styleColorValidator,
  className: string
}

List.defaultProps = {
  isOrdered: false,
  listStyle: 'none',
  flow: 'column',
  id: '',
  align: 'center',
  justify: 'space-between',
  gap: 'sm',
  typography: 'body1',
  styleColor: 'greyCash400',
  className: ''
}
