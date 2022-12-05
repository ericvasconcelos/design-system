import styled from 'styled-components'

export const Fonts = styled.div`
  @font-face {
    font-display: swap;
    font-family: 'DM Sans';
    font-weight: 700;
    src: url('${process.env.NEXT_PUBLIC_FONT_PREFIX}/DMSans/DMSans-Bold.ttf');
  }

  @font-face {
    font-display: swap;
    font-family: 'DM Sans';
    font-weight: 500;
    src: url('${process.env.NEXT_PUBLIC_FONT_PREFIX}/DMSans/DMSans-Medium.ttf');
  }
  @font-face {
    font-display: swap;
    font-family: 'DM Sans';
    font-weight: 400;
    src: url('${process.env.NEXT_PUBLIC_FONT_PREFIX}/DMSans-Regular.ttf');
  }
`
