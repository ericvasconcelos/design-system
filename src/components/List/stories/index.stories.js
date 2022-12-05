import { useEffect, useState } from 'react'

import { Button } from 'components/Button'
import { getGuttersNames } from 'utils/getGuttersNames/index.js'
import { getTypographyNames } from 'utils/getTypographyNames'

import { List } from '../index.js'

export default {
  title: 'components/List',
  component: List,
  argTypes: {
    gap: {
      control: {
        type: 'select',
        options: getGuttersNames()
      }
    },
    typography: {
      control: {
        type: 'select',
        options: getTypographyNames()
      }
    }
  }
}

const Template = args => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const { items: initialItems } = args
    setItems(initialItems)
  }, [])

  const handleClick = () => {
    setItems([...items, 'vai', 'bem?'])
  }

  return (
    <>
      <Button onClick={handleClick}>Click me</Button>
      <List items={items} />
    </>
  )
}

export const Default = Template.bind({})
Default.args = {
  items: ['oie', 'tuto', 'pom']
}
