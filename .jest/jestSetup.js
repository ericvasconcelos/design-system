import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'
import 'regenerator-runtime/runtime'
import { JSDOM } from 'jsdom'
import { matcherHint, printExpected, printReceived } from 'jest-matcher-utils'

const dom = new JSDOM()

global.window = dom.window
global.document = dom.window.document

process.env = {
  ...process.env,
  __NEXT_IMAGE_OPTS: {
    loader: 'imgix',
    domains: [`static.cashme.com.br`],
    path: 'https://static.cashme.com.br',
    deviceSizes: [360, 768, 1024, 1280, 1920],
    imageSizes: []
  },
  NEXT_PUBLIC_URL_PREFIX: '',
  NEXT_PUBLIC_STATIC_PREFIX: 'https://qa-static.cashme.com.br',
  NEXT_PUBLIC_LOGO_PREFIX: '/logos/cashme',
  NEXT_PUBLIC_ICON_PREFIX: 'https://qa-static.cashme.com.br/icons',
  NEXT_PUBLIC_FONT_PREFIX: 'https://qa-static.cashme.com.br/fonts'
}

const failMessage = (received, expected) => `${matcherHint(
  '.toHaveHtmlElementType',
  'received',
  'element'
)}

  Expected HTML element to be: ${printExpected(expected)}
  Received: ${printReceived(received)}`

expect.extend({
  toBeHtmlElementType: (received, elementType) => {
    const receivedKeys = Object.keys(received)
    let fiberNodeKey
    let fiberNode

    if (receivedKeys?.length) {
      fiberNodeKey = receivedKeys.filter(key => key.match(/reactFiber/))
      if (fiberNodeKey?.length) {
        fiberNode = received[fiberNodeKey]
        if (fiberNode?.elementType === elementType) {
          return {
            pass: true
          }
        }
        return {
          message: () => failMessage(fiberNode?.elementType, elementType),
          pass: false
        }
      }
    }
  }
})
