export const getPadding = ({ theme, top, right, left, bottom }) => {
  if (top && right && left && bottom) {
    // eslint-disable-next-line max-len
    return `padding: ${theme.padding[top]} ${theme.padding[right]} ${theme.padding[left]} ${theme.padding[bottom]};`
  }
  if (top && right && bottom) {
    return `padding: ${theme.padding[top]} ${theme.padding[right]} ${theme.padding[bottom]};`
  }
  if (top && right) {
    return `padding: ${theme.padding[top]} ${theme.padding[right]};`
  }
  if (top) {
    return `padding: ${theme.padding[top]};`
  }
  return 'padding: 0;'
}
