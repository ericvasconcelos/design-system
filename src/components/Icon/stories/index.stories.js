import { theme } from 'styles/theme.js'
import { getColorFromName } from 'utils/getColorFromName'
import { getIconNames } from 'utils/getIconNames'

import { Icon } from '../index.js'

export default {
  title: 'components/Icon',
  component: Icon,
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: getIconNames()
      }
    }
  }
}
const style = {
  minWidth: 50,
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
  display: 'flex',
  background: theme.pallete.greyCash[100]
}

const palleteNames = Object.keys(theme.pallete)
const toneNames = [100, 200, 300, 400, 500]
const pallete = palleteNames
  .map(palleteName => toneNames.map(toneName => `${palleteName}${toneName}`))
  .flat()

const Template = args => (
  <div
    style={{
      display: 'grid',
      maxWidth: '100%',
      gridTemplateColumns: 'repeat(5, 1fr)',
      gap: '1rem',
      height: 50,
      justifyContent: 'space-evenly',
      flexWrap: 'wrap'
    }}
  >
    {pallete.map(styleColor => (
      <div
        key={styleColor}
        style={{ ...style, background: getColorFromName({ theme, styleColor }) }}
      >
        <Icon {...args} />
      </div>
    ))}
  </div>
)

export const Default = Template.bind({})
Default.args = {
  icon: 'arrowDown',
  styleColor: 'lightBlueCash300'
}
