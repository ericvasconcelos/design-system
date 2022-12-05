import { Formik, Form } from 'formik'

import { TextAreaWithFormik } from '../index.js'

export default {
  title: 'components/Forms/TextArea/TextAreaWithFormik',
  component: TextAreaWithFormik
}

const Template = args => (
  <Formik initialValues={{ name: 'mensagem' }}>
    <Form>
      <TextAreaWithFormik {...args} />
    </Form>
  </Formik>
)

export const Default = Template.bind({})
Default.args = {
  id: 'id',
  name: 'name',
  label: 'some label text here',
  infoMessage: 'some informative text here'
}
