import { DropdownWithFormik as DropdownWithFormikComponent } from 'components/Forms/Dropdown'
import { Formik, Form } from 'formik'

export default {
  title: 'Components/Forms/Dropdown/DropdownWithFormik',
  component: DropdownWithFormikComponent
}

const Template = args => (
  <Formik initialValues={{ field: '' }}>
    <Form>
      <DropdownWithFormikComponent {...args} />
    </Form>
  </Formik>
)

export const Default = Template.bind({})
Default.args = {
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
  informationMessage: 'Uma informação aqui'
}

export const Success = Template.bind({})
Success.args = {
  id: 'field',
  name: 'field',
  label: 'Options',
  status: 'success',
  placeholder: 'placeholder',
  options: [
    { text: 'Option 1', value: '1' },
    { text: 'Option 2', value: '2' },
    { text: 'Option 3', value: '3' }
  ],
  icon: 'chevronDown',
  informationMessage: 'Uma informação aqui'
}

export const Error = Template.bind({})
Error.args = {
  id: 'field',
  name: 'field',
  label: 'Options',
  status: 'error',
  placeholder: 'placeholder',
  options: [
    { text: 'Option 1', value: '1' },
    { text: 'Option 2', value: '2' },
    { text: 'Option 3', value: '3' }
  ],
  icon: 'chevronDown',
  informationMessage: 'Uma informação aqui'
}

export const Disabled = Template.bind({})
Disabled.args = {
  id: 'field',
  name: 'field',
  label: 'Options',
  placeholder: 'placeholder',
  disabled: true,
  options: [
    { text: 'Option 1', value: '1' },
    { text: 'Option 2', value: '2' },
    { text: 'Option 3', value: '3' }
  ],
  icon: 'chevronDown',
  informationMessage: 'Uma informação aqui'
}
