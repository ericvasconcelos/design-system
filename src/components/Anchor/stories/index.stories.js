import { theme } from 'styles/theme'
import { getIconNames } from 'utils/getIconNames/index.js'

import { Anchor } from '../index.js'

export default {
  title: 'components/Anchor',
  component: Anchor,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: [...getIconNames(), '']
      }
    }
  }
}

const Template = args => <Anchor {...args} />

const DarkTemplate = args => (
  <div style={{ background: `${theme.pallete.darkBlueCash[400]}` }}>
    <Anchor {...args} />
  </div>
)

export const BlueAnchorUnderline = Template.bind({})
BlueAnchorUnderline.args = {
  children: 'Eu sou um Anchor underline'
}

export const WhiteAnchorUnderline = DarkTemplate.bind({})
WhiteAnchorUnderline.args = {
  children: 'Eu sou um Anchor underline',
  styleColor: 'white'
}

export const DarkAnchorUnderline = Template.bind({})
DarkAnchorUnderline.args = {
  children: 'Eu sou um Anchor underline',
  styleColor: 'dark'
}

export const BlueAnchor = Template.bind({})
BlueAnchor.args = {
  children: 'Eu sou um Anchor',
  styleType: 'text'
}

export const WhiteAnchor = DarkTemplate.bind({})
WhiteAnchor.args = {
  children: 'Eu sou um Anchor',
  styleColor: 'white',
  styleType: 'text'
}

export const DarkAnchor = Template.bind({})
DarkAnchor.args = {
  children: 'Eu sou um Anchor',
  styleColor: 'dark',
  styleType: 'text'
}
