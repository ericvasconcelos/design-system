import React, { useCallback, useEffect, useState } from 'react'

import { Title } from 'components/Title'
import { bool, element, func, node, oneOfType, string } from 'prop-types'
import ReactDOM from 'react-dom'

import { Content, Overlay, Wrapper, Delimiter } from './styles'

export const Modal = ({ children, id, onClose, show, title }) => {
  const isClientSide = typeof document !== 'undefined'
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setMounted] = useState(false)
  let modalRoot

  /* istanbul ignore else */
  if (isClientSide) {
    modalRoot = document.getElementById('modal-root')
    if (!modalRoot) {
      modalRoot = document.createElement('div')
      modalRoot.setAttribute('id', 'modal-root')
      document.body.appendChild(modalRoot)
    }
  }

  const handleClick = evt => {
    evt.stopPropagation()
    evt.preventDefault()
    onClose()
  }

  const keyDownHanlder = useCallback(evt => {
    if (evt.key === 'Escape') {
      evt.preventDefault()
      evt.stopPropagation()
      onClose()
    }
  }, [])

  useEffect(() => {
    /* istanbul ignore else */
    if (isClientSide) {
      if (show) {
        window.addEventListener('keydown', keyDownHanlder)
        setMounted(show)
      } else {
        window.removeEventListener('keydown', keyDownHanlder)
        setIsVisible(show)
      }
    }
  }, [show])

  useEffect(() => {
    if (isMounted && show) {
      setTimeout(() => setIsVisible(true), 0)
    }
  }, [isMounted, show])

  const handleTransition = () => {
    if (!isVisible) setMounted(false)
  }

  return ReactDOM.createPortal(
    isMounted && (
      <Overlay
        data-testid="Modal"
        show={isVisible}
        onClick={handleClick}
        role="dialog"
        onTransitionEnd={handleTransition}
      >
        <Wrapper aria-describedby="title" id={id} onClick={evt => evt.stopPropagation()}>
          {title && (
            <>
              <Title level="h2" id="modal-title" styleType="title3" styleColor="greyCash500">
                {title}
              </Title>
              <Delimiter />
            </>
          )}
          <Content>{children}</Content>
        </Wrapper>
      </Overlay>
    ),
    modalRoot
  )
}

Modal.defaultProps = {
  title: '',
  show: false
}

Modal.propTypes = {
  children: oneOfType([node, string, element]).isRequired,
  onClose: func.isRequired,
  show: bool,
  title: string,
  id: string.isRequired
}
