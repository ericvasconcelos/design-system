import { Icon } from 'components/Icon/index.js'
import { Text } from 'components/Text'

import { Tooltip } from '../index.js'

export default {
  title: 'components/Tooltip',
  component: Tooltip
}

const Template = args => (
  <Tooltip {...args}>
    <Icon icon="user">
      Some text here
    </Icon>
    <Text styleType="body2">Lorem ipsum dolor sit, amet co</Text>
  </Tooltip>
)

export const Default = Template.bind({})
Default.args = {
  placement: 'bottom-start'
}
