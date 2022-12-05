import { useState } from 'react'

import { DropdownWithCheckbox as DropdownCBComponent } from 'components/Forms/Dropdown'

export default {
  title: 'components/Forms/Dropdown/DropdownWithCheckbox',
  component: DropdownCBComponent
}

const Template = args => {
  const [value, setValue] = useState([])
  const handleChange = event => {
    setValue(event)
  }
  return <DropdownCBComponent {...args} value={value} onChange={handleChange} />
}

export const NormalMultiselect = Template.bind({})
NormalMultiselect.args = {
  id: 'field1',
  name: 'field1',
  label: 'Options',
  placeholder: 'Placeholder',
  options: [
    { text: 'Option 1', value: '1' },
    { text: 'Option 2', value: '2' },
    { text: 'Option 3', value: '3' },
    { text: 'Option 4', value: '4' },
    { text: 'Option 5', value: '5' }
  ],
  infoMessage: 'DropdownWithCheckbox sem uso de isDefault',
  errorMessage: 'Essa é uma mensagem de erro'
}

export const MultiselectWithDefault = Template.bind({})
MultiselectWithDefault.args = {
  id: 'field2',
  name: 'field2',
  label: 'Options for isDefault',
  placeholder: 'Placeholder for isDefault',
  options: [
    { text: 'Somente este', value: '1', isDefault: true },
    { text: 'Option 2', value: '2' },
    { text: 'Option 3', value: '3' },
    { text: 'Option 4', value: '4' },
    { text: 'Option 5', value: '5' }
  ],
  infoMessage: 'DropdownWithCheckbox com uso de isDefault',
  errorMessage: 'Essa é uma mensagem de erro'
}
