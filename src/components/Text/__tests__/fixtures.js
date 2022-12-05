import { theme } from 'styles/theme'

const getExpectedCss = (color, family, lineHeight, size, weight, letterSpacing) => `color: ${color};
font-size: ${size};
font-weight: ${weight};
line-height: ${lineHeight};
text-decoration: none;
letter-spacing: ${letterSpacing};
font-family: '${family}',sans-serif;
`

export const fixtures = [
  {
    children: 'Ex ullamco aute est veniam sit.',
    tag: 'span',
    styleType: 'display',
    styleColor: 'lightBlueCash300',
    expectedCss: getExpectedCss(
      theme.pallete.lightBlueCash[300],
      'DM Sans',
      '4rem',
      '3.625rem',
      '500',
      '-0.02rem'
    )
  },
  {
    children: 'Ex ullamco aute est veniam sit.',
    tag: 'span',
    styleType: 'title1',
    styleColor: 'lightBlueCash300',
    expectedCss: getExpectedCss(
      theme.pallete.lightBlueCash[300],
      'DM Sans',
      '3.3rem',
      '3rem',
      '500',
      '-0.02rem'
    )
  },
  {
    children: 'Ex ullamco aute est veniam sit.',
    tag: 'span',
    styleType: 'title2',
    styleColor: 'lightBlueCash300',
    expectedCss: getExpectedCss(
      theme.pallete.lightBlueCash[300],
      'DM Sans',
      '2.475rem',
      '2.25rem',
      '500',
      '-0.02rem'
    )
  },
  {
    children: 'Ex ullamco aute est veniam sit.',
    tag: 'span',
    styleType: 'title3',
    styleColor: 'lightBlueCash300',
    expectedCss: getExpectedCss(
      theme.pallete.lightBlueCash[300],
      'DM Sans',
      '1.8rem',
      '1.5rem',
      '500',
      '-0.02rem'
    )
  },
  {
    children: 'Ex ullamco aute est veniam sit.',
    tag: 'span',
    styleType: 'subtitle',
    styleColor: 'lightBlueCash300',
    expectedCss: getExpectedCss(
      theme.pallete.lightBlueCash[300],
      'DM Sans',
      '1.544rem',
      '1.1875rem',
      '400',
      '0rem'
    )
  },
  {
    children: 'Ex ullamco aute est veniam sit.',
    tag: 'span',
    styleType: 'body1',
    styleColor: 'lightBlueCash300',
    expectedCss: getExpectedCss(
      theme.pallete.lightBlueCash[300],
      'DM Sans',
      '1.381rem',
      '1.0625rem',
      '400',
      '0rem'
    )
  },
  {
    children: 'Ex ullamco aute est veniam sit.',
    tag: 'span',
    styleType: 'body1Medium',
    styleColor: 'lightBlueCash300',
    expectedCss: getExpectedCss(
      theme.pallete.lightBlueCash[300],
      'DM Sans',
      '1.381rem',
      '1.0625rem',
      '500',
      '0rem'
    )
  },
  {
    children: 'Ex ullamco aute est veniam sit.',
    tag: 'span',
    styleType: 'body2',
    styleColor: 'lightBlueCash300',
    expectedCss: getExpectedCss(
      theme.pallete.lightBlueCash[300],
      'DM Sans',
      '1.219rem',
      '0.9375rem',
      '400',
      '0rem'
    )
  },
  {
    children: 'Ex ullamco aute est veniam sit.',
    tag: 'span',
    styleType: 'body3',
    styleColor: 'lightBlueCash300',
    expectedCss: getExpectedCss(
      theme.pallete.lightBlueCash[300],
      'DM Sans',
      '1.056rem',
      '0.8125rem',
      '400',
      '0rem'
    )
  },
  {
    children: 'Ex ullamco aute est veniam sit.',
    tag: 'span',
    styleType: 'button',
    styleColor: 'lightBlueCash300',
    expectedCss: getExpectedCss(
      theme.pallete.lightBlueCash[300],
      'DM Sans',
      '1.5rem',
      '0.75rem',
      '500',
      '0rem'
    )
  },
  {
    children: 'Ex ullamco aute est veniam sit.',
    tag: 'span',
    styleType: 'buttonSm',
    styleColor: 'lightBlueCash300',
    expectedCss: getExpectedCss(
      theme.pallete.lightBlueCash[300],
      'DM Sans',
      '1rem',
      '0.625rem',
      '500',
      '0rem'
    )
  },
  {
    children: 'Ex ullamco aute est veniam sit.',
    tag: 'span',
    styleType: 'input',
    styleColor: 'lightBlueCash300',
    expectedCss: getExpectedCss(
      theme.pallete.lightBlueCash[300],
      'DM Sans',
      '1.381rem',
      '1.0625rem',
      '400',
      '0rem'
    )
  },
  {
    children: 'Ex ullamco aute est veniam sit.',
    tag: 'span',
    styleType: 'label',
    styleColor: 'lightBlueCash300',
    expectedCss: getExpectedCss(
      theme.pallete.lightBlueCash[300],
      'DM Sans',
      '1rem',
      '0.5rem',
      '500',
      '0rem'
    )
  },
  {
    children: 'Ex ullamco aute est veniam sit.',
    tag: 'span',
    styleType: 'link',
    styleColor: 'lightBlueCash300',
    expectedCss: getExpectedCss(
      theme.pallete.lightBlueCash[300],
      'DM Sans',
      '1.5rem',
      '0.75rem',
      '500',
      '0rem'
    )
  },
  {
    children: 'Ex ullamco aute est veniam sit.',
    tag: 'span',
    styleType: 'tag',
    styleColor: 'lightBlueCash300',
    expectedCss: getExpectedCss(
      theme.pallete.lightBlueCash[300],
      'DM Sans',
      '1rem',
      '0.5rem',
      '500',
      '0rem'
    )
  },
  {
    children: 'Ex ullamco aute est veniam sit.',
    tag: 'div',
    styleType: 'tag',
    styleColor: 'lightBlueCash300',
    expectedCss: getExpectedCss(
      theme.pallete.lightBlueCash[300],
      'DM Sans',
      '1rem',
      '0.5rem',
      '500',
      '0rem'
    )
  },
  {
    children: 'Ex ullamco aute est veniam sit.',
    tag: 'p',
    styleType: 'tag',
    styleColor: 'lightBlueCash300',
    expectedCss: getExpectedCss(
      theme.pallete.lightBlueCash[300],
      'DM Sans',
      '1rem',
      '0.5rem',
      '500',
      '0rem'
    )
  },
  {
    children: 'Ex ullamco aute est veniam sit.',
    tag: undefined,
    styleType: 'tag',
    styleColor: 'lightBlueCash300',
    expectedCss: getExpectedCss(
      theme.pallete.lightBlueCash[300],
      'DM Sans',
      '1rem',
      '0.5rem',
      '500',
      '0rem'
    )
  },
  {
    children: 'Ex ullamco aute est veniam sit.',
    tag: undefined,
    styleType: 'tag',
    styleColor: 'darkBlueCash100',
    expectedCss: getExpectedCss(
      theme.pallete.darkBlueCash[100],
      'DM Sans',
      '1rem',
      '0.5rem',
      '500',
      '0rem'
    )
  }
]
