import { getTypographyNames } from 'utils/getTypographyNames'

import { Title } from '../index.js'

export default {
  title: 'components/Title',
  component: Title,
  argTypes: {
    styleType: {
      control: {
        type: 'select',
        options: getTypographyNames()
      }
    }
  }
}

const Template = args => <Title {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Título massa'
}
