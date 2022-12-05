import React from 'react'

import { Tag } from 'components/Tag'

export default {
  title: 'Components/Tag',
  component: Tag
}

const Template = args => <Tag {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Tag'
}

export const DarkBlue = Template.bind({})
DarkBlue.args = {
  styleType: 'darkBlue',
  text: 'Tag'
}

export const LightBlue = Template.bind({})
LightBlue.args = {
  styleType: 'lightBlue',
  text: 'Tag'
}

export const Gold = Template.bind({})
Gold.args = {
  styleType: 'gold',
  text: 'Tag'
}

export const Gray = Template.bind({})
Gray.args = {
  styleType: 'gray',
  text: 'Tag'
}

export const Success = Template.bind({})
Success.args = {
  styleType: 'success',
  text: 'Tag'
}

export const Warning = Template.bind({})
Warning.args = {
  styleType: 'warning',
  text: 'Tag',
  children: (
    <div>
      <p>a</p>
    </div>
  )
}

export const Danger = Template.bind({})
Danger.args = {
  styleType: 'danger',
  text: 'Tag'
}
