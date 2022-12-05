import React, { useEffect } from 'react'

import { Text } from 'components/Text'
import { oneOf, string, bool, number, func, node } from 'prop-types'
import { theme } from 'styles/theme'

import { Wrapper, IconStyled, CloseButton } from './styles'
import { ToastContextProvider } from './ToastProvider'

export const Toast = ({
  active,
  position,
  styleType,
  text,
  seconds,
  onTimeout,
  icon,
  iconStyleColor,
  isClosable,
  className,
  children
}) => {
  const getStyleColor = () => {
    const colors = {
      error: 'error100',
      success: 'success400',
      warning: 'warning200',
      info: 'darkBlueCash200'
    }

    return colors[styleType]
  }

  useEffect(() => {
    let timeout
    if (active && seconds) {
      timeout = setTimeout(() => {
        onTimeout()
      }, seconds * 1000)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [active, seconds])

  return (
    <ToastContextProvider>
      <>
        <Wrapper
          data-testid="Toast"
          className={className}
          styleType={styleType}
          active={active}
          position={position}
        >
          {icon && (
            <IconStyled
              icon={icon}
              styleColor={iconStyleColor || getStyleColor({ theme, styleColor: styleType })}
            />
          )}
          <Text styleType="body2" styleColor="greyCash100">
            {text}
          </Text>
          {isClosable && (
            <CloseButton onClick={clearTimeout(seconds)}>
              <img src={theme.icons.close} alt="" />
            </CloseButton>
          )}
        </Wrapper>
        {children}
      </>
    </ToastContextProvider>
  )
}

Toast.propTypes = {
  active: bool,
  position: oneOf(['top-left', 'top-right', 'top-center']),
  styleType: oneOf(['success', 'error', 'warning', 'info']).isRequired,
  text: string.isRequired,
  seconds: number,
  onTimeout: func,
  icon: string,
  iconStyleColor: string,
  isClosable: bool,
  children: node,
  className: string
}

Toast.defaultProps = {
  active: false,
  position: 'top-right',
  seconds: null,
  onTimeout: null,
  icon: '',
  iconStyleColor: null,
  className: '',
  children: null,
  isClosable: false
}
