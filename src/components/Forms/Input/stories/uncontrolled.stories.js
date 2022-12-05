import { InputBasic } from '../InputBasic.js'

export default {
  title: 'components/Forms/Input/Basic/uncontrolled',
  component: InputBasic
}

const Template = args => <InputBasic {...args} />

export const Default = Template.bind({})
Default.args = {
  name: 'name',
  label: 'label',
  id: 'test'
}

export const Error = Template.bind({})
Error.args = {
  name: 'name',
  label: 'label',
  status: 'error',
  errorMessage: 'A error message here',
  id: 'test'
}

export const Success = Template.bind({})
Success.args = {
  name: 'name',
  label: 'label',
  status: 'success',
  errorMessage: 'A error message here',
  id: 'test'
}

export const Loading = Template.bind({})
Loading.args = {
  name: 'name',
  label: 'label',
  status: 'loading',
  errorMessage: 'A error message here',
  id: 'test'
}

export const WithOneMask = Template.bind({})
WithOneMask.args = {
  name: 'name',
  label: 'label',
  status: 'success',
  errorMessage: 'A error message here',
  id: 'test',
  mask: '999.999.999-99'
}
export const WithTwoMasks = Template.bind({})
WithTwoMasks.args = {
  name: 'name',
  label: 'label',
  status: 'success',
  errorMessage: 'A error message here',
  id: 'test',
  mask: ['999.999.999-99', '99.999.999/9999-99']
}

export const Disabled = Template.bind({})
Disabled.args = {
  name: 'name',
  label: 'label',
  disabled: true,
  errorMessage: 'A error message here',
  id: 'test',
  icon: 'user',
  value: 'initial value'
}
