import { theme } from 'styles/theme'
import { getIconNames } from 'utils/getIconNames/index.js'

import { Button } from '../index.js'

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: getIconNames()
      }
    }
  }
}

const Template = args => <Button {...args} />

const DarkTemplate = args => (
  <div style={{ background: `${theme.pallete.darkBlueCash[400]}`, padding: '10px' }}>
    <Button {...args} />
  </div>
)

export const PrimaryBlue = Template.bind({})
PrimaryBlue.args = {
  children: 'Button',
  icon: 'arrowRight',
  styleColor: 'blue'
}

export const PrimaryWhite = DarkTemplate.bind({})
PrimaryWhite.args = {
  children: 'Button',
  icon: 'arrowRight',
  styleColor: 'white'
}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {
  children: 'Button',
  icon: 'arrowRight',
  styleColor: 'dark'
}

export const PrimaryBlueDisabled = Template.bind({})
PrimaryBlueDisabled.args = {
  children: 'Button',
  icon: 'arrowRight',
  styleColor: 'blue',
  disabled: true
}

export const SecondaryBlue = Template.bind({})
SecondaryBlue.args = {
  children: 'Button',
  icon: 'arrowRight',
  styleType: 'secondary'
}

export const SecondaryWhite = DarkTemplate.bind({})
SecondaryWhite.args = {
  children: 'Button',
  icon: 'arrowRight',
  styleColor: 'white',
  styleType: 'secondary'
}

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {
  children: 'Button',
  icon: 'arrowRight',
  styleColor: 'dark',
  styleType: 'secondary'
}

export const SecondaryBlueDisabled = Template.bind({})
SecondaryBlueDisabled.args = {
  children: 'Button',
  icon: 'arrowRight',
  styleColor: 'blue',
  styleType: 'secondary',
  disabled: true
}

export const PrimaryBlueLoadingWithoutText = Template.bind({})
PrimaryBlueLoadingWithoutText.args = {
  icon: 'arrowRight',
  isLoading: true
}

export const PrimaryWhiteLoadingWithoutText = DarkTemplate.bind({})
PrimaryWhiteLoadingWithoutText.args = {
  icon: 'arrowRight',
  styleColor: 'white',
  isLoading: true
}

export const PrimaryDarkLoadingWithoutText = Template.bind({})
PrimaryDarkLoadingWithoutText.args = {
  icon: 'arrowRight',
  styleColor: 'dark',
  isLoading: true
}

export const PrimaryBlueLoadingWithText = Template.bind({})
PrimaryBlueLoadingWithText.args = {
  loadingText: 'Carregando ...',
  isLoading: true
}

export const PrimaryWhiteLoadingWithText = DarkTemplate.bind({})
PrimaryWhiteLoadingWithText.args = {
  loadingText: 'Carregando ...',
  styleColor: 'white',
  isLoading: true
}

export const PrimaryDarkLoadingWithText = Template.bind({})
PrimaryDarkLoadingWithText.args = {
  loadingText: 'Carregando ...',
  styleColor: 'dark',
  isLoading: true
}
export const DarkTextWithIcon = Template.bind({})
DarkTextWithIcon.args = {
  icon: 'chevronDown',
  styleColor: 'dark',
  styleType: 'text',
  children: 'Button'
}

export const BlueTextWithIcon = Template.bind({})
BlueTextWithIcon.args = {
  icon: 'chevronDown',
  styleColor: 'blue',
  styleType: 'text',
  children: 'Button'
}

export const WhiteTextWithIcon = DarkTemplate.bind({})
WhiteTextWithIcon.args = {
  icon: 'chevronDown',
  styleColor: 'blue',
  styleType: 'text',
  children: 'Button'
}
