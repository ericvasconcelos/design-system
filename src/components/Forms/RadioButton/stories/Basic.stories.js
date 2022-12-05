import { RadioButtonBasic } from '../RadioButtonBasic'

export default {
  title: 'components/Forms/RadioButton/Basic',
  component: RadioButtonBasic
}

const Template = args => <RadioButtonBasic {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'example',
  label: 'Example',
  options: [
    { label: 'One', value: 'one' },
    { label: 'Two', value: 'two' },
    { label: 'Three', value: 'three' }
  ]
}

export const Checked = Template.bind({})
Checked.args = {
  name: 'example',
  label: 'Example',
  options: [
    { label: 'One', value: 'one' },
    { label: 'Two', value: 'two' },
    { label: 'Three', value: 'three' }
  ],
  value: 'one'
}

export const Disabled = Template.bind({})
Disabled.args = {
  name: 'example',
  label: 'Example',
  disabled: true,
  options: [
    { label: 'One', value: 'one' },
    { label: 'Two', value: 'two' },
    { label: 'Three', value: 'three' }
  ]
}

export const DisabledChecked = Template.bind({})
DisabledChecked.args = {
  name: 'example',
  label: 'Example',
  disabled: true,
  value: 'one',
  options: [
    { label: 'One', value: 'one' },
    { label: 'Two', value: 'two' },
    { label: 'Three', value: 'three' }
  ]
}

export const Error = Template.bind({})
Error.args = {
  name: 'example',
  label: 'Example',
  messageError: 'Error',
  options: [
    { label: 'One', value: 'one' },
    { label: 'Two', value: 'two' },
    { label: 'Three', value: 'three' }
  ]
}
