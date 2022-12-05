import { Toast } from 'components/Toast'

export default {
  title: 'Components/Toast',
  component: Toast
}

const Template = args => <Toast {...args} />

export const Succces = Template.bind({})
Succces.args = {
  active: true,
  styleType: 'success',
  text: 'Message',
  seconds: 2,
  icon: 'whiteSuccess',
  onTimeout: () => {}
}

export const SucccesWithClose = Template.bind({})
SucccesWithClose.args = {
  active: true,
  styleType: 'success',
  text: 'Message',
  seconds: 2,
  icon: 'whiteSuccess',
  isClosable: true,
  onTimeout: () => {}
}

export const Error = Template.bind({})
Error.args = {
  active: true,
  styleType: 'error',
  text: 'Message',
  seconds: 2,
  icon: 'whiteError',
  onTimeout: () => {}
}

export const ErrorWithClose = Template.bind({})
ErrorWithClose.args = {
  active: true,
  styleType: 'error',
  text: 'Message',
  seconds: 2,
  icon: 'whiteError',
  isClosable: true,
  onTimeout: () => {}
}

export const Warning = Template.bind({})
Warning.args = {
  active: true,
  styleType: 'warning',
  text: 'Message',
  seconds: 2,
  icon: 'whiteWarning',
  onTimeout: () => {}
}

export const WarningWithClose = Template.bind({})
WarningWithClose.args = {
  active: true,
  styleType: 'warning',
  text: 'Message',
  seconds: 2,
  icon: 'whiteWarning',
  isClosable: true,
  onTimeout: () => {}
}

export const Info = Template.bind({})
Info.args = {
  active: true,
  styleType: 'info',
  text: 'Message',
  seconds: 2,
  icon: 'info',
  iconStyleColor: 'greyCash100',
  onTimeout: () => {}
}

export const InfoWithClose = Template.bind({})
InfoWithClose.args = {
  active: true,
  styleType: 'info',
  text: 'Message',
  seconds: 2,
  icon: 'info',
  iconStyleColor: 'greyCash100',
  isClosable: true,
  onTimeout: () => {}
}

export const WithoutTimeout = Template.bind({})
WithoutTimeout.args = {
  active: true,
  styleType: 'info',
  text: 'Message',
  icon: 'info',
  iconStyleColor: 'greyCash100'
}

export const TopLeft = Template.bind({})
TopLeft.args = {
  active: true,
  styleType: 'info',
  text: 'Message',
  icon: 'info',
  position: 'top-left',
  iconStyleColor: 'greyCash100'
}

export const TopCenter = Template.bind({})
TopCenter.args = {
  active: true,
  styleType: 'info',
  text: 'Message',
  icon: 'info',
  position: 'top-center',
  iconStyleColor: 'greyCash100'
}