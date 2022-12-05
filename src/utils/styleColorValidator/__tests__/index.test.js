import { styleColorValidator } from '../index.js'

describe('styleColorValidator test when', () => {
  it('no tone on name', () => {
    expect(styleColorValidator({ styleColor: 'greyCash' }, 'styleColor', 'Component')).toEqual(
      new Error(`Invalid prop 'styleColor'supplied to' Component. Expect to follow the pattern:
[colorName][tone]-[opacity], like:
'darkBlueCash100', 'lightBlueCash300-08'
colorName should be one of:
['darkBlueCash', 'lightBlueCash', 'goldCash', 'greyCash', 'success', 'warning', 'error']
tone should be one of:
['100', '200', '300', '500']
opacity should be a 2 digit number from 01 to 99.
insteady received greyCash`)
    )
  })
  it('invalid color name', () => {
    expect(styleColorValidator({ styleColor: 'randomString' }, 'styleColor', 'Component')).toEqual(
      new Error(`Invalid prop 'styleColor'supplied to' Component. Expect to follow the pattern:
[colorName][tone]-[opacity], like:
'darkBlueCash100', 'lightBlueCash300-08'
colorName should be one of:
['darkBlueCash', 'lightBlueCash', 'goldCash', 'greyCash', 'success', 'warning', 'error']
tone should be one of:
['100', '200', '300', '500']
opacity should be a 2 digit number from 01 to 99.
insteady received randomString`)
    )
  })
  it('valid color name', () => {
    expect(
      styleColorValidator({ styleColor: 'greyCash400' }, 'styleColor', 'Component')
    ).toBeFalsy()
  })
  it('valid color name with opacity', () => {
    expect(
      styleColorValidator({ styleColor: 'greyCash400-10' }, 'styleColor', 'Component')
    ).toBeFalsy()
  })
})
