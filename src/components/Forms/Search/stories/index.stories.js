import { Search } from '../index.js'

export default {
  title: 'components/Forms/Search',
  component: Search
}

const Template = args => <Search {...args} />

export const Default = Template.bind({})
Default.args = {
  ariaLabel: 'busca no conteudo do site',
  name: 'search',
  icon: 'search',
  label: 'Search aqui',
  id: 'id',
  options: [
    ['value', 'key1', []],
    ['value', 'key2', []],
    ['value', 'key3', []],
    ['value', 'key4', []]
  ]
}

Default.parameters = {
  backgrounds: { default: 'dark' }
}
