import { create } from '@storybook/theming/create'

export default create({
  base: 'light',
  brandTitle: 'Design System',
  brandUrl: 'https://www.cashme.com.br',
  brandImage: `${process.env.NEXT_PUBLIC_URL_PREFIX}/images/logo.svg`,
  fontBase: '"DM Sans", sans-serif'
})
