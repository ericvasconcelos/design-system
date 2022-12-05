import { useState } from 'react'

import { Text } from 'components/Text/index.js'

import { InputBasic } from '../InputBasic.js'

export default {
  title: 'components/Forms/Input/Basic/controlled',
  component: InputBasic
}

const Template = args => {
  // eslint-disable-next-line react/destructuring-assignment
  const [value, setValue] = useState(args.value)

  const handleChange = event => setValue(event.target.value)
  return (
    <>
      <InputBasic {...args} value={value} onChange={handleChange} />
      <Text styleColor="darkBlueCash200" styleType="body2">
        {value}
      </Text>
    </>
  )
}

const IconActionTemplate = args => {
  const [value, setValue] = useState('')
  const [show, setShow] = useState(false)
  const handleChange = event => setValue(event.target.value)
  const handleIconClick = () => setShow(!show)
  return (
    <InputBasic
      {...args}
      value={value}
      onChange={handleChange}
      type={show ? 'text' : 'password'}
      onIconClick={handleIconClick}
      icon={!show ? 'eye' : 'closedEye'}
    />
  )
}

export const Default = Template.bind({})
Default.args = {
  name: 'name',
  label: 'label',
  id: 'test',
  icon: 'user',
  infoMessage: 'Preencha o campo se achar bacana'
}

export const Error = Template.bind({})
Error.args = {
  name: 'name',
  label: 'label',
  errorMessage: 'A error message here',
  id: 'test',
  icon: 'user',
  status: 'error'
}

export const Success = Template.bind({})
Success.args = {
  name: 'name',
  label: 'label',
  status: 'success',
  errorMessage: 'A error message here',
  id: 'test',
  icon: 'user'
}

export const Loading = Template.bind({})
Loading.args = {
  name: 'name',
  label: 'label',
  status: 'loading',
  errorMessage: 'A error message here',
  id: 'test',
  icon: 'user'
}

export const WithOneMask = Template.bind({})
WithOneMask.args = {
  name: 'name',
  label: 'label',
  status: 'success',
  errorMessage: 'A error message here',
  id: 'test',
  icon: 'user',
  mask: '999.999.999-99'
}
export const WithTwoMasks = Template.bind({})
WithTwoMasks.args = {
  name: 'name',
  label: 'label',
  status: 'success',
  errorMessage: 'A error message here',
  id: 'test',
  icon: 'user',
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

export const WithIconAction = IconActionTemplate.bind({})
WithIconAction.args = {
  name: 'name',
  label: 'senha'
}
