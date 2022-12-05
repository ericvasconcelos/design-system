import React from 'react'

import dynamic from 'next/dynamic'
import NextLink from 'next/link'
import { bool, element, elementType, node, oneOf, oneOfType, string, func } from 'prop-types'
import { buttonStyles } from 'utils/getButtonStyle/data'
import { getIconNames } from 'utils/getIconNames'

import { Wrapper } from './styles'

const Icon = dynamic(() => import('../Icon/index.js').then(module => module.Icon), {
  ssr: false
})

export const Anchor = ({
  children,
  styleColor,
  href,
  icon,
  id,
  styleType,
  size,
  borderRadius,
  passHref,
  download,
  expanded,
  className,
  target,
  rel,
  title,
  onClick
}) => (
  <NextLink href={href} passHref={passHref} className={className}>
    <Wrapper
      data-testid="Link"
      styleColor={styleColor}
      className={className}
      {...(id && { id })}
      styleType={styleType}
      size={size}
      borderRadius={borderRadius}
      download={download}
      expanded={expanded}
      {...(target && { target })}
      {...(rel && { rel })}
      {...(title && { title })}
      {...(onClick && { onClick })}
    >
      {children}
      {icon && Icon && (
        <Icon icon={icon} styleColor={buttonStyles[styleType][styleColor].fontColor} />
      )}
    </Wrapper>
  </NextLink>
)

Anchor.propTypes = {
  children: oneOfType([node, element, elementType, string]),
  styleColor: oneOf(['blue', 'white', 'dark']),
  icon: oneOf([...getIconNames(), '']),
  id: string,
  href: string,
  styleType: oneOf(['primary', 'secondary', 'link', 'text']),
  size: oneOf(['small', 'medium', 'large']),
  borderRadius: oneOf(['default', 'rounded']),
  passHref: bool,
  download: bool,
  expanded: bool,
  className: string,
  target: string,
  rel: string,
  title: string,
  onClick: func
}

Anchor.defaultProps = {
  styleColor: 'blue',
  icon: '',
  href: '',
  styleType: 'link',
  size: 'medium',
  borderRadius: 'default',
  passHref: false,
  id: '',
  download: false,
  expanded: false,
  className: '',
  children: '',
  target: '',
  rel: '',
  title: '',
  onClick: null
}
