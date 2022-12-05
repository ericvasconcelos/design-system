import { useAriaProps } from '../index.js'

describe('test useAriaProps whe', () => {
  it('aria-hidde is true', () => {
    const ariaProps = useAriaProps({ ariaHidden: true })
    expect(ariaProps).toEqual({ 'aria-hidden': true })
  })
  it('aria-hidde is true and aria-describedby is "i am a description"', () => {
    const ariaProps = useAriaProps({ ariaHidden: true, ariaDescribedBy: 'i am a description' })
    expect(ariaProps).toEqual({ 'aria-hidden': true, 'aria-describedby': 'i am a description' })
  })
  it('empty Call', () => {
    const ariaProps = useAriaProps()
    expect(ariaProps).toEqual({})
  })
  it('udefined aria props', () => {
    const ariaProps = useAriaProps({ ariaHidden: undefined })
    expect(ariaProps).toEqual({})
  })
  it('no aria props on props', () => {
    const ariaProps = useAriaProps({ anyPropName: 'test' })
    expect(ariaProps).toEqual({})
  })
})
