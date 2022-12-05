import { parsePalleteName } from 'utils/parsePalleteName'

export const styleColorValidator = (props, propName, componentName) => {
  const [color, tone] = parsePalleteName(props[propName])

  if (!(color || tone)) {
    return new Error(
      `Invalid prop '${propName}'supplied to' ${componentName}. Expect to follow the pattern:
[colorName][tone]-[opacity], like:
'darkBlueCash100', 'lightBlueCash300-08'
colorName should be one of:
['darkBlueCash', 'lightBlueCash', 'goldCash', 'greyCash', 'success', 'warning', 'error']
tone should be one of:
['100', '200', '300', '500']
opacity should be a 2 digit number from 01 to 99.
insteady received ${props[propName]}`
    )
  }
}
