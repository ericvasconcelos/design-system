import { Formik, Form } from 'formik'

import { CheckboxWithFormik } from '../CheckboxWithFormik'

export default {
  title: 'components/Forms/Checkbox/Formik',
  component: CheckboxWithFormik
}

export const Default = () => (
  <Formik initialValues={{ example: false }}>
    <Form>
      <CheckboxWithFormik id="checkbox" name="example" label="Example" />
    </Form>
  </Formik>
)

export const Checked = () => (
  <Formik initialValues={{ example: true }}>
    <Form>
      <CheckboxWithFormik id="checkbox" name="example" label="Example" />
    </Form>
  </Formik>
)

export const Disabled = () => (
  <Formik initialValues={{ example: true }}>
    <Form>
      <CheckboxWithFormik id="checkbox" name="example" label="Example" disabled />
    </Form>
  </Formik>
)

export const Indeterminate = () => (
  <Formik initialValues={{ example: false }}>
    <Form>
      <CheckboxWithFormik id="checkbox" name="example" label="Example" indeterminate />
    </Form>
  </Formik>
)

export const Group = () => (
  <Formik initialValues={{ example: [] }}>
    <Form>
      <CheckboxWithFormik id="checkbox1" name="example" label="Example 1" value="one" />
      <CheckboxWithFormik id="checkbox2" name="example" label="Example 2" value="two" />
      <CheckboxWithFormik id="checkbox3" name="example" label="Example 3" value="three" />
    </Form>
  </Formik>
)
