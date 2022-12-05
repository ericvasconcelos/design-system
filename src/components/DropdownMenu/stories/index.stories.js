import { Button } from 'components/Button'

import { DropdownMenu } from '../index.js'

export default {
  title: 'components/DropdownMenu',
  component: DropdownMenu
}

const Template = args => <DropdownMenu {...args} />
export const Default = Template.bind({})
Default.args = {
  buttonLabel: 'Menu',
  buttonIcon: 'verticalMore',
  buttonStyle: 'text',
  menuItems: [
    {
      key: 'item1',
      render: () => (
        <Button onClick={() => console.log('a')} styleType="secondary">
          Button 1 com nome grande
        </Button>
      )
    },
    {
      key: 'item2',
      render: () => (
        <Button onClick={() => console.log('b')} styleType="secondary">
          Button 2
        </Button>
      )
    }
  ]
}
