import { useState } from 'react'

/* eslint-disable react/prop-types */
import { Text } from 'components/Text'
import { Form, Formik } from 'formik'
import { toNumber } from 'vanilla-masker'
import * as Yup from 'yup'

import { InputWithFormik } from '../InputWithFormik'

export default {
  title: 'components/Forms/Input/withFormik',
  component: InputWithFormik
}
const Template = ({ name, ...args }) => (
  <Formik initialValues={{ [name]: args.value || '' }}>
    <Form>
      <InputWithFormik {...args} name={name} />
    </Form>
  </Formik>
)

const WithOnchangeTemplate = ({ name, ...args }) => {
  const [inputValue, setInputValue] = useState('')
  const handleChange = event => setInputValue(event.target.value)
  return (
    <>
      <Formik
        initialValues={{ [name]: args.value || '' }}
        validationSchema={Yup.object().shape({
          [name]: Yup.string()
            .required('Campo obrigatório')
            .test(
              'loanAmountCents',
              'O valor precisa ser maior ou igual a R$ 50.000,00',
              loanAmountCentsValue =>
                loanAmountCentsValue && toNumber(loanAmountCentsValue) > 4999999
            )
        })}
        validateOnBlur
      >
        <Form>
          <InputWithFormik {...args} name={name} onChange={handleChange} />
        </Form>
      </Formik>
      <Text styleType="body2">{inputValue}</Text>
    </>
  )
}
export const Default = Template.bind({})
Default.args = {
  label: 'label',
  id: 'test',
  name: 'input',
  icon: 'user'
}

export const Loading = Template.bind({})
Loading.args = {
  label: 'label',
  id: 'test',
  name: 'input',
  isLoading: true
}

export const WithOneMask = Template.bind({})
WithOneMask.args = {
  label: 'label',
  status: 'success',
  errorMessage: 'A error message here',
  id: 'test',
  name: 'input',
  mask: '999.999.999-99'
}
export const WithTwoMasks = Template.bind({})
WithTwoMasks.args = {
  label: 'label',
  errorMessage: 'A error message here',
  id: 'test',
  name: 'input',
  mask: ['999.999.999-99', '99.999.999/9999-99']
}

export const WithOnChange = WithOnchangeTemplate.bind({})
WithOnChange.args = {
  label: 'label',
  errorMessage: 'A error message here',
  id: 'test',
  name: 'input'
}

export const WithMoneyMask = WithOnchangeTemplate.bind({})
WithMoneyMask.args = {
  label: 'label',
  errorMessage: 'A error message here',
  id: 'test',
  name: 'input',
  mask: 'money'
}

export const WithPercentageMask = WithOnchangeTemplate.bind({})
WithPercentageMask.args = {
  label: 'label',
  errorMessage: 'A error message here',
  id: 'test',
  name: 'input',
  mask: 'percentage'
}

export const ReadOnly = Template.bind({})
ReadOnly.args = {
  label: 'label',
  errorMessage: 'A error message here',
  id: 'test',
  readOnly: true,
  icon: 'user',
  name: 'input',
  value: '12123123',
  mask: ['999.999.999-99', '99.999.999/9999-99']
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'label',
  errorMessage: 'A error message here',
  id: 'test',
  disabled: true,
  icon: 'user',
  name: 'input',
  mask: ['999.999.999-99', '99.999.999/9999-99']
}
