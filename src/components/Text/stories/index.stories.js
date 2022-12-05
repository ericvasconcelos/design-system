import { getTypographyNames } from 'utils/getTypographyNames'

import { Text } from '../index.js'

export default {
  title: 'components/Text',
  component: Text,
  argTypes: {
    styleType: {
      control: {
        type: 'select',
        options: getTypographyNames()
      }
    }
  }
}

const Template = args => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  children:
    `Sunt enim velit deserunt proident qui cillum. Elit et mollit eiusmod sint
    rure culpa. Commodo magna sit eu fugiat tempor. Et sit ex cillum amet ad
    enim anim adipisicing aliquip cillum laboris officia cupidatat deserunt.`
}
