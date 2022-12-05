import { Container } from '../index.js'
import { Content } from './fixtures'

export default {
  title: 'components/Container',
  component: Container
}

const Template = args => (
  <Container {...args}>
    <Content>Box representando o conteúdo dentro do container</Content>
  </Container>
)

export const Default = Template.bind({})
Default.args = {
  /* write default args here */
}
