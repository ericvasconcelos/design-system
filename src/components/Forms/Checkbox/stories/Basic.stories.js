import { CheckboxBasic } from '../CheckboxBasic'

export default {
  title: 'components/Forms/Checkbox/Basic',
  component: CheckboxBasic
}

const Template = args => <CheckboxBasic {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 'checkbox',
  name: 'example',
  label: 'Example'
}

export const Checked = Template.bind({})
Checked.args = {
  id: 'checkbox',
  name: 'example',
  label: 'Example',
  checked: true
}

export const Error = Template.bind({})
Error.args = {
  id: 'checkbox',
  name: 'example',
  label: 'Example',
  messageError: 'Erro'
}

export const Disabled = Template.bind({})
Disabled.args = {
  id: 'checkbox',
  name: 'example',
  label: 'Example',
  disabled: true
}

export const Indeterminate = Template.bind({})
Indeterminate.args = {
  id: 'checkbox',
  name: 'example',
  label: 'Example',
  indeterminate: true
}

export const Group = () => (
  <>
    <CheckboxBasic id="checkbox1" name="example" label="Example 1" value="one" checked />
    <CheckboxBasic id="checkbox2" name="example" label="Example 2" value="two" />
    <CheckboxBasic id="checkbox3" name="example" label="Example 3" value="three" />
  </>
)
