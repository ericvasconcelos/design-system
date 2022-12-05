import { Logo } from '../index.js'

export default {
  title: 'components/Logo',
  component: Logo
}

const Template = args => <Logo {...args} />

export const Default = Template.bind({})

export const White = Template.bind({})
White.args = {
  logoType: 'white'
}

export const WhiteWithText = Template.bind({})
WhiteWithText.args = {
  logoType: 'whiteText'
}

export const DarkBlue = Template.bind({})
DarkBlue.args = {
  logoType: 'darkBlue'
}

export const DarkBlueWithText = Template.bind({})
DarkBlueWithText.args = {
  logoType: 'darkBlueText'
}

export const LightBlue = Template.bind({})
LightBlue.args = {
  logoType: 'lightBlue'
}

export const LightBlueWithText = Template.bind({})
LightBlueWithText.args = {
  logoType: 'lightBlueText'
}

export const NewBlue = Template.bind({})
NewBlue.args = {
  logoType: 'newBlue'
}

export const NewBlueWithText = Template.bind({})
NewBlueWithText.args = {
  logoType: 'newBlueText'
}

export const WithAltAndTitleCustom = Template.bind({})
WithAltAndTitleCustom.args = {
  logoType: 'lightBlueText',
  alt: 'Alt text',
  title: 'Title text'
}
