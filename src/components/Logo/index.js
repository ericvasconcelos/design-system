import React from 'react'

import { bool, string, oneOf } from 'prop-types'

import { Wrapper } from './styles'

/**
 * Componente usado para apresentação do Logo em suas diversas variações
 */
export const Logo = ({ logoType, priority, alt, title }) => {
  let width = 40
  let height = 40
  if (logoType.match(/Text/)) {
    width = 126
    height = 24
  }
  return (
    <Wrapper
      data-testid="Logo"
      $logoType={logoType}
      alt={alt}
      title={title}
      width={width}
      height={height}
      layout="fixed"
      priority={priority}
    />
  )
}
Logo.propTypes = {
  /**
   * Prop responsável pela seleção do modelo do logo
   */
  logoType: oneOf([
    'white',
    'whiteText',
    'darkBlue',
    'darkBlueText',
    'lightBlue',
    'lightBlueText',
    'newBlueText',
    'newBlue'
  ]),
  /**
   * priority se for verdadeiro adiciona um prefetch a imagem
   * caso contrario funciona como lazyload
   */
  priority: bool,
  /**
   * Prop opicional para ALT da Imagem
   */
  alt: string,
  /**
   * Prop opicional para Title da Imagem
   */
  title: string
}

Logo.defaultProps = {
  logoType: 'lightBlueText',
  priority: false,
  alt: '',
  title: ''
}
