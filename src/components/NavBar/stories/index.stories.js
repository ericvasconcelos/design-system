import { NavBar } from '../index.js'

export default {
  title: 'components/NavBar',
  component: NavBar

}

const Template = args => <NavBar {...args} />

export const Default = Template.bind({})
Default.args = {
  /* write default args here */
}
