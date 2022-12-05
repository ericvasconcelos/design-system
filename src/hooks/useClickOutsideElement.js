import React, { useRef, useEffect } from 'react'

import { element, func } from 'prop-types'

const useOutsideAlerter = ({ ref, handleClick, handleFocusOutside }) => {
  useEffect(() => {
    const handleClickOutside = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleClick()
      }
    }

    const documentFocus = event => {
      if (ref.current && !ref.current.contains(event.target)) {
        handleFocusOutside?.(event)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('focusin', documentFocus)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('focusin', documentFocus)
    }
  }, [ref, handleClick])
}

export const UseClickOutsideElement = ({ children, handleClick, handleFocusOutside }) => {
  const wrapperRef = useRef(null)
  useOutsideAlerter({ ref: wrapperRef, handleClick, handleFocusOutside })

  return <div ref={wrapperRef}>{children}</div>
}

UseClickOutsideElement.propTypes = {
  children: element.isRequired,
  handleClick: func.isRequired,
  handleFocusOutside: func.isRequired
}
