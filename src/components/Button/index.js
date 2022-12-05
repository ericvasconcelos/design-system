import React, { forwardRef } from 'react'

import dynamic from 'next/dynamic'
import { bool, func, node, oneOf, string, number } from 'prop-types'
import { buttonStyles } from 'utils/getButtonStyle/data'
import { getIconNames } from 'utils/getIconNames'

import { Wrapper } from './styles'

const Icon = dynamic(() => import('../Icon/index.js').then(module => module.Icon), {
  ssr: false
})

/**
 * O botão é o componente usado para dar ação para alguma coisa
 */

export const Button = forwardRef(
  (
    {
      borderRadius,
      styleType,
      styleColor,
      children,
      disabled,
      id,
      icon,
      iconSize,
      isLoading,
      onClick,
      onBlur,
      size,
      type,
      expanded,
      ariaLabel,
      loadingText,
      className,
      tabIndex
    },
    ref
  ) => (
    <Wrapper
      ref={ref}
      type={type}
      borderRadius={borderRadius}
      styleColor={styleColor}
      data-testid="Button"
      disabled={disabled || isLoading}
      onClick={onClick}
      styleType={styleType}
      size={size}
      isLoading={isLoading}
      expanded={expanded}
      id={id}
      tabIndex={tabIndex}
      className={className}
      {...(ariaLabel && { 'aria-label': ariaLabel })}
      {...(onBlur && { onBlur })}
    >
      {children && !isLoading ? children : false}
      {loadingText && isLoading ? loadingText : null}
      {(icon || isLoading) && !loadingText && (
        <Icon
          icon={isLoading ? 'loader' : icon}
          styleColor={buttonStyles[styleType][styleColor].fontColor}
          size={iconSize}
        />
      )}
    </Wrapper>
  )
)

Button.propTypes = {
  /**
   * Conteúdo textual do componente
   */
  children: node,
  /**
   * Cor dos textos utilizados no componente
   */
  styleColor: oneOf(['blue', 'white', 'dark']),
  /**
   * Arredondamento do componente
   */
  borderRadius: oneOf(['default', 'rounded']),
  /**
   * Ícone recebido pelo componente
   */
  icon: oneOf([...getIconNames(), '']),
  /**
   * Tamanho do ícone
   */
  iconSize: oneOf([12, 16, 24, 32, 48, 64]),
  /**
   * Estado de 'carregando' do componente
   */
  isLoading: bool,
  /**
   * Estado de habilitado, caso desabilitado ele perde a função de click e
   * enter quando estiver focado
   */
  disabled: bool,
  /**
   * Função que será executada quando o componente for clicado
   */
  onClick: func.isRequired,
  /**
   * Função que será executada quando o componente perder o foco
   */
  onBlur: func,
  /**
   * Tipo do componente
   */
  styleType: oneOf(['primary', 'secondary', 'link', 'text']),
  /**
   * Tamanho do componente
   */
  size: oneOf(['small', 'medium', 'large']),
  /**
   * ID para o componente
   */
  id: string,
  /**
   * Define se o botão vai utilizar todo o espaço do pai ou se adaptará com o
   * conteúdo utilizado como children
   */
  expanded: bool,
  /**
   * Tipo de componente
   */
  type: oneOf(['button', 'submit']),
  /**
   * Texto recebido quando o componente estiver em estado de loading e NÃO receber nenhum icon
   */
  loadingText: string,
  /**
   * Opção para o componente ser utilizado dentro de um styled component
   */
  className: string,
  /**
   * Aria label do componente
   */
  ariaLabel: string,
  /**
   * TabIndex do componente
   */
  tabIndex: number
}

Button.defaultProps = {
  children: '',
  borderRadius: 'default',
  styleColor: 'blue',
  disabled: false,
  isLoading: false,
  icon: 'arrowRight',
  iconSize: 24,
  size: 'small',
  styleType: 'primary',
  id: '',
  expanded: true,
  type: 'button',
  loadingText: '',
  className: '',
  ariaLabel: '',
  onBlur: null,
  tabIndex: 0
}
