import { Formik, Form } from 'formik'

import { RadioButtonWithFormik } from '../RadioButtonWithFormik'

export default {
  title: 'components/Forms/RadioButton/Formik',
  component: RadioButtonWithFormik
}

export const Default = () => (
  <Formik initialValues={{ example: '' }}>
    <Form>
      <RadioButtonWithFormik
        name="example"
        label="Example"
        options={[
          { label: 'One', value: 'one' },
          { label: 'Two', value: 'two' },
          { label: 'Three', value: 'three' }
        ]}
      />
    </Form>
  </Formik>
)

export const Checked = () => (
  <Formik initialValues={{ example: 'one' }}>
    <Form>
      <RadioButtonWithFormik
        name="example"
        label="Example"
        options={[
          { label: 'One', value: 'one' },
          { label: 'Two', value: 'two' },
          { label: 'Three', value: 'three' }
        ]}
      />
    </Form>
  </Formik>
)

export const Disabled = () => (
  <Formik initialValues={{ example: '' }}>
    <Form>
      <RadioButtonWithFormik
        name="example"
        label="Example"
        disabled
        options={[
          { label: 'One', value: 'one' },
          { label: 'Two', value: 'two' },
          { label: 'Three', value: 'three' }
        ]}
      />
    </Form>
  </Formik>
)

export const DisabledChecked = () => (
  <Formik initialValues={{ example: 'one' }}>
    <Form>
      <RadioButtonWithFormik
        name="example"
        label="Example"
        disabled
        options={[
          { label: 'One', value: 'one' },
          { label: 'Two', value: 'two' },
          { label: 'Three', value: 'three' }
        ]}
      />
    </Form>
  </Formik>
)
