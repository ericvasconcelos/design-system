import React, { createContext, useContext, useEffect, useReducer } from 'react'

import { node } from 'prop-types'

const ToastContext = createContext()
export const useToast = () => useContext(ToastContext)

export const ToastContextProvider = ({ children }) => {
  const reducer = (state, nextState = { action: undefined, payload: undefined }) => {
    const { action, payload } = nextState
    switch (action) {
      case 'SET_TEXT':
        return { ...state, text: payload.text }
      case 'SET_ACTIVE':
        return { ...state, active: payload.active }
      case 'SET_SECONDS':
        return { ...state, seconds: payload.seconds }
      case 'SET_ONTIMEOUT':
        return { ...state, onTimeout: payload.onTimeout }
      case 'SET_STATE':
        return { ...state, ...payload }
      default:
        break
    }
  }
  const toastDefaults = {
    active: false,
    styleType: 'success',
    text: '',
    seconds: 4,
    onTimeout: () => {}
  }

  const [toast, dispatch] = useReducer(reducer, toastDefaults)
  const setText = text => {
    dispatch({ action: 'SET_TEXT', payload: { text } })
  }
  const setActive = active => {
    dispatch({ action: 'SET_ACTIVE', payload: { active } })
  }
  const setOnTimeout = onTimeout => {
    dispatch({ action: 'SET_ONTIMEOUT', payload: { onTimeout } })
  }
  const setToastState = (state = {}) => {
    dispatch({
      action: 'SET_STATE',
      payload: { ...toastDefaults, onTimeout: () => setActive(false), ...state }
    })
  }

  useEffect(() => {
    setOnTimeout(() => setActive(false))
  }, [])


  return (
    <ToastContext.Provider value={{ toast, setToastState, setText, setActive, setOnTimeout }}>
      {children}
    </ToastContext.Provider>
  )
}

ToastContextProvider.propTypes = {
  children: node.isRequired
}
