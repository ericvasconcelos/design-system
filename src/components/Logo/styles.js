import Image from 'next/image'
import styled from 'styled-components'

export const Wrapper = styled(Image).attrs(({ theme, $logoType, alt, title }) => ({
  src: theme.images.logos[$logoType].path,
  alt: alt || theme.images.logos[$logoType].desc,
  title: title || theme.images.logos[$logoType].desc
}))`
  padding: 0;
`
