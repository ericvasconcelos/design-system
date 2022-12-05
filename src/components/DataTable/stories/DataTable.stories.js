import React from 'react'

import { action } from '@storybook/addon-actions'
import { DataTable } from 'components/DataTable'
import { theme } from 'styles/theme'

import { headers, data, collapse } from './fixtures.js'

export default {
  title: 'Components/DataTable',
  component: DataTable
}

const Template = args => (
  <div style={{ backgroundColor: theme.pallete.greyCash[200] }}>
    <DataTable {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  headers,
  data,
  totalRows: 5,
  numberPages: 2,
  perPage: 4,
  onSort: action('onSort'),
  onChangePage: action('onChangePage')
}

export const Empty = Template.bind({})
Empty.args = {
  headers,
  data: [],
  // eslint-disable-next-line max-len
  messageWhenEmpty: 'Lamento, mas o nome Pedro Alvaro não foi localizado. Por favor, verifique o que foi digitado e tente novamente.',
  onSort: action('onSort'),
  onChangePage: action('onChangePage')
}

export const Collapse = Template.bind({})
Collapse.args = {
  headers,
  collapse,
  data,
  totalRows: 5,
  numberPages: 5,
  onSort: action('onSort'),
  onChangePage: action('onChangePage')
}
