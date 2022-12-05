import React from 'react'

import { oneOf, string } from 'prop-types'
import { getIconNames } from 'utils/getIconNames'
import { styleColorValidator } from 'utils/styleColorValidator'

import { Wrapper } from './styles'

/** O componente de ícone é usado para inserção de pequenos elementos
 * visuais ao contexto
 */

export const Icon = ({
  icon,
  ariaLabel,
  className,
  styleColor,
  size,
  alt,
  title,
  role
}) => (
  <Wrapper
    data-testid="Icon"
    className={className}
    icon={icon}
    $size={size}
    aria-label={ariaLabel}
    aria-hidden={!ariaLabel}
    styleColor={styleColor}
    alt={alt}
    title={title}
    role={role}
  />
)

Icon.propTypes = {
  ariaLabel: string,
  icon: oneOf(getIconNames()).isRequired,
  styleColor: styleColorValidator,
  className: string,
  size: oneOf([12, 16, 24, 32, 48, 64]),
  alt: string,
  title: string,
  role: string
}

Icon.defaultProps = {
  /** usado para definir uma string na tag do elemento atual */
  ariaLabel: '',
  /** cor do ícone */
  styleColor: 'greyCash300',
  className: '',
  /** tamanho do icone */
  size: 24,
  /** descrição textual do ícone */
  alt: null,
  /** descrição ou créditos associados ao icone */
  title: null,
  /** */
  role: null
}
