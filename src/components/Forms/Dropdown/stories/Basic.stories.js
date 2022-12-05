import { useState } from 'react'

import { DropdownBasic as DropdownComponent } from 'components/Forms/Dropdown'

export default {
  title: 'components/Forms/Dropdown/DropdownBasic',
  component: DropdownComponent
}

const Template = args => {
  const [value, setValue] = useState('')
  const handleChange = event => {
    setValue(event)
  }
  return <DropdownComponent {...args} value={value} onChange={handleChange} />
}

export const DropdownBasic = Template.bind({})
DropdownBasic.args = {
  id: 'field',
  name: 'field',
  label: 'Options',
  placeholder: 'placeholder',
  options: [
    { text: 'Option 1', value: '1' },
    { text: 'Option 2', value: '2' },
    { text: 'Option 3', value: '3' }
  ],
  icon: 'chevronDown',
  infoMessage: 'Uma informação aqui',
  errorMessage: 'Essa é uma mensagem de erro'
}
