import { Loader } from '../index.js'

export default {
  title: 'components/Loader',
  component: Loader
}

const Template = args => <Loader {...args} />

export const Default = Template.bind({})
Default.args = {
  /* write default args here */
}

export const WithChildren = Template.bind({})
WithChildren.args = {
  children: <p>Teste</p>
}
