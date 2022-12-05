import React from 'react'

import { Icon } from 'components/Icon'
import { func, oneOf, oneOfType, string } from 'prop-types'
import { isFunction } from 'utils/isFunction'

import { BaseMessage } from './commonStyles'

export const HelperText = ({ status, errorMessage, infoMessage, className }) => {
  if (status === 'error')
    return (
      <BaseMessage className={className} status={status} aria-live="assertive">
        {isFunction(errorMessage) ? errorMessage(errorMessage) : errorMessage}
      </BaseMessage>
    )
  if (infoMessage)
    return (
      <BaseMessage className={className} aria-live="polite">
        {isFunction(infoMessage) ? infoMessage() : (
          <>
            <Icon icon="attentionSmall" size={12} styleColor="darkBlueCash200" />
            {infoMessage}

          </>
        )}
      </BaseMessage>
    )
  return <></>
}

HelperText.propTypes = {
  status: oneOf(['error', 'success', 'default', 'loading']),
  errorMessage: oneOfType([string, func]),
  infoMessage: oneOfType([string, func]),
  className: string
}

HelperText.defaultProps = {
  status: '',
  errorMessage: '',
  infoMessage: '',
  className: ''
}
