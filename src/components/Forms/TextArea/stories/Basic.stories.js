import { TextAreaBasic } from '../index.js'

export default {
  title: 'components/Forms/TextArea/TextAreaBasic',
  component: TextAreaBasic
}

const Template = args => <TextAreaBasic {...args} />

export const Default = Template.bind({})
Default.args = {
  id: 'id',
  name: 'name',
  label: 'some label text here',
  infoMessage: 'some informative text here'
}
